var express = require('express');
const app = express();
const bodyParser = require("body-parser");
var articles = [{title: 'Express'}]


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.end('simple api')
})


app.get('/articles',(req, res)=>{
    res.send(articles);
})

app.get('/articles/:id', (req, res) => {
    const id = req.params.id;
    console.log('Fetching:', id);
    // res.end(id);
    res.send(articles[id]);
});

app.put('/articles/:id', function (req,res) {

})

app.post('/articles', (req, res) => {

    const article = {title:req.body.title}
    articles.push(article);
    res.send(articles);
});

app.delete('/articles/:id', (req, res) => {
    const id = req.params.id;
    console.log('Deleting:', id);
    delete articles[id];
    res.send({ message: 'Deleted' });
});

app.listen(8080);