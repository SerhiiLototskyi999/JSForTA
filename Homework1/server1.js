// server1.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    }[extname] || 'application/octet-stream';

    if (req.url === '/vote' && req.method === 'GET') {
        // Respond with the current time
        const currentTime = new Date().toString();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(currentTime);
        return;
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
