var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nashia Amourdon' });
});
/*Get the About me page*/
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me' });
});
/*Get the Contact page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });
});
module.exports = router;
