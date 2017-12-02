

// ---------Below: avgPrice per City using arrays + Function---------

var pricesAm = [1500, 500, 1800, 700];
var pricesLo = [2500, 1500, 1000, 900];

function averagePrice (price1, price2, price3, price4) {
	var sum = (price1 + price2 + price3 + price4);
	var avgSum = sum / 4;
	return avgSum;
}


var avgPAmsterdam = averagePrice (pricesAm[0], pricesAm[1], pricesAm[2], pricesAm[3]);
document.getElementById("avgPrice1").innerHTML = avgPAmsterdam + "&euro;";


var avgPLondon = averagePrice (pricesLo[0], pricesLo[1], pricesLo[2], pricesLo[3]);
document.getElementById("avgPrice2").innerHTML = avgPLondon + "&euro;"; 


// names of cities stored in variables 

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















