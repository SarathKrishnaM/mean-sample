var express = require('express');
var router = express.Router();
var res_json = require('./data');
const Sample = require('../models/schema-model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  Sample.find({}, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      return res.json(results);
    }
  })
  // res.json(res_json);
});

router.post('/add', function (req, res, next) {
  let newSample = new Sample({
    TimeStamp: res_json.TimeStamp,
    name: res_json.name,
    Parent: res_json.Parent,
    children: res_json.children
  });
  newSample.save({}, (err, results) => {
    if (err) {
      return res.json({ success: false, message: 'Error while inserting' })
    } else {
      return res.json({ success: true, message: 'Successfully inserted' });
    }
  })
})

module.exports = router;
