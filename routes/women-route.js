var express = require("express");
var womenRoute = express.Router();
var Women = require("../models/women-schema");

womenRoute

.get("/", function(req, res){
    Women.find(function(err, womenArray){
        if (err) res.status(500).send(err);
        res.send(womenArray);
    })
})

.post("/", function(req, res){
    var newWoman = new Women(req.body);
    newWoman.user = req.user;

    newWoman.save(function(err, savedWoman){
        if (err) res.status(500).send(err);
        res.status(201).send(savedWoman);
    });
})

.delete("/:id", function(req, res){
    Women.findByIdAndRemove(req.params.id, function(err, deletedWomen){
        if (err) res.status(500).send(err);
        res.send(deletedWomen);
    })
})

.put("/:id", function(req, res){
    Women.findByIdAndUpdate({_id: req.params.id, user: req.usr._id}, req.body, {new: true}, function(err, editedWomen){
        if (err) res.status(500).send(err);
        res.send(editedWomen);
    })
})

module.exports = womenRoute;