var express = require('express');
var router = express.Router();
var res_json = require('./data');
// import res_json from './data';

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  
res.json(res_json);
});

module.exports = router;
