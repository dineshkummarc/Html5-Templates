$(document).ready(function(){

	// Call the Google Code Prettify
	if (typeof prettyPrint === 'function') {
		prettyPrint();
	}

	// Contact form
	$("#contactform").submit(function(e) {

		// Setup any needed variables
		var input_name = $('#your-name').val(),
		input_email    = $('#your-email').val(),
		input_subject  = $('#your-subject').val(),
		input_message  = $('#your-message').val(),
		response_text  = $('#response');

		// Hide any previous response text
		response_text.hide();

		// Change response text to 'loading...'
		response_text.html('Loading...').show();

		// Make AJAX request
		$.post('sendmail.php', {
			name: input_name,
			email: input_email,
			subject: input_subject,
			message: input_message
		}, function(data) {
			response_text.html(data);
		});

		// Cancel default action
		e.preventDefault();
	});

});
