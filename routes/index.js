var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/mongo');

/* GET home page. */
/*
router.get('/', function(req, res) {
});
*/

//var model = require('../models/modelA');
var model = require('../models/modelTemp');

router.route('/').get(function(req, res){
    //res.render('index', { title: 'Express' });
    /**
    model.find(function (err, docs) {
        if (err) return next(err);
        res.send(docs);
    }); */

    res.render('index', { title: 'Express' });

}).post(function(req, res){

});

router.route('/models').get(function(req, res){

    model.find(function (err, docs) {
        if (err) return next(err);
        res.send(docs);
    });

});

router.route("/delete").get(function(req, res){
    /**
    model.remove(function(err, docs){
        // remove all
       //res.render('index', { title: 'Express' });

    }); */
});


module.exports = router;
