var express = require("express");
var eventRoute = express.Router();
var Event = require("../models/event-schema");

eventRoute

    .get("/", function(req, res){
        Event.find(function(err, eventArray){
            if (err) res.status(500).send(err);
            res.send(eventArray);
        })
    })

    .post("/", function(req, res){
        var newEvent = new Event(req.body);
        newEvent.user = req.user;

        newEvent.save(function(err, savedEvent){
            if (err) res.status(500).send(err);
            res.status(201).send(savedEvent);
        });
    })

    .delete("/:id", function(req, res){
        Event.findByIdAndRemove(req.params.id, function(err, deletedEvent){
            if (err) res.status(500).send(err);
            res.send(deletedEvent);
        })
    })

    .put("/:id", function(req, res){
        console.log(req.user._id);

        Event.findByIdAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true}, function(err, editedEvent){
            if (err) res.status(500).send(err);
            res.send(editedEvent);
        })
    })

module.exports = eventRoute;