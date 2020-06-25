import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import GithubConversation from '../components/github-conversation'
import Conversation from '../components/conversation'
import GithubLink from '../components/github-link'
import Devider from '../components/devider'
import PartyBox from '../components/party-box'

function BlogPostTemplate({ data, pageContext, location, uri }) {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <PartyBox />
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {/* <a
              className="editPostLink"
              href={`https://github.com/dutzi/dutzi.github.io/edit/site/content/blog/${uri.substr(
                1
              )}/index.md`}
            >
              ✎
            </a> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
              document.querySelector('.editPostLink').href = 'https://github.com/dutzi/dutzi.github.io/edit/site/content/blog/' + window.location.pathname.slice(1, -1) + '/index.md';
            `,
              }}
            ></script>
            <span
              dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
            />
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer>
          <Bio />
          <nav>
            <ul
              style={{
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ←{' '}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: previous.frontmatter.title,
                      }}
                    />
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: next.frontmatter.title,
                      }}
                    />{' '}
                    →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          {/* <div className="pageFooter">
            <GithubLink />
          </div> */}
          <Devider />
          <div id="emojics-root"></div>
          <Conversation title={post.frontmatter.title} />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
