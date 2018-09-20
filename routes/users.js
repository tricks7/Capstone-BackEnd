var express = require('express');
var queries = require('../db/queries');
const knex = require('../db/connection');

var router = express.Router();

router.get('/', (req, res) => {
  queries.getUsers().then(users => {
    res.json({data:users});
  })
});

router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id).then(user => {
    res.json({data:user});
  })
});

router.get('/:id/products', (req, res) => {
  queries.getProductsByUserId(req.params.id).then(products => {
    res.json({data:products});
  })
});

module.exports = router;