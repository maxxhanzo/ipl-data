const csv = require("fast-csv");

function matchesWonAllTeams(matchesFile){
    return new Promise(function(resolve, reject){
        let matchesWon = {};
        let counter = 0;
        csv.fromPath(matchesFile)
                .on("data", function(match){
                    let season = match[1];
                    let winner = match[10];
                    if(counter){
                        if(winner){
                            if(!matchesWon[season]){
                                matchesWon[season] = {};
                            }
                            if(!matchesWon[season][winner]){
                                matchesWon[season][winner] = 1;
                            }else{
                                matchesWon[season][winner]++;
                            }
                        }
                    }
                    counter++;
                })
                .on("end", function(){
                    resolve(matchesWon);
                })
    })
}

module.exports = {
    matchesWonAllTeams: matchesWonAllTeams
}
