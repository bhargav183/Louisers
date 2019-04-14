var card_no=document.getElementById("no");
var head= document.getElementById("head");
var cat=document.getElementById("cat");
var address=document.getElementById("add");
var taluk=document.getElementById("taluk");
var aadhar1 = document.getElementById("aadhar1");
var aadhar2 = document.getElementById("aadhar2");
var aadhar3 = document.getElementById("aadhar3");
var aadhar4 = document.getElementById("aadhar4");


function submitClick()
{
	var firebaseRef = firebase.database().ref("Card Details/");
	var ref = firebase.database().ref("Aadhar/");
    var h = head.value;
	var card=card_no.value;
    var c=cat.value;
    var a=address.value;
    var t=taluk.value;
	var aa1=aadhar1.value;
	var aa2=aadhar2.value;
	var aa3=aadhar3.value;
	var aa4=aadhar4.value;
	var arr1 = [];
	ref.once("value", function(snapshot) {
	snapshot.forEach(function(child) {
		arr1.push(child.key)	
	})
	console.log(arr1);
	if(arr1.includes(aa1)){
		alert(aa1+"  Aadhar number is already linked");
		return;
	}
	if(arr1.includes(aa2)){
		alert(aa2+"  Aadhar number is already linked");
		return;
	}
	if(arr1.includes(aa3)){
		alert(aa3+ " Aadhar number is already linked");
		return;
	}
	if(arr1.includes(aa4)){
		alert(aa4+"  Aadhar number is already linked");
		return;
	}
	
	firebaseRef.child(card).set({
		"Head":h,
		"Aadhar_1":aa1,
		"Aadhar_2":aa2,
		"Aadhar_3":aa3,
		"Aadhar_4":aa4,
		"Category":c,
		"Taluk":t,

	});
	

})
}