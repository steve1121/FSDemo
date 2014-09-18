// Project 3
// Author: Steven Beeson
// I hope I get it right this time.

var handleData = function (json) {
	for (var i = 0; i < json.characters.length; i++){
		var character = json.characters[i];
	};
};

handleData(json2);

var title = "3 Guys in a Story";
var char = ["John", "Jake", "Smitty"];
var setting = "Downtown Lansing";

console.log("Hello, welcome to " + title + ".");
console.log("This story pertains to the adventures of " + char[0] + ", " + char[1] + ", and " + char[2] + ".");
console.log(char[0] + ", " + char[1] + ", and " + char[2] + "'s info are as follows..");
console.log(json);
var advPrompt = prompt("Shall we throw " + char[0] + ", " + char[1] + ", and " + char[2] + " into an adventure?");
if(advPrompt === "yes"){
	alert("Let's do it!!")
	console.log("Adventure Time!!!") 
} else {
	alert("Too bad, we are going to anyway!")
	console.log("Adventure Time!!")
};
console.log("The setting is " + setting + ".");
console.log("The guys will have to take a bus depending on where they go.");

var busOpts = prompt(" - What bus would you like " + char[0] + ", " + char[1] + ", and " + char[2] + " to ride?\n=============================\n" + "Bus 1 (Lansing Mall)?\n" + "Bus 2 (Meridian Mall)?\n" + "Bus 3 (WalMart)?\n");
 

 
if(busOpts === '1'){
	console.log("Sweet, they are going to the Lansing Mall!");
} else if (busOpts === '2'){
	console.log("Cool, they will go to the Meridian Mall");
} else if (busOpts === '3') {
	console.log("Awesome, these three are going to WalMart!");
};


