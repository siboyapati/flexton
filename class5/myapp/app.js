var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:pswd@ds113063.mlab.com:13063/mongo-flexton', {useMongoClient: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler


module.exports = app;
