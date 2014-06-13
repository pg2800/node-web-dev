var express = require('express')
,path = require('path')
,favicon = require('static-favicon')
,logger = require('morgan')
,cookieParser = require('cookie-parser')
,bodyParser = require('body-parser')

,app = express();

// view engine setup
// This section sets up and configures the Express application and middleware
// The app.set method provides settings for Express
app
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')

.use(favicon())
.use(logger('dev'))
.use(bodyParser.json())
.use(bodyParser.urlencoded())
.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
.use(function(req, res, next) {
    // var err = new Error('Not Found');
    // err.status = 404;
    // next();
});

// error handlers
function errorHandler(dev){
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: dev? err : {}
        });
    });
}

// development error handler
// will print stacktrace
if (app.get('env') === 'development') errorHandler(true)

// production error handler
// no stacktraces leaked to user
else errorHandler();

module.exports = app;