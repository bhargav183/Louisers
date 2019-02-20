var warehouse=document.getElementById("w");
var rice= document.getElementById("rice");
var wheat = document.getElementById("wheat");
var ragi = document.getElementById("ragi");
var salt = document.getElementById("salt");
var sugar = document.getElementById("sugar");

function submitClick()
{
	var wh=warehouse.value;
	firebaseRef = firebase.database().ref("Warehouse/");
	var r = Number(firebase.database().ref("Warehouse/" + wh+"/rice_quantity").val);
	var r2 = Number(firebase.database().ref("Warehouse/" + wh+"/ragi_quantity").val);
	var w = Number(firebase.database().ref("Warehouse/" + wh+"/wheat_quantity").val);
	var s =  Number(firebase.database().ref("Warehouse/" + wh+"/sugar_quantity").val);
	var s2 = Number(firebase.database().ref("Warehouse/" + wh+"/salt_quantity").val);
	
	var q_of_rice=Number(rice.value) + r;
	var q_of_wheat=Number(wheat.value) + w;
	var q_of_ragi=Number(ragi.value) + r2;
	var q_of_salt=Number(salt.value) + s2;
	var q_of_sugar=Number(sugar.value) + s;
	console.log(typeof q_of_rice);
	console.log(typeof r);
	firebaseRef.child(wh).update({
		"rice_quantity":q_of_rice,
		"wheat_quantity":q_of_wheat,
		"ragi_quantity":q_of_ragi,
		"salt_quantity":q_of_salt,
		"sugar_quantity":q_of_sugar
	});
	alert("Sup");

}