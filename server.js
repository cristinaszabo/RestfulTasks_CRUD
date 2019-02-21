var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var path = require("path");

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require("./server/models/task.js");
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});