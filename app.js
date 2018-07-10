const express = require("express");
const app = express();
const path = require("path");
// const graph = require("./graph.js");
app.use(express.static("public"));
app.set("view engine", "ejs");
const first = require("./first.js");
const second = require("./second.js");
const ids = require("./idArray.js");
const third = require("./third.js");
const fourth = require("./fourth.js");
const fifth = require("./fifth.js");



app.get("/", function(req, res){
	let dataSet = path.resolve("matches.csv");
	first.getMatchesPerYear(dataSet).then(function(data){
	    let arr1 =  Object.keys(data);
	    let arr2 = [];
	    arr1.map(function(key){ arr2.push(data[key]);});//console.log(arr2);
	    let combinedArr = {};
	    combinedArr.seasons = arr1;
	    combinedArr.matches = arr2;

        res.render("home", {data: JSON.stringify(combinedArr)});
	})
});

app.get("/third", function(req, res){
	let dataSet = path.resolve("deliveries.csv");
    let matchData = path.resolve("matches.csv")
    ids.matchIDs(matchData, 2016).then(function(data){
    	let matchIDArray = data;
        third.extraRunsPerTeam(dataSet, matchIDArray).then(function(d){
            let arr1 =  Object.keys(d);
		    let arr2 = [];
		    arr1.map(function(key){ arr2.push(d[key]);});//console.log(arr2);
		    let combinedArr = {};
		    combinedArr.teams = arr1;
		    combinedArr.runs = arr2;
            res.render("third", {data: JSON.stringify(combinedArr)});
        })
    })
});

app.get("/fourth", function(req, res){
	let dataSet = path.resolve("deliveries.csv");
    let matchData = path.resolve("matches.csv")
    ids.matchIDs(matchData, 2015).then(function(data){
    	let matchIDArray = data;
        fourth.getEconomicalBowlers(dataSet, matchIDArray).then(function(d){
            let arr1 =  Object.keys(d);
		    let arr2 = [];
		    arr1.map(function(key){ arr2.push(d[key]);});//console.log(arr2);
		    let combinedArr = {};
		    combinedArr.bowler = arr1;
		    combinedArr.economy = arr2;
            res.render("fourth", {data: JSON.stringify(combinedArr)});
        })
    })
});

app.get("/fifth", function(req, res){
	let dataSet = path.resolve("deliveries.csv");
    let matchData = path.resolve("matches.csv")
    ids.matchIDs(matchData, 2014).then(function(data){
    	let matchIDArray = data;
        fifth.getTopBatsmen(dataSet, matchIDArray).then(function(d){
            let arr1 =  Object.keys(d);
		    let arr2 = [];
		    arr1.map(function(key){ arr2.push(d[key]);});//console.log(arr2);
		    let combinedArr = {};
		    combinedArr.batsman = arr1;
		    combinedArr.run = arr2;
            res.render("fifth", {data: JSON.stringify(combinedArr)});
        })
    })
});



app.get("/second", function(req, res){
	let dataSet = path.resolve("matches.csv");
	second.matchesWonAllTeams(dataSet).then(function(data){
	    let arr1 = [];
	    let arr2 = [];
	    arr1 = Object.keys(data);
	    arr1.map(function(key, index){
	        if(!index){
	            arr2 = Object.keys(data[key])
	        }
	        Object.keys(data[key]).map(function(k){
	          if(!arr2.includes(k)){arr2.push(k);}
	        })
	    })
	    let arr3 = [];
	    arr2.map(function(key){
	        let emp = {};
	        emp["name"]= key;
	        emp["data"] = [];
	        arr1.map(function(k){
	            if(data[k][key] == undefined){
	                 emp["data"].push(0);
	            }else{
	                 emp["data"].push(data[k][key]);
	            }
	        })
	        arr3.push(emp);
	    })
	    // console.log(arr3);
		let combinedArr = {};
	    combinedArr.seasons = arr1;
	    combinedArr.winsAllTeams = arr3;

        res.render("second", {data: JSON.stringify(combinedArr)});

	});
});


app.listen(4000, function(){
    console.log("server started");
});

