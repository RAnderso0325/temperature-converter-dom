var temp = document.getElementById("temp");
var submitButton = document.getElementById("form");
var clearButton = document.getElementById("clear");
var result = document.getElementById("result");
var inFButton = document.getElementById("fSelectorIn");
var inCButton = document.getElementById("cSelectorIn");
var inKButton = document.getElementById("kSelectorIn");
var toFButton = document.getElementById("fSelectorTo");
var toCButton = document.getElementById("cSelectorTo");
var toKButton = document.getElementById("kSelectorTo");

function convertFromFToC(t){
	return Math.round((t-32)*(5/9));
}

function convertFromCToF(t){
	return Math.round(t*(9/5)+32);
}

function convertFromFToK(t){
	return Math.round((t+459.67)*(5/9));
}

function convertFromCToK(t){
	return Math.round(t+273.15);
}

function convertFromKToF(t){
	return Math.round((t*(9/5))-459.67);
}

function convertFromKToC(t){
	return Math.round(t-273.15);
}

function updateDegree(e){
	if(inFButton.checked == true && toCButton.checked == true){
		result.innerHTML=convertFromFToC(temp.value)+ "&deg;C";
	}else if(inCButton.checked == true && toFButton.checked == true){
		result.innerHTML=convertFromCToF(temp.value)+ "&deg;F";
	}else if(inFButton.checked == true && toKButton.checked == true){
		result.innerHTML=convertFromFToK(temp.value)+ "&deg;K";
	}else if(inCButton.checked == true && toKButton.checked == true){
		result.innerHTML=convertFromCToK(temp.value)+ "&deg;K";
	}else if(inKButton.checked == true && toFButton.checked == true){
		result.innerHTML=convertFromKToF(temp.value)+ "&deg;F";
	}else if(inKButton.checked == true && toCButton.checked == true){
		result.innerHTML=convertFromKToC(temp.value)+ "&deg;C";
	}
	e.preventDefault();
}
//MAKE A SWITCH FUNCTION FOR THIS
function clearForm(temp){
	temp.textContent="Enter Temperature";
	result.innerHTML="Result";
}

submitButton.addEventListener("submit", updateDegree);
clearButton.addEventListener("click", clearForm);