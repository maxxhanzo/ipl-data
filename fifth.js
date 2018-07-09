const csv = require("fast-csv");

function getTopBatsmen(deliveriesFile, matchIDArray){
	return new Promise(function(resolve, reject){
		let topScorers = {};
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
			resolve(topScorers);
		})
	})
}

module.exports = {
	getTopBatsmen: getTopBatsmen
}
