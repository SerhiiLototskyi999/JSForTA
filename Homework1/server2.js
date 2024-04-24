const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    console.log('Request URL:', req.url); // Log the requested URL
    console.log('Resolved File Path:', filePath); // Log the resolved file path

    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    }[extname] || 'application/octet-stream';

    if (req.url === '/authors' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'books.json');
        console.log('Reading file from path:', filePath); // Debugging log

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                if (err.code === 'ENOENT') {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.end('File not found');
                } else {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Internal Server Error');
                }
                return;
            }

            try {
                const authorsData = JSON.parse(data);
                const authors = authorsData.authors;

                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ authors }));
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error parsing JSON');
            }
        });
    } else {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not Found');
                return;
            }

            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        });
    }
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
