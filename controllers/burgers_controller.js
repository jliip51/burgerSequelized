var express = require('express');
var sequelize = require('sequelize');
var db = require('../models');

var router = express.Router();

 function getSum(data){
  var eatenArray = [];
  var sum;
  for (i = 0; i < data.length; i++) {
    eatenArray.push(data[i].count_eaten);
  }
  function sumArr(total, num) {
  return total + num;
  };
  sum = eatenArray.reduce(sumArr);
  return sum;
};

router.get("/", function(req, res) {
  db.Burgers.findAll({
  }).then(function(data) {
    var hbsObject = {
      burger: data,
      total: getSum(data)
    };
    res.render("index", hbsObject);
  });
});

router.post("/add", function(req, res) {
  if (req.body.name.length > 0 && req.body.name !== " ")  {
    db.Burgers.create({
      burger_name: req.body.name
    }).then(function(resp) {
      console.log(resp);
      return res.redirect("/");
    });
  } else {
  db.Burgers.findAll({
  }).then(function(data) {
    var hbsObject = {
      burger: data,
      total: getSum(data),
      alert: 'Input Name Before Clicking Submit Button.'
    };
    res.render("index", hbsObject);
  });
}
});

router.put("/:id", function(req, res) {
  var updateObj;
  if (req.body.devoured === "true") {
    updateObj = {
      devoured: true,
      count_eaten: sequelize.literal('count_eaten +1')
    }
  } else {
    updateObj = {devoured: false};
  }
    db.Burgers.update(updateObj,
    {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
  console.log(result);
  res.redirect("/");
  });
});

module.exports = router;
