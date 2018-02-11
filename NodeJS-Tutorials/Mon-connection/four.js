var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var app = express()

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//mongoose
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("mongodb connection is open!!!");
});


var profileSchema = mongoose.Schema({
    name: String,
    message: String
});

var Profile = mongoose.model('ProfileCollection', profileSchema);

app.get('/', function (req, res) {
    Profile.find(function (err, profile) {
        if (err) {
            res.json(err);
        } else {
            res.send(profile);
        }
    })
})

app.post('/', (req, res, next) => {
    var obj = new Profile({name: req.body.name, message: req.body.message});
    obj.save(function (err, data) {
        if (err) return console.error(err);
        res.send(data);
    });
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
});