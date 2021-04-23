  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDNa1PlzHpA4MDU5Gkv5ioP8ReD3xCD6oo",
    authDomain: "school-form-3c6a9.firebaseapp.com",
    databaseURL: "https://school-form-3c6a9-default-rtdb.firebaseio.com/",
    projectId: "school-form-3c6a9",
    storageBucket: "school-form-3c6a9.appspot.com",
    messagingSenderId: "647981156436",
    appId: "1:647981156436:web:105b5049c249c0068c45c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messageRef=firebase.database().ref("messages")
  document.getElementById("myform").addEventListener("submit",submitForm)
  function submitForm(e){
      e.preventDefault()
      let fName=document.getElementById("fname").value
      let lName=document.getElementById("lname").value
      let mob=document.getElementById("mobno").value
      let email=document.getElementById("email").value
      let pass=document.getElementById("password").value
      let fCol=document.getElementById("favcol").value
      let dob=document.getElementById("dob").value
      sendToFirebase(fName,lName,mob,email,pass,fCol,dob)
      var x=document.querySelectorAll(".alert")
      x[0].style.display="block"
      x[1].style.display="block"
      setTimeout(() => {
        x[0].style.display="none" 
        x[1].style.display="none" 
      }, 3000);
      document.getElementById("myform").reset()
  }
function sendToFirebase(fName,lName,mob,email,pass,fCol,dob){
var newMessage=messageRef.push()
newMessage.set({
    Name:fName + " " +lName,
    Contact:mob,
    Email:email,
    Password:pass,
    Favcol:fCol,
    DOB:dob
})
}