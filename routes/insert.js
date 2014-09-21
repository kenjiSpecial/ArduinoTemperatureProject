var express = require('express');
var router = express.Router();
//var model = require('../models/modelA');
var model = require('../models/modelTemp');

router.route('/').get(function(req, res){

    model.create({temp : 28}, function(err, doc){
        res.send(doc);
    });

});

module.exports = router;