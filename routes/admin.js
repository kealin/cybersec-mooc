var express = require('express');
var router = express.Router();

/* Get secret stuff */
router.get('/', function(req, res, next) {
  res.json({user : 'admin', password: '123'});
});

module.exports = router;
