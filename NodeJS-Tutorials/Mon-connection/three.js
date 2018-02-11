var express = require('express')
var bodyParser = require('body-parser')
var mongo = require('mongoskin');
var app = express()
var db = mongo.db("mongodb://localhost:27017/myproject");

db.bind('collections');

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    db.collection('documents').find().toArray(function (err, items) {
        res.json(items);
    });
})

app.post('/', (req, res, next) => {
    res.send('hello world from post');
})

app.get('/name/:name', (req, res, next) => {
    res.send({'name': req.params.name})
});

//http://localhost:3000/name/hell
app.post('/name/:name', (req, res, next) => {
    var item = req.body;
    res.json({'name': req.params.name, 'message': req.body})
});

app.listen(3000, () => {
    console.log('listing on the port 3000');
})