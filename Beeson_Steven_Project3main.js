// Project 3
// Author: Steven Beeson
// I hope I get it right this time.
// I could not figure out the correct way to bring in json data to do an age verification check.


var title = "3 Guys in a Story";
var char = ["John", "Jake", "Smitty"];
var setting = "Downtown Lansing";
var characters = json2.characters
var charactersName = json2.characters.name
var charactersAge = json2.characters.age

console.log("Hello, welcome to " + title + ".");
console.log("This story pertains to the adventures of " + char[0] + ", " + char[1] + ", and " + char[2] + ".");
console.log(char[0] + ", " + char[1] + ", and " + char[2] + "'s info are as follows..");
console.log(json2);
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
	busOpts = "the Lansing Mall"
	console.log("Sweet, they are going to the Lansing Mall!");
} else if (busOpts === '2'){
	busOpts = "the Meridian Mall"
	console.log("Cool, they will go to the Meridian Mall");
} else if (busOpts === '3') {
	busOpts = "WalMart"
	console.log("Awesome, these three are going to WalMart!");
};

console.log("After going to " + busOpts + " " + char[0] + ", " + char[1] + ", and " + char[2] + " decided to stop for a drink.") 

for (charactersAge >= 21; characters.length; characters++) {
  if (charactersAge >= 21) {
    console.log(charactersName + " is old enough to drink.");
  }else{
	console.log(charactersName + " is not old enough to drink.")  
	}
}

console.log(char[0] + ", " + char[1] + ", and " + char[2] + " decided to call it a night and went home.")
/*var ageCheck = function checkingAge(characters) {
	if (characters >= 21) {
console.log(characters + " is of age");
} else {
console.log(characters + " isn't of age");
}

}

ageCheck(json2.characters[0].age);*/