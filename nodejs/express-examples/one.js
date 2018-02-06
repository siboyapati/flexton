var express = require('express');
var app = express();

app.get('/hello', function(req, res){
    res.send('hello world');
});

app.get('/', function(req, res){
    res.send('hello world!!!!');
});

app.get('/google', function(req, res){
    res.send('hello world from google!');
});


app.listen(3000);