var ward_name=document.getElementById("w");
var warehouse = document.getElementById("wa");
var population=document.getElementById("pop");
var rice= document.getElementById("rice");
var wheat = document.getElementById("wheat");
var ragi = document.getElementById("ragi");
var salt = document.getElementById("salt");
var sugar = document.getElementById("sugar");

function submitClick()
{
	var na=ward_name.value;
	var firebaseRef = firebase.database().ref("Ward/");
	var war = warehouse.value;
	var pop = population.value;
	var q_of_rice=rice.value;
	var q_of_wheat=wheat.value;
	var q_of_ragi=ragi.value;
	var q_of_salt=salt.value;
	var q_of_sugar=sugar.value;
	firebaseRef.child(na).set({
		"warehouse_division":war,
		"population":pop,
		"rice_quantity":q_of_rice,
		"wheat_quantity":q_of_wheat,
		"ragi_quantity":q_of_ragi,
		"salt_quantity":q_of_salt,
		"sugar_quantity":q_of_sugar
	});

	firebaseRef.on("value", function(snapshot) {
    console.log(snapshot.val());
});

}