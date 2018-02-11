var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

var Blog = require('./blogSchema');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongodb connection is open!!!!');
})

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    Blog.find(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/', (req, res, next) => {
    var data = req.body;
    var blog = new Blog({
        title: data.title,
        author: data.author,
        body: data.body,
    })
    blog.save(function (err, result) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/name/:name', (req, res, next) => {

});

//http://localhost:3000/name/hell
app.post('/name/:name', (req, res, next) => {
    var item = req.body;
    res.json({'name': req.params.name, 'message': req.body})
});

app.listen(3000, () => {
    console.log('listing on the port 3000');
});