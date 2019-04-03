var ward = document.getElementById("ward").value;
var Ref = firebase.database().ref("Ward/"+ward);

function submitClick(){
Ref.orderByValue().on("value", function(data) {
   alert("Hello");
   document.write("<th>" + "Object       " + "</th>" + "<th>" + "	Value" + "</th> <br/>");
   data.forEach(function(data) {
      console.log(data.key + ": " + data.val());	  
	  document.write("<tr>" + data.key + "	</tr>" + "<tr>" + data.val() + "	</tr><br/>");
	  alert("hello");
   });
});
}