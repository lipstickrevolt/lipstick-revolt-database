var express = require("express");
var app = express();
var expressJwt = require("express-jwt");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var womenRoute = require("./routes/women-route");
var eventRoute = require("./routes/event-route");
var mongoose = require("mongoose");
var config = require("./config");
var path = require('path');

var port = process.env.PORT || 4040;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use("/api", expressJwt({secret: config.secret}));
app.use("/auth/currentUser", expressJwt({secret: config.secret}));

mongoose.connect(config.database, function(err){
    if (err) throw err;
    console.log("Connected to DB");
});

app.use("/api/lipstickRevolt", require("./routes/women-route"));
app.use("/api/event", require("./routes/event-route"));
app.use("/auth", require("./routes/auth-routes"));
app.use("/users", require("./routes/user-route"));
app.listen(port, function(){
    console.log("servers up at 4040");
});