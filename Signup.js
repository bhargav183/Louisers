var firstname=document.getElementById("fn");
var lastname= document.getElementById("ln");
var Email=document.getElementById("email");
var Password=document.getElementById("pw");

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});