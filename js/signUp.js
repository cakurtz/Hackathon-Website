//Basic functions
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function isValidZipCode(zipCode) {
	var pattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test("90210");;
	return pattern.test(zipCode);
}

//Toggle "other" entries
var sex = $("#sex-select")
sex.change(function() {
	var sexOption = $("#specify-sex-input");
	// console.log(sex.val());
	if (sex.val() == "Other")
		sexOption.show();
	else 
		sexOption.hide();
});
var infoInterest = $("#infoInterest-select")
infoInterest.change(function() {
	var infoInterestOption = $("#specify-interest-input");
	// console.log(infoInterest.val());
	if (infoInterest.val() == "Other")
		infoInterestOption.show();
	else 
		infoInterestOption.hide();
});





//Validations
// $("#submit-button").click(function() {
// 	var valid = true; 
// 	var email = $("email-input");
// 	if (!isValidEmailAddress(email.val()));
// 	{
// 		email.addClass("error");
// 	}
// 	else 
// 		email.removeClass("error");
// });

$("#submit-button").click(function() {
	var valid = true; 
	var email = $("email-input");
	var zip = $("zipcode-input");
	if (!isValidZipCode(zip.val())){
		zip.addClass("error");
	}
	else {
		zip.removeClass("error");
	}
});
