function displayWelcome() {
  var name = document.getElementById("nameInput").value;
  // document.getElementById("welcomeMessage").innerHTML = "Welcome, " + name + "!";
  document.getElementById("userName").innerHTML = name;
  document.getElementById("welcomeForm").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "block";
  document.getElementById("options").style.display = "block";
}

// function showAnotherPage() {
//   alert("You clicked 'Go to Another Page'. This is just a demonstration. You can redirect to another page here.");
// }

function logOff() {
  // alert("Thank you for visiting! You are now logged off.");
  document.getElementById("welcomeForm").style.display = "block";
  document.getElementById("welcomeMessage").style.display = "none";
  document.getElementById("options").style.display = "none";
}
