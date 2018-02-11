var express = require('express')
var bodyParser = require('body-parser')
var mongo = require('mongodb');
var app = express()

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';


// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.send('hello world')
})

app.post('/', (req, res, next) => {
    res.send('hello world from post');
})

app.get('/name/:name', (req, res, next) => {
    mongo.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('documents');
        collection.find({}).toArray(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log(docs);
                res.json(docs);
            }
        });

    });
});

//http://localhost:3000/name/hell
app.post('/name/:name', (req, res, next) => {
    var item = req.body;

    mongo.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('documents');
        collection.inser([
            item
        ], function (err, result) {
            if (err) {
                res.json(err);
            } else {
                client.close();
                res.json(result);
            }
        });
    });


});

app.listen(3000, () => {
    console.log('listing on the port 3000');
});