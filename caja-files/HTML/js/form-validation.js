jQuery(document).ready(function($) {

	// hide messages 
	$("#success").hide();
	
	// on submit...
	$("#contactForm #submit").click(function() {
		
		//required:
		
		//name
		var name = $("input#name").val();
		if(name == "" || name == "Name"){
			$("input#name").focus();
			return false;
		}
		
		// email
		var email = $("input#email").val();
		if(email == "" || email == "Email"){
			$("input#email").focus();
			return false;
		}
				
		// comments
		var comments = $("#comments").val();
		if(comments == "" || comments == "How can i help you?"){
			$("#comments").focus();
			return false;
		}
		
		// send mail php
		var sendMailUrl = $("#sendMailUrl").val();
		
		//to, from & subject
		var to = $("#to").val();
		var from = $("#from").val();
		var subject = $("#subject").val();
		
		// data string
		var dataString = 'name='+ name
						+ '&email=' + email        
						+ '&comments=' + comments
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject;						         
		// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#success").fadeIn();
	 	$("#contactForm").fadeOut();
	 }
	
    return false;
});

