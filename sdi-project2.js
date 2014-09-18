//SDI 1409
//Project 2
//Author: Steven Beeson



var p = "Princess Pop";

	


var stopFight = false;

function FighterClass(){
	this.hp = 100;
	this.attack = 20;
	this.defense = 15;
	this.name = "";
	
	this.buildOpts = function(){
		var numOpts = 1;
		var opts = new Array();
		opts.push(buildOption(numOpts + ". Guard. (+8 Health, +1 Defense)\n",8,0,1,false,true,false));
		numOpts++
		opts.push(buildOption(numOpts + ". Attack!",0,0,0,false,true,false));
		numOpts++
		opts.push(buildOption(numOpts + ". RETREAT!!\n",0,0,0,true,false,false));
		
		return opts;	
	}
}
function buildOption(msg,hp,defense,attack,quit){
	var optObj = new Object;
	optObj.msg = msg;
	optObj.hp = hp;
	optObj.defense = defense;
	optObj.attack = attack;
	optObj.quit = quit;
	
	return optObj;
}

function newFight(){
	
	var fighter1 = new FighterClass();
	fighter1.name = "Knight Gildar";
	var fighter2 = new FighterClass();
	fighter2.name = "Evil Dragon";
	
	console.log("Fight for Love Begins!");
	
	console.log(fighter1);
	console.log(fighter2);
	turn(fighter1,fighter2);
}

function turn(attacker,defender){
	
	
	var opts = attacker.name + " - What would you like to do?\n=============================\n";
	var fighterOpts = attacker.buildOpts();
	for(var i=0; i<fighterOpts.length; i++){
		opts += fighterOpts[i].msg;	
	}
	
	var action = parseInt(prompt(opts));
	
	attacker.attack += fighterOpts[action-1].attack;
	attacker.defense += fighterOpts[action-1].defense;
	attacker.hp += fighterOpts[action-1].hp;
	
	console.log(fighterOpts[action-1].msg);
	
	if(fighterOpts[action+2]){
		defender.defense-attacker.attack
		}
	
	if(fighterOpts[action-1].quit){
		console.log(attacker.name + " RETREATS! " + defender.name + " WINS!")
	} else if(defender.hp <= 0){
		console.log(attacker.name + " WINS!")	
	} else {
		turn(defender,attacker)
	}
	
	console.log(attacker);
	console.log(defender);
	
}



newFight();
