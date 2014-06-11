// node simpleServer.js
// go to: http://127.0.0.1:8124 on a browser
var http = require('http')
,ip = '127.0.0.1'
,port = 8124
,server = http.createServer();

// We can see although it was hidden in the implementation on chap02
// That the server is based on EventEmitter
server
.on('request', function onRequest(request, response) {
	response
	.writeHead(200, {'Content-Type': 'text/html'})
	.end('<html><h1>Hello, World!</h1></html>');
})
.listen(port, ip);

console.log('Server runnning at http://'+ip+':'+port);