var express = require("express");
var womenRoute = express.Router();
var Women = require("../models/women-schema");

womenRoute

.get("/", function(req, res){
    console.log(req.query)
    Women.find(req.query, function(err, womenArray){
        res.send(womenArray)
    })
})

.post("/", function(req, res){
    newWoman = new Women(req.body);
    newWoman.save(function(err, savedWoman){
        res.send(savedWoman);
    });
})

.delete("/:id", function(req, res){
    Women.findByIdAndRemove(req.params.id, function(err, deletedWomen){
        res.send(deletedWomen);
    })
})

.put("/:id", function(req, res){
    Women.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedWomen){
        res.send(editedWomen);
    })
})

module.exports = womenRoute;