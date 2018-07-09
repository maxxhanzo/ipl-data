const express = require("express");
const app = express();
const path = require("path");
const first = require("./first.js");
const second = require("./second.js");
const third = require("./third.js");
const fourth = require("./fourth.js");
const fifth = require("./fifth.js");
const ids = require("./idArray.js");

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});


app.listen(8080, function(){
    console.log("server started");
});

