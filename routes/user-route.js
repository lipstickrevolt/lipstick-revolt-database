var express = require("express");
var userRoute = express.Router();
var User = require("../models/user-schema");

userRoute

    .get("/", function(req, res){
        console.log(req.query)
        User.find(req.query, function(err, userArray){
            res.send(userArray)
        })
    })

    .post("/", function(req, res){
        newUser = new User(req.body);
        newUser.save(function(err, savedUser){
            res.send(savedUser);
        })
    })

    .delete("/:id", function(req, res){
        User.findByIdAndRemove(req.params.id, function(err, deletedUser){
            res.send(deletedUser);
        })
    })

    .put("/:id", function(req, res){
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedUser){
            res.send(editedUser);
        })
    })


module.exports = userRoute;