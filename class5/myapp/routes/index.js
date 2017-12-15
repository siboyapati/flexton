var express = require('express');
var router = express.Router();
var Email = require('../Model/Email')

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.send({ title: 'Express' });
});


router.get('/emails', function (req, res, next) {
    Email.find(function (err, emailList) {
        if (err) {
            console.log(err);
            res.send(err);
        }else{
            res.send({emailList});
        }
    });
});


module.exports = router;
