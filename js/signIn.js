//"Validate" UserName and Password
$("#signin-button").click(function() { 
	var key = "abc123";
	var adminKey = "admin";

	var password = $("#password-input");
	var errorMessage = $("#invalid-credentials");
	if (password.val() != key && password.val() != adminKey){
		password.addClass("error");
		errorMessage.show();
	}
	else {
		password.removeClass("error");

		if(password.val() == key){
		window.location = "../views/home.html";
		}
		else{
			window.location = "../views/adminHome.html";
		}
	}
});
