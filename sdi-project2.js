//SDI 1409
//Project 2
//Author: Steven Beeson


var  k = "Knight Gildar";
var p = "Princess Pop";
var d = "Evil Dragon";

console.log("There once was a good dragon named " + d + ".");
console.log("His greatest enemy was the dreaded " + k + "!");
console.log(k + " was always beating poor " + d + " up and stealing his poor " + p + "!");
console.log(p + " was " + d + "'s best friend and " + k +" always kidnapped her and made her feed him every night.")
console.log("Whereas " + d + " was always letting her do as she pleased as long as he could admire " + p + ".")
console.log("After so long " + d + " decided enough was enough, he was fighting back!");
console.log("He needed to prepare, big time.");

var sc = prompt ("What weapon should " + d + " weild?")
var scStrength = prompt ("What strength should the " + sc + " possess?")
var dDef = prompt ("How much defense should " + d + " possess?")
var ls = prompt ("What weapon should " + k + " weild?")
var lStrength = prompt ("What strength should the " + ls + " possess?")
var kDef = prompt ("How much defense should " + k + " possess?")

console.log(d + " equipped the " + sc + " with a strength of " + scStrength + ".")
console.log('He\'s already had a defense of ' + dDef + ".")
console.log(k + " equipped the " + ls + " with a strength of " + lStrength + ".")
console.log('He\'s already had a defense of ' + kDef + ".")

for (lStrength; lStrength <= dDef; dDef - lStrength / 2) {
	for (lStrength; lStrength >= dDef; dDef - lStrength) {
		console.log (k + " attacks " + d + '.')
		console.log (d + '\'s' + " defense is now at " + dDef + '.')
	};
};
for (scStrength; scStrength <= kDef; kDef - scStrength / 2) {
	for(scStrength; scStrength >= kDef; kDef - scStrength) {
		console.log (d + ' attacks ' + k + '.')
		console.log (k + '\'s defense is now at ' + kDef + '.')
	};
}; 
// could not figure it out after this point with the little ammount of time I had personally

// I think I should have wrapped it in a function just not sure how