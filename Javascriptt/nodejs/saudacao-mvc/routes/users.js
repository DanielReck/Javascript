var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Respondendo a rota de produtos');
});

module.exports = router;
