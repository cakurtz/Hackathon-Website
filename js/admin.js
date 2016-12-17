$("submit-button").click(function(){
    $.post("phpTest.php",
    {
        serviceName: $("serviceName-input").val(),
		serviceType: $("serviceType-input").val(),
		incomeRestriction: $("incomeRestriction-input").val(),
		gender: $("gender-input").val(),
		dependents: $("dependents-input").val(),
		faith: $("faith-input").val(),
		reqDocuments: $("reqDocuments-input").val(),
		description: $("description-input").val(),
		location: $("location-input").val(),
		contact: $("contact-input").val(),
		hours: $("hours-input").val(),
		weblink: $("weblink-input").val()
    });
});

        