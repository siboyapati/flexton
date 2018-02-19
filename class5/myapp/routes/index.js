var express = require('express');
var router = express.Router();
var Books = require('../Model/BooksModel')

/* GET home page. */
router.get('/express', function (req, res, next) {
    res.send({title: 'Express'});
});


router.get('/findAll', function (req, res, next) {
    Books.find(function (err, booksList) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(booksList);
        }
    });
});

router.post('/', (req, res) => {
    let book = new Books({name: req.body.name, author: req.body.author, isbn: req.body.isbn});
    book.save((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})


router.delete('/:id', (req, res) => {
    var id = req.params['id'].substr(1);
    console.log(id);
    Books.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
})

router.put('/:id', (req, res) => {
    Books.findById(req.params.id, (err, books) => {
        if (err) {
            res.send(err);
        } else {
            books.name = req.body.name || books.name;
            books.author = req.body.author || books.author;
            books.isbn = req.body.isbn || books.isbn;
            books.save((err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json(data);
                }
            })
        }
    });
})


module.exports = router;
