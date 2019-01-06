
var card_no=document.getElementById("no");
var head= document.getElementById("head");
var age=document.getElementById("age");
var mob=document.getElementById("mob");
var email=document.getElementById("add");
var taluk=document.getElementById("taluk");
var person1 = document.getElementById("person1");
var relation1 = document.getElementById("relation1");
var age1 = document.getElementById("age1");
var income1 = document.getElementById("occupation1");
var aadhar1 = document.getElementById("aadhar1");
var bank1 = document.getElementById("bank1");
var person2 = document.getElementById("person2");
var relation2 = document.getElementById("relation2");
var age2 = document.getElementById("age2");
var income2 = document.getElementById("occupation2");
var aadhar2 = document.getElementById("aadhar2");
var bank2 = document.getElementById("bank2");
var person3 = document.getElementById("person3");
var relation3 = document.getElementById("relation3");
var age3 = document.getElementById("age3");
var income3 = document.getElementById("occupation3");
var aadhar3 = document.getElementById("aadhar3");
var bank3 = document.getElementById("bank3");
var person4 = document.getElementById("person4");
var relation4 = document.getElementById("relation4");
var age4 = document.getElementById("age4");
var income4 = document.getElementById("occupation4");
var aadhar4 = document.getElementById("aadhar4");
var bank4 = document.getElementById("bank4");


function submitClick()
{
	var firebaseRef = firebase.database().ref("Card Details/");
    var h = head.value;
	var card=card_no.value;
    var a = age.value;
    var m=mob.value;
    var e=email.value;
    var t=taluk.value;
    var p1=person1.value;
	var r1=relation1.value;
	var ag1=age1.value;
	var i1=income1.value;
	var aa1=aadhar1.value;
	var b1=bank1.value;
	var p2=person2.value;
	var r2=relation2.value;
	var ag2=age2.value;
	var i2=income2.value;
	var aa2=aadhar2.value;
	var b2=bank2.value;
	var p3=person3.value;
	var r3=relation3.value;
	var ag3=age3.value;
	var i3=income3.value;
	var aa3=aadhar3.value;
	var b3=bank3.value;
	var p4=person4.value;
	var r4=relation4.value;
	var ag4=age4.value;
	var i4=income4.value;
	var aa4=aadhar4.value;
	var b4=bank4.value;

	alert(card)
	firebaseRef.child(card).set({
		"Head":h,
		"Age":a,
		"Mobile":m,
		"Email":e,
		"Taluk":t,

	});
	
	firebaseRef.child(card).child(p1).set({
		"Person_1":p1,
		"Relation":r1,
		"Age":ag1,
		"Income":i1,
		"Aadhar_Number":aa1,
		"Bank_Account_No":b1,
	})
	firebaseRef.child(card).child(p2).set({
		"Person_2":p2,
		"Relation":r2,
		"Age":ag2,
		"Income":i2,
		"Aadhar_Number":aa2,
		"Bank_Account_No":b2,
	})
	firebaseRef.child(card).child(p3).set({
		"Person_3":p3,
		"Relation":r3,
		"Age":ag3,
		"Income":i3,
		"Aadhar_Number":aa3,
		"Bank_Account_No":b3,
	})
	firebaseRef.child(card).child(p4).set({
		"Person_4":p4,
		"Relation":r4,
		"Age":ag4,
		"Income":i4,
		"Aadhar_Number":aa4,
		"Bank_Account_No":b4
	});

}