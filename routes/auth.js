var express = require('express');
var router = express.Router();
const knex = require('../db/connection');

router.post('/login', function(req, res, next) {
  res.json({message: 'login successful'});
});

router.post('/signup', function(req, res, next) {
  res.json({message: 'signup successful'});
});

module.exports = router;