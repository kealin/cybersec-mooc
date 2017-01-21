var express = require('express');
var router = express.Router();
var db = require('../db/tingodb');
var feedback = db.collection("feedback");

router.get('/', function(req, res, next) {
    feedback.find({}).toArray(function(err, data) {
        console.log(data);
        if (err) return console.error(err);
        res.json(data);
    });
});

router.post('/', function(req, res, next) {
    feedback.insert(
        {
            name:req.body.name,
            email:req.body.email,
            feedback: req.body.feedback
        }, function(err, result) {
            res.json(result);
    });
});

module.exports = router;

