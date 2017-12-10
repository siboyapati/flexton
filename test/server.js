var express = require("express");
var app = express();
var port = 8000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/node-demo-flex", {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var nameSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    name: {
        type: String,
        required: true
    }
});
var User = mongoose.model("User", nameSchema);

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData
        .save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.get("/getdata", function (req, res) {
    User.find()
        .then(items => {
            res.send(items)
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
})

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(port);
