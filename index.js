const http = require('http');
const dotenv = require("dotenv");
dotenv.config();
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.APP_PORT || '5000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n The application is working fine');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
