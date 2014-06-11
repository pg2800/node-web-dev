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
		
	})
	.on('clientError', function (){
		util.log('e_clientError');
	});
};