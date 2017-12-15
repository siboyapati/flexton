var express = require('express');
var router = express.Router();
var Email = require('../Model/Email')


router.get('/', function (req, res, next) {
    Email.find(function (err, emailList) {
        if (err) return next(err);
        res.render('email', {data: emailList || []});
        // res.json(emailList);
    });
});

router.get('/:id', function (req, res, next) {
    Email.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.get('/hello', (req, res) => {
    res.send('hello world from user')
})


router.post('/', (req, res) => {
    Email.create(req.body, function (err, post) {
        if (err) {
            res.send(err);
            //return next(err);
        } else {
            // res.json(post);
            Email.find(function (err, emailList) {
                if (err) return next(err);
                res.render('email', {data: emailList || []});
                // res.json(emailList);
            });
        }
    });
})

router.put('/:id', function (req, res, next) {
    Email.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function (req, res, next) {
    Email.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/:id', function (req, res, next) {
    Email.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
