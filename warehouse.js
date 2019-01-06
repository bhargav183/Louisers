var warehouse=document.getElementById("w");
var rice= document.getElementById("rice");
var wheat = document.getElementById("wheat");
var ragi = document.getElementById("ragi");
var salt = document.getElementById("salt");
var sugar = document.getElementById("sugar");

function submitClick()
{
	var wh=warehouse.value;
	var firebaseRef = firebase.database().ref("Warehouse/");
	
	var q_of_rice=rice.value;
	var q_of_wheat=wheat.value;
	var q_of_ragi=ragi.value;
	var q_of_salt=salt.value;
	var q_of_sugar=sugar.value;
	
	firebaseRef.child(wh).set({
		"rice_quantity":q_of_rice,
		"wheat_quantity":q_of_wheat,
		"ragi_quantity":q_of_ragi,
		"salt_quantity":q_of_salt,
		"sugar_quantity":q_of_sugar
	});
	alert("Sup");

}