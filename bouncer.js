function banOrNah() {
	var x = document.cookie;
	if (x.indexOf("banned") !== -1){
		return true
	}
	else {
		return false
	}
}

function makeCookie() {
	document.cookie = "banned=Yes";
}

function redirectFools() {
	console.log("redirecting!");
	window.location = "./banned.html"; // Thanks Jessica
}

function controlTraffic(){
	console.log("controlling traffic")
	if (banOrNah()){
		// Redirect somehow
		redirectFools()
	}
	else {
		// Let them have a nice day
		swal("Welcome to pineapplepizza.org", "Thank you for your response!")
	}
}

function writeCompliment(){
	//document.write("You are beautiful, in every single way.")
	var compliments = [
		"You are beautiful,<br> in every single way.",
		"That's right. You are<br> one of the good guys.",
		"You are perfect just<br> the way you are.",
		"Pineapple pizza is just<br> not good. You get it.",
		"Call it what it is: poo-napple pizza.",
		"It is better this way.<br> Thanks for taking the survey.",
		"Welcome to the brotherhood."]
	document.getElementById("coloring").innerHTML = "<p id =\"compliment\">" + compliments[Math.floor(Math.random() * compliments.length)] + "</p>";
}