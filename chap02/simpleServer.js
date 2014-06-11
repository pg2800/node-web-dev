var http = require('http')
,ip = '127.0.0.1'
,port = 8124;

http.createServer(function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello, World!\n');
}).listen(port, ip);

console.log('Server runnning at http://'+ip+':'+port);