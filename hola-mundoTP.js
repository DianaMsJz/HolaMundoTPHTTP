const http = require('http');
const hostname = '192.168.56.1';
const port = 3000;
const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hola Mundo</h1>');
});

server.listen(port, hostname, () => {
    console.log('El servidor esta ejecuntando en http://${hostname}:${port}/'); 
})