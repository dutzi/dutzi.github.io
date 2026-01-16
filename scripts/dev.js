const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');

const PORT = process.env.PORT || 8000;
const PUBLIC_DIR = path.join(__dirname, '../public');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// Run initial build
console.log('🔨 Running initial build...');
const buildProcess = spawn('node', [path.join(__dirname, 'build.js')], {
  stdio: 'inherit'
});

buildProcess.on('close', (code) => {
  if (code !== 0) {
    console.error('Build failed');
    process.exit(1);
  }

  startServer();
});

function startServer() {
  const server = http.createServer((req, res) => {
    let filePath = path.join(PUBLIC_DIR, req.url);

    // Handle directory requests
    if (req.url.endsWith('/')) {
      filePath = path.join(filePath, 'index.html');
    }

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      // Try adding .html extension
      if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }
      // Try index.html in directory
      else if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      }
      // 404
      else {
        const notFoundPath = path.join(PUBLIC_DIR, '404.html');
        if (fs.existsSync(notFoundPath)) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(fs.readFileSync(notFoundPath));
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
        return;
      }
    }

    // Get file extension and MIME type
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Read and serve file
    try {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
    }
  });

  server.listen(PORT, () => {
    console.log(`\n🌐 Development server running at http://localhost:${PORT}`);
    console.log('   Press Ctrl+C to stop\n');
  });
}
