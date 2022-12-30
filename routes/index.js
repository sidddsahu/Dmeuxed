var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/buy', function(req, res, next) {
  res.render('buy', { title: 'Express' });
});


router.get('/add', function(req, res, next) {
  res.render('create',);
});

module.exports = router;
