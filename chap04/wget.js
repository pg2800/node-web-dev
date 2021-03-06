// The purpose of wget.js is to make an HTTP request and show you the voluminous detail of the response
// node wget.js http://example.com
var http = require('http')
,url  = require('url')
,util = require('util')
,argUrl = process.argv[2]
,parsedUrl = url.parse(argUrl, true)
,options = {
  host: parsedUrl.hostname,
  port: parsedUrl.port,
  path: parsedUrl.pathname,
  method: 'GET'
};

if (parsedUrl.search) options.path += "?"+parsedUrl.search;
var req = http.request(options, function(res) {
  util.log('STATUS: ' + res.statusCode);
  util.log('HEADERS: ' + util.inspect(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    util.log('BODY: ' + chunk);
  });
  res.on('error', function(err) {
    util.log('RESPONSE ERROR: ' + err);
  });
});
req.on('error', function(err) {
  util.log('REQUEST ERROR: ' + err);
});
req.end();