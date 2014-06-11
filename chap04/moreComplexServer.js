var http = require('http')
,util = require('util')
,url = require('url')
,os = require('os')

,server = http.createServer();
server.on('request', function (request, response){

	Ability to chain calls
	var writeHead = response.writeHead;
	response.writeHead = function (){
		writeHead.apply(this, arguments);
		return this;
	};

	var request_url = url.parse(request.url, true/*???*/);
	switch(request_url.pathname){
		case '/':
		response.writeHead(200, {'Content-type': 'text/html'});
		response.end(["<html><head><title>Hello, world!</title></head>",
			"<body><h1>Hello, world!</h1>",
			"<p><a href='/osinfo'>OS Info</a></p>",
			"</body></html>"].join('\n'));
		break;
		case '/osinfo':
		response.writeHead(200, {'Content-type':'text/html'});
		response.end(["<html><head>",
			"<title>Operating System Info</title></head>",
			"<body><h1>Operating System Info</h1>",
			"<table>",
			"<tr><th>TMP Dir</th><td>{tmpdir}</td></tr>",
			"<tr><th>Host Name</th><td>{hostname}</td></tr>",
			"<tr><th>OS Type</th>",
			"<td>{type} {osplat} {osarch} {osrelease}</td></tr>",
			"<tr><th>Uptime</th>",
			"    <td>{uptime} {loadavg}</td></tr>",
			"<tr><th>Memory</th>",
			"    <td>total: {totalmem} free:{freemem}</td></tr>",
			"<tr><th>CPU's</th>",
			"    <td><pre>{cpudata}</pre></td></tr>",
			"<tr><th>Network</th>",
			"    <td><pre>{netdata}</pre></td></tr>",
			"</table>",
			"</body></html>"]
			.join('\n')
			.replace("{tmpdir}", os.tmpDir())
			.replace("{hostname}", os.hostname())
			.replace("{type}", os.type())
			.replace("{osplat}", os.platform())
			.replace("{osarch}", os.arch())
			.replace("{osrelease}", os.release())
			.replace("{uptime}", os.uptime())
			.replace("{loadavg}", util.inspect(os.loadavg()))
			.replace("{totalmem}", os.totalmem())
			.replace("{freemem}", os.freemem())
			.replace("{cpudata}", util.inspect(os.cpus()))
			.replace("{netdata}", util.inspect(os.networkInterfaces())
		//
		));
		//
		break;
		default:
			// error
			console.log("HOLA");
			response.writeHead(404, {'Content-type': 'text/plain'});
			response.end("bad URL "+request.url);
		//
		break;
	}

});
server.listen(8124);
console.log('listening to http://localhost:8124');