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
	
	/*var q_of_rice=Number(rice.value);
	var q_of_wheat=Number(wheat.value);
	var q_of_ragi=Number(ragi.value);
	var q_of_salt=Number(salt.value);
	var q_of_sugar=Number(sugar.value);*/
	firebaseref.on("value", function(snapshot) {
		console.log(snapshot.val());
	}, function (error) {
   console.log("Error: " + error.code);
});
	/*firebaseRef.child(wh).set({
		"rice_quantity":q_of_rice,
		"wheat_quantity":q_of_wheat,
		"ragi_quantity":q_of_ragi,
		"salt_quantity":q_of_salt,
		"sugar_quantity":q_of_sugar
	});*/
	alert("Successful");

}