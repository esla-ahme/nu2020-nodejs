/*
2020/8/20
Eslam Ahmed
Establish simple local server
*/
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('Hello Eslam! from your server');
}).listen(8080); // port number

// loging messages 
console.log('Hello Amr!');
console.log('The result is displayed in the Command Line Interface');