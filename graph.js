const path = require("path");
const first = require("./first.js");
const second = require("./second.js");
const third = require("./third.js");
const fourth = require("./fourth.js");
const fifth = require("./fifth.js");
const ids = require("./idArray.js");


// function getFirstObj(){
// 	let dataSet = path.resolve("matches.csv");
//     first.getMatchesPerYear(dataSet).then(function(data){
//         try {
//             return data;

//         } catch(e){
//         }
// 	})
// }

let firstObject = (function(){
	let dataSet = path.resolve("matches.csv");
    first.getMatchesPerYear(dataSet).then(function(data){
    //     try {
    //         return data;
	   // } catch(e){
    //     }
    	// console.log(data)
    	return data;
	})
})();

function getSecondObj(){}
function getThirdObj(){}
function getFourthObj(){}
function getFifthObj(){}
function getSeparateArrays(obj){}



module.exports = {
	// getFirstObj: getFirstObj,
	// getSecondObj: getSecondObj,
	// getThirdObj: getThirdObj,
	// getFourthObj: getFourthObj,
	// getFifthObj: getFifthObj,
	// getSeparateArrays: getSeparateArrays
	// firstObject: firstObject;
}
