// ------------AVG Price Per City -----------

// var amsterdam = [1500, 500, 1800, 700];
// var london = [2500, 1500, 1000, 900];

// var avgAmsterdam = (amsterdam[0] + amsterdam[1] + amsterdam[2] + amsterdam[3]) / 4; 

// var avgLondon = (london[0] + london[1] + london[2] + london[3]) / 4;

// console.log(avgAmsterdam);
// console.log(avgLondon);

// -----------------AVG Price Per City As FUNCTION------------------


// function amsterdam (price1, price2, price3, price4) {
// 	var avgAmsterdam = (price1 + price2 + price3 + price4) / 4;
// 	return avgAmsterdam;

// }

// console.log (amsterdam (1500, 500, 1800, 700));

// function london (price1, price2, price3, price4) {
// 	var avgLondon = (price1 + price2 + price3 + price4) / 4;
// 	return avgLondon;

// }

// console.log (london (2500, 1500, 1000, 900));

// ---------Below: avgPrice per City using arrays + Function---------

var pricesAm = [1500, 500, 1800, 700];
var pricesLo = [2500, 1500, 1000, 900];

function averagePrice (price1, price2, price3, price4) {
	var sum = (price1 + price2 + price3 + price4);
	var avgSum = sum / 4;
	return avgSum;
}


var avgPAmsterdam = averagePrice (pricesAm[0], pricesAm[1], pricesAm[2], pricesAm[3]);
document.getElementById("avgPrice1").innerHTML = avgPAmsterdam;


var avgPLondon = averagePrice (pricesLo[0], pricesLo[1], pricesLo[2], pricesLo[3]);
document.getElementById("avgPrice2").innerHTML = avgPLondon; 


// names of city stored in variables 

var amsterdam = "Amsterdam";
var london = "London";
var countryAm = "Netherlands";
var countryLo = "United Kingdom";

document.getElementById("name1").innerHTML = amsterdam;
document.getElementById("country1").innerHTML = countryAm;
document.getElementById("name2").innerHTML = london;
document.getElementById("country2").innerHTML = countryLo;

document.getElementById("comparison1").innerHTML = amsterdam;
document.getElementById("comparison2").innerHTML = london;


var difference = avgPLondon - avgPAmsterdam;
document.getElementById("bestPrice").innerHTML = difference + "&euro;";















