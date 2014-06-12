var defaultApp = require('./app')
,http = require('http')
,util = require('util')

,index = require('./routes/index')
,fibonacci = require('./routes/fibonacci/index');
,users = require('./routes/users')

defaultApp
.get('/', index)
.get('/users', users)
.get('/fibonacci', fibonacci);

http
.createServer(defaultApp)
.listen(defaultApp.get('port'), function (){
	util.log("Express server listenting on port "+defaultApp.get('port'));
});
