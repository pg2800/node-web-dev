var http = require('http')
,ip = '127.0.0.1'
,port = 8124;

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello, World!\n');
}).listen(port, ip);

console.log('Server runnning at http://'+ip+':'+port);