const httpServer = require('http');
const port = 80;
const server = httpServer.createServer((req, res) => {
    res.statusCode = 200;
    res.end('<html><body><h1>Hello World</h1></body></html>');
})
server.listen(port);