const http = require('http');
const personalModule = require('./topic10');
const os = require('os');
const path = require('path');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
 
  // Зчитуємо вміст файлу index.html
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      return res.end('Error reading HTML file');
    }
 
    // Замінюємо плейсхолдери у шаблоні HTML на наші дані
    const html = data
      .replace('{{username}}', os.userInfo().username)
      .replace('{{osType}}', os.type())
      .replace('{{uptime}}', `${Math.floor(os.uptime() / 60)} minutes`)
      .replace('{{currentDir}}', __dirname)
      .replace('{{serverFileName}}', path.basename(__filename))
      .replace('{{currentDate}}', new Date().toString())
      .replace('{{greeting}}', personalModule.greetUser(os.userInfo().username));
 
    // Відправляємо відредагований HTML на клієнтську сторону
    res.end(html);
  });
});
 
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});