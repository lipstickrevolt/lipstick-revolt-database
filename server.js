var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var womenRoute = require("./routes/women-route");
var userRoute = require("./routes/user-route");
var mongoose = require("mongoose");
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect('mongodb://localhost/lipstickRevolt', function(err){
    if (err) throw err;
    console.log("Connected to DB");
});

app.use("/lipstickRevolt", womenRoute);
app.use("/users", userRoute);
app.listen(4040, function(){
    console.log("servers up at 4040");
})