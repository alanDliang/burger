var express = require('express');
var router = express.Router();
var queries = require('../models/burger.js');

router.get('/', function (req, res) {
    queries.show(function(data){
        //console.log(data);
        var Data = {
            burgerData: data
        }
        //res.render('index', {data : Data});
        res.render('index', Data);
    });
});

router.post('/create', function (req, res) {
    queries.add(req.body.item, function(data) {
        res.redirect('/');
    });
});

router.post('/update', function(req, res){
  queries.eat(req.body.id, function(result){
    res.redirect('/');
  });
});

module.exports = router;