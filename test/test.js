const expect = require("chai").expect;
const path = require("path");
const first = require("../first.js");
const second = require("../second.js");
const third = require("../third.js");
const fourth = require("../fourth.js");
const fifth = require("../fifth.js");
const ids = require("../idArray.js");

describe("first graph", function(){
    it("should not return empty object", function(done){
	    let dataSet = path.resolve("test/matchesTest.csv");
	    let expectedResult = {};
	    first.getMatchesPerYear(dataSet).then(function(data){
	        try {
	            expect(data).not.deep.equals(expectedResult);
	            done();
	        } catch(e){
	            done(e);
	        }
    	})
	});

    it("should return no of matches per year", function(done){
        let dataSet = path.resolve("test/matchesTest.csv");
        let expectedResult = {
                "2008": 2,
                "2010": 1,
                "2011": 3,
                "2013": 1,
                "2014": 2,
                "2017": 1
        };
        first.getMatchesPerYear(dataSet).then(function(data){
            try {
                expect(data).deep.equals(expectedResult);
                done();
            } catch(e){
                done(e);
            }
        })
    });


});


describe("second graph", function(){
    it("should return matches won by all teams over the yrs", function(done){
        let dataSet = path.resolve("test/winsTest.csv");
        let expectedResult = {
            "2011": {
                "Sunrisers Hyderabad": 1,
                "Mumbai Indians": 1,
                "Royal Challengers Bangalore": 1,
                    },
            "2013": {
                "Kings XI Punjab": 1,
                    },
            "2014":{
                "Delhi Daredevils": 1,
                "Mumbai Indians": 1,
                    }
        }
        second.matchesWonAllTeams(dataSet).then(function(data){
            try{
                expect(data).deep.equals(expectedResult);
                done();
            }catch(e){
                done(e);
            }
        })
    })
})


describe("match id array", function(){
    it("should return ids of all matches for year passed as an argument", function(done){
        let year = 2011;
        let dataSet = path.resolve("test/matchesTest.csv")
        let expectedResult = [5, 6, 7];

        ids.matchIDs(dataSet, year).then(function(data){
            try{
                expect(data).deep.equals(expectedResult);
                done();
            }catch(e){
                done(e);
            }
        })
    })
})



describe("third graph", function(){
    it("should return extra runs conceded per team for the year 2016", function(done){
        let dataSet = path.resolve("test/deliveriesTest.csv");
        let matchData = path.resolve("test/matchesTest3.csv")
        let expectedResult = {
            "Sunrisers Hyderabad": 1,
            "Royal Challengers Bangalore": 4
        };
        ids.matchIDs(matchData, 2016).then(function(data){
            try{
                let matchIDArray = data;
                third.extraRunsPerTeam(dataSet, matchIDArray).then(function(d){
                    try{
                        expect(d).deep.equals(expectedResult);
                        done();
                    }catch(e){
                        done(e);
                    }
                })
            }catch(e){}
        })
    })
})


describe("fourth graph", function(){
    it("should return the top 10 economical bowlers for the year 2015", function(done){
        let dataSet = path.resolve("test/deliveriesTest.csv");
        let matchData = path.resolve("test/matchesTest4.csv");
        let expectedResult = {
                "TS Mills": 13.2,
                "A Choudhary": 18
        }
        ids.matchIDs(matchData, 2015).then(function(data){
            try{
                let matchIDArray = data;
                fourth.getEconomicalBowlers(dataSet, matchIDArray).then(function(d){
                    try{
                        expect(d).deep.equals(expectedResult);
                        done();
                    }catch(e){
                        done(e);
                    }
                })
            }catch(e){}
        })

    })
})

describe("fifth graph", function(){
	it("should return top 10 run scorers for the year 2014", function(done){
		let dataSet = path.resolve("test/deliveriesTest.csv");
		let matchData = path.resolve("test/matchesTest5.csv");
		let expectedResult = {
			"DA Warner": 12,
			"S Dhawan": 1
		}
		ids.matchIDs(matchData, 2014).then(function(data){
			try{
				let matchIDArray = data;
				fifth.getTopBatsmen(dataSet, matchIDArray).then(function(d){
					try{
						expect(d).deep.equals(expectedResult);
						done();
					}catch(e){
						done(e);
					}
				})
			}catch(e){}
		})
	})

	it("should return top 10 run scorers for the year 2014", function(done){
		let dataSet = path.resolve("test/deliveriesTest.csv");
		let matchData = path.resolve("test/matchesTest5.csv");
		let expectedResult = {
			"DA Warner": 1,
			"S Dhawan": 1
		}
		ids.matchIDs(matchData, 2014).then(function(data){
			try{
				let matchIDArray = data;
				fifth.getTopBatsmen(dataSet, matchIDArray).then(function(d){
					try{
						expect(d).not.deep.equals(expectedResult);
						done();
					}catch(e){
						done(e);
					}
				})
			}catch(e){}
		})
	})
})
