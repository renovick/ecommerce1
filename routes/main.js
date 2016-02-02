var router = require('express').Router();



// EJS home page render
router.get('/', function(req, res) {
  res.render('main/home');
});
// about page render
router.get('/about', function(req, res) {
  res.render('main/about');
});

module.exports = router;
