// Container


var json = {
	"characters": {
		"01": {
			"name": "John",
			"age": 24,
			"birthday": "4/25/1990"
			},
		"02": {
			"name": "Jake",
			"age": 26,
			"birthday": "2/17/1988"
			},
		"03":{
			"name": "Smitty",
			"age": 23,
			"birthday": "11/26/1990"
		}	
	}
};

var json2 = {
	"characters": [
		{
			"uuid": 01,
			"name": "John",
			"age": 24,
			"bday": "04/25/1990"	
		},
		{
			"uuid": 02,
			"name": "Jake",
			"age": 26,
			"bday": "02/17/1988"	
		},
		{
			"uuid": 03,
			"name": "Smitty",
			"age": 23,
			"bday": "11/26/1990"	
		}
	]
};


/*for (var key in json.characters){
	var char = json.characters[key];
	char.name
    char.age
	char.birthday
}*/