const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');
const { Marked } = require('marked');
const { markedHighlight } = require('marked-highlight');
const Prism = require('prismjs');

// Load Prism languages
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');
require('prismjs/components/prism-css');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');
require('prismjs/components/prism-markdown');

const config = require('../config');

// Configure marked with syntax highlighting
const marked = new Marked(
  markedHighlight({
    langPrefix: 'language-',
    highlight(code, lang) {
      if (Prism.languages[lang]) {
        return Prism.highlight(code, Prism.languages[lang], lang);
      }
      return code;
    }
  })
);

// Paths
const CONTENT_DIR = path.join(__dirname, '../content/blog');
const TEMPLATES_DIR = path.join(__dirname, '../templates');
const STATIC_DIR = path.join(__dirname, '../static');
const ASSETS_DIR = path.join(__dirname, '../content/assets');
const JS_DIR = path.join(__dirname, '../src/js');
const OUTPUT_DIR = path.join(__dirname, '../public');

// Read templates
function loadTemplate(name) {
  return fs.readFileSync(path.join(TEMPLATES_DIR, `${name}.html`), 'utf-8');
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
}

// Create slug from directory name
function createSlug(dirName) {
  return `/${dirName}/`;
}

// Get all blog posts
function getPosts() {
  const posts = [];
  const dirs = fs.readdirSync(CONTENT_DIR);

  for (const dir of dirs) {
    const postDir = path.join(CONTENT_DIR, dir);
    const stat = fs.statSync(postDir);

    if (!stat.isDirectory()) continue;

    const mdPath = path.join(postDir, 'index.md');
    if (!fs.existsSync(mdPath)) continue;

    const fileContent = fs.readFileSync(mdPath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    posts.push({
      slug: createSlug(dir),
      dirName: dir,
      frontmatter,
      content,
      html: marked.parse(content)
    });
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return posts;
}

// Render template with data
function render(template, data) {
  let result = template;

  // Simple template replacement
  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    result = result.replace(regex, value ?? '');
  }

  return result;
}

// Build a single post page
function buildPost(post, posts, layoutTemplate, postTemplate) {
  const postIndex = posts.findIndex(p => p.slug === post.slug);
  const prevPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? posts[postIndex - 1] : null;

  // Build navigation
  let prevLink = '';
  let nextLink = '';

  if (prevPost) {
    prevLink = `<a href="${prevPost.slug}" rel="prev">← ${prevPost.frontmatter.title.replace(/<[^>]*>/g, '')}</a>`;
  }
  if (nextPost) {
    nextLink = `<a href="${nextPost.slug}" rel="next">${nextPost.frontmatter.title.replace(/<[^>]*>/g, '')} →</a>`;
  }

  const postHtml = render(postTemplate, {
    title: post.frontmatter.title,
    date: formatDate(post.frontmatter.date),
    content: post.html,
    description: post.frontmatter.description || '',
    prevLink,
    nextLink,
    slug: post.slug.slice(1, -1)
  });

  const pageHtml = render(layoutTemplate, {
    title: `${post.frontmatter.title.replace(/<[^>]*>/g, '')} | ${config.siteTitle}`,
    description: post.frontmatter.description || config.siteDescription,
    content: postHtml,
    isHome: 'false',
    siteTitle: config.siteTitle
  });

  // Create output directory
  const outputPath = path.join(OUTPUT_DIR, post.slug);
  fs.ensureDirSync(outputPath);
  fs.writeFileSync(path.join(outputPath, 'index.html'), pageHtml);

  // Copy any images from the post directory
  const postDir = path.join(CONTENT_DIR, post.dirName);
  const files = fs.readdirSync(postDir);
  for (const file of files) {
    if (file !== 'index.md') {
      fs.copySync(path.join(postDir, file), path.join(outputPath, file));
    }
  }
}

// Build index page
function buildIndex(posts, layoutTemplate, indexTemplate) {
  // Filter out unlisted posts
  const listedPosts = posts.filter(p => !p.frontmatter.unlisted);

  const postsHtml = listedPosts.map(post => `
    <article>
      <header>
        <h3>
          <a href="${post.slug}">${post.frontmatter.title}</a>
        </h3>
        <small>${formatDate(post.frontmatter.date)}</small>
      </header>
      <section>
        <p>${post.frontmatter.description || ''}</p>
      </section>
    </article>
  `).join('\n');

  const indexHtml = render(indexTemplate, {
    posts: postsHtml
  });

  const pageHtml = render(layoutTemplate, {
    title: config.siteTitle,
    description: config.siteDescription,
    content: indexHtml,
    isHome: 'true',
    siteTitle: config.siteTitle
  });

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), pageHtml);
}

// Build 404 page
function build404(layoutTemplate) {
  const content = `
    <div style="text-align: center; padding: 4rem 0;">
      <h1>404</h1>
      <p>Page not found</p>
      <a href="/">← Back to home</a>
    </div>
  `;

  const pageHtml = render(layoutTemplate, {
    title: `404 | ${config.siteTitle}`,
    description: 'Page not found',
    content,
    isHome: 'false',
    siteTitle: config.siteTitle
  });

  fs.writeFileSync(path.join(OUTPUT_DIR, '404.html'), pageHtml);
}

// Main build function
async function build() {
  console.log('🔨 Building site...');
  const startTime = Date.now();

  // Clean output directory
  fs.emptyDirSync(OUTPUT_DIR);

  // Copy static files
  console.log('📁 Copying static files...');
  fs.copySync(STATIC_DIR, OUTPUT_DIR);

  // Copy assets
  if (fs.existsSync(ASSETS_DIR)) {
    fs.copySync(ASSETS_DIR, path.join(OUTPUT_DIR, 'assets'));
  }

  // Copy JS files
  if (fs.existsSync(JS_DIR)) {
    fs.copySync(JS_DIR, path.join(OUTPUT_DIR, 'js'));
  }

  // Load templates
  const layoutTemplate = loadTemplate('layout');
  const postTemplate = loadTemplate('post');
  const indexTemplate = loadTemplate('index');

  // Get all posts
  console.log('📝 Processing markdown files...');
  const posts = getPosts();
  console.log(`   Found ${posts.length} posts`);

  // Build each post
  console.log('🏗️  Building post pages...');
  for (const post of posts) {
    buildPost(post, posts, layoutTemplate, postTemplate);
  }

  // Build index page
  console.log('🏠 Building index page...');
  buildIndex(posts, layoutTemplate, indexTemplate);

  // Build 404 page
  build404(layoutTemplate);

  const elapsed = Date.now() - startTime;
  console.log(`✅ Build complete in ${elapsed}ms`);
  console.log(`   Output: ${OUTPUT_DIR}`);
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
