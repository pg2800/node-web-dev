var defaultApp = require('./app')
,http = require('http')
,util = require('util')

,routes = require('./routes/index')
,fibonacci = require('./routes/fibonacci');

defaultApp
// .set('port', process.env.PORT || 3000)
.use('/', routes.index)
.use('/fibonacci', fibonacci.index);

http
.createServer(defaultApp)
.listen(defaultApp.get('port'), function (){
	util.log("Express server listenting on port "+defaultApp.get('port'));
});