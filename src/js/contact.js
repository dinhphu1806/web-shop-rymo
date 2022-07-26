function validate(){
	var name = document.getElementById("name").value;
	// var subject = document.getElementById("subject").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	
	error_message.style.padding = "10px";
	
	var text;
	if(name.length < 5){
	  text = "Invalid name please enter !";
	  error_message.innerHTML = text;
	  return false;
	}
	// if(subject.length < 10){
	//   text = "Invalid subject please enter !";
	//   error_message.innerHTML = text;
	//   return false;
	// }
	if(isNaN(phone) || phone.length != 10){
	  text = "Invalid phone please enter !";
	  error_message.innerHTML = text;
	  return false;
	}
	if(email.indexOf("@") == -1 || email.length < 6){
	  text = "Invalid email please enter !";
	  error_message.innerHTML = text;
	  return false;
	}
	if(message.length <= 20){
	  text = "Please Enter More Than 140 Characters";
	  error_message.innerHTML = text;
	  return false;
	}
	alert("Form Submitted Successfully !");
	return true;
  }