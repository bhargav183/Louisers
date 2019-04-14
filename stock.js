var ward = document.getElementById("ward").value;
var Ref = firebase.database().ref("Ward/"+ward);

function submitClick(){
Ref.orderByValue().on("value", function(data) {
   document.write("<th>" + "Object       " + "</th>" + "<th>" + "	Value" + "</th> <br/>");
   data.forEach(function(data) {
      console.log(Ref);	  
	  document.write(data.key + ": " + data.val()+"<br/>");
	  
   });
});
}