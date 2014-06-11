var http = require('http')
,util = require('util')
,url = require('url')
,os = require('os')

,server = http.createServer();
server.on('request', function (request, response){
	var request_url = url.parse(request.url, true);
	if(request_url.pathname === '/'){
		response.writeHead(200, {'Content-type': 'text/html'});
	}
});