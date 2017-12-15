var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hello',(req,res)=>{
  res.send('hello world from user')
})

module.exports = router;
