const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

// show eye
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})



function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm(){
  var email = document.Form.email.value;
  var password = document.Form.password.value;

  var emailErr = passwordErr = true;


  //password
  if(password == "") {
    printError("passwordErr", "Please enter your password");
    var elem = document.getElementById("password");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(password) === false) {
        printError("nameErr", "Please enter a valid password");
        var elem = document.getElementById("password");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
        var elem = document.getElementById("password");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");  
     }
   }
    
  //  email
  if(email == "") {
    printError("emailErr", "Please enter your email address");
     var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
  } else {
    
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false) {
        printError("emailErr", "Please enter a valid email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else{
        printError("emailErr", "");
        emailErr = false;
         var elem = document.getElementById("email");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }
  }

   
  if((passwordErr || emailErr) == true) {
    return false;
 } 
}