var express = require('express')
,path = require('path')
,favicon = require('static-favicon')
,logger = require('morgan')
,cookieParser = require('cookie-parser')
,bodyParser = require('body-parser')

,routes = require('./routes/index')
,users = require('./routes/users')

,app = express();

// view engine setup
// This section sets up and configures the Express application and middleware
// The app.set method provides settings for Express
app

// I added a port
.set('port', process.env.PORT || 3000)

.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')

.use(favicon())
.use(logger('dev'))
.use(bodyParser.json())
.use(bodyParser.urlencoded())
.use(cookieParser())
.use(express.static(path.join(__dirname, 'public')))

.use('/', routes)
.use('/users', users)

/// catch 404 and forward to error handler
.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;