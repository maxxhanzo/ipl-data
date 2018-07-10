const csv = require("fast-csv");

function getTopBatsmen(deliveriesFile, matchIDArray){
	return new Promise(function(resolve, reject){
		let topScorers = {};
		let topTen = {};
		csv.fromPath(deliveriesFile)
		.on("data", function(delivery){
			let matchID = parseInt(delivery[0]);
			let batsman = delivery[6];
			let batsmanRuns = parseInt(delivery[15]);

			if(matchIDArray.includes(matchID)){
				if(!topScorers[batsman]){
					topScorers[batsman] = batsmanRuns;
				}else{
					topScorers[batsman] += batsmanRuns;
				}
			}
		})
		.on("end", function(){
			let runsSorted;
	        runsSorted = Object.keys(topScorers).sort(function(a, b){return topScorers[b]-topScorers[a]});
		    runsSorted.map(function(key, index){
	        if(index > 9){return true;}
	        	topTen[key] = topScorers[key];
	      	})

			resolve(topTen);
		})
	})
}

module.exports = {
	getTopBatsmen: getTopBatsmen
}
