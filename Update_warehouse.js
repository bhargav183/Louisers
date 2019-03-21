var warehouse=document.getElementById("w");
var rice= document.getElementById("rice");
var wheat = document.getElementById("wheat");
var ragi = document.getElementById("ragi");
var salt = document.getElementById("salt");
var sugar = document.getElementById("sugar");

function submitClick()
{
	var wh=warehouse.value;
	var rc,we,rg,sl,su;
	firebaseRef = firebase.database().ref("Warehouse/"+wh);
	firebaseRef.once("value", function(snapshot) {
		rc = snapshot.child("rice_quantity").val();
		rg = snapshot.child("ragi_quantity").val();
		we = snapshot.child("wheat_quantity").val();
		sl = snapshot.child("salt_quantity").val();
		su = snapshot.child("sugar_quantity").val();
		var add_rice = parseInt(rice.value)+parseInt(rc);
		var add_wheat = parseInt(wheat.value)+parseInt(we);
		var add_ragi = parseInt(ragi.value)+parseInt(rg);
		var add_salt = parseInt(salt.value)+parseInt(sl);
		var add_sugar = parseInt(sugar.value)+parseInt(su);
		console.log(add_rice);
		firebaseRef.set({
		"rice_quantity":add_rice,
		"wheat_quantity":add_ragi,
		"ragi_quantity":add_wheat,
		"salt_quantity":add_salt,
		"sugar_quantity":add_sugar
		
	});
		
	}, function (error) {
   console.log("Error: " + error.code);
});
	//console.log(rc);
	/*firebaseRef.child(wh).update({
		"rice_quantity":q_of_rice,
		"wheat_quantity":q_of_wheat,
		"ragi_quantity":q_of_ragi,
		"salt_quantity":q_of_salt,
		"sugar_quantity":q_of_sugar
		
	});*/
	//console.log(rc);
	
	alert("Successfully Updated");

}