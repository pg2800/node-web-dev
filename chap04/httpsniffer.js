var util = require('util')
,url = require('url');

exports.sniffOn = function (server){
	server
	.on('request', function (request, response){
		util.log('e_request');
		util.log(requestToString(request));
	})
	.on('close', function (errno){
		util.log('e_cclose errno='+errno);
	})
	.on('checkContinue', function (request, response){
		util.log('e_checkContinue');
		util.log(requestToString(request));
		response.writeContinue();
	})
	.on('upgrade', function (){
		util.log('e_upgrade');
		util.log(requestToString(request));
	})
	.on('clientError', function (){
		util.log('e_clientError');
	});
};
var requestToString = exports.requestToString = function (request){
	var str = 'request '+request.method+' '
	+request.httpVersion+' '+request.url+'\n'
	+JSON.stringify(url.parse(request.url, true))+'\n'
	,counter = 0;

	for(key in request.headers){
		str += counter++ +' '+key+': '+request.headers[key]+'\n';
	}
	str += request.trailers + '\n' || "";
	return str;
};