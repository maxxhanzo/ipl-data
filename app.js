const express = require("express");
const app = express();
const path = require("path");
// const graph = require("./graph.js");
app.use(express.static("public"));
app.set("view engine", "ejs");
const first = require("./first.js");


let dataSet = path.resolve("matches.csv");
first.getMatchesPerYear(dataSet).then(function(data){
    let arr1 =  Object.keys(data);
    let arr2 = [];
    arr1.map(function(key){ arr2.push(data[key]);});//console.log(arr2);
    let combinedArr = {};
    combinedArr.seasons = arr1;
    combinedArr.matches = arr2;
    app.get("/", function(req, res){
	    res.render("home", {data: JSON.stringify(combinedArr)});
	});
})

app.listen(3000, function(){
    console.log("server started");
});

