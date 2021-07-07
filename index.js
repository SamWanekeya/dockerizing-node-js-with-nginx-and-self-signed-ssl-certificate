const http = require('http');
const dotenv = require("dotenv");
dotenv.config();
const hostname = process.env.HOSTNAME || '127.0.0.1';
// If this is changed don't forget to change the upstream server service ports running in the nginx.conf file
const port = process.env.APP_PORT || '4000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n The application is working fine');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
