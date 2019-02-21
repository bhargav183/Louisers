var ward = document.getElementById("ward");
var item = document.getElementById("item");
var Ref = firebase.database().ref("ward/");

function submitClick(){
Ref.orderByValue().on("value", function(data) {
   
   data.forEach(function(data) {
      console.log("The " + data.key + " rating is " + data.val());
   });
});
}