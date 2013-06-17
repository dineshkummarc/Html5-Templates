<?php
/**
 * PHP contact form
 */

// If the form have been submitted and the spam check field is empty
if ( isset( $_POST['email'] ) && empty( $_POST['s_check'] ) ) :

	/**
	 * Enter your email here
	 */
	$email = 'name@example.com';

	/**
	 * Language strings
	 */
	$strings = array(
		'default_subject' => 'Message on your website',
		'default_name'    => 'Anonymous',
		'error_message'   => '<strong>Error:</strong> %s cannot be left blank', // %s is the error name
		'invalid_email'   => '<strong>Error:</strong> Email address is invalid',
		'email_success'   => 'Thank you! Your email has been sent',
		'email_error'     => 'There was a problem sending your email. Please try again'
	);

	/**
	 * Required fields
	 * We'll check and see if any of the required fields are empty.
	 */
	$required = array(
		//'name'    => 'Name',
		//'subject' => 'Subject',
		'email'   => 'Email',
		'message' => 'Message'
	);

	// Declare our $errors variable we will be using later to store any errors.
	$errors = array();

	/**
	 * Get form values and sanitize them
	 */
	$name    = jayj_html5_sanitize_string( $_POST['name'] );
	$from    = filter_var( $_POST['email'], FILTER_SANITIZE_EMAIL );
	$subject = jayj_html5_sanitize_string( $_POST['subject'] );
	$message = jayj_html5_sanitize_string( $_POST['message'] );

	// Validate the sanitized email
	if ( ! filter_var( $from, FILTER_VALIDATE_EMAIL ) )
		   $errors[] = $strings['invalid_email'];

	// Set a default name
	if ( empty( $name ) )
		$name = $strings['default_name'];

	// Set a default subject
	if ( empty( $subject ) )
		$subject = $strings['default_subject'];

	/**
	 * Loops through each required $_POST value
	 * Checks to ensure it is not empty.
	 */
	foreach ( $required as $key => $value ) :
		if ( isset( $_POST[$key] ) && ! empty( $_POST[$key] ) )
			continue;
		else
			$errors[] = sprintf( $strings['error_message'], $value );
	endforeach;

	/**
	 * Now check to see if there are any errors
	 */
	if ( empty( $errors ) ) {

		// No errors, send mail using conditional to ensure it was sent.
		if ( mail( $email, "$subject", utf8_decode( $message ), "From: $name <$from>" ) )
			echo '<p class="alert alert-success">' . $strings['email_success'] . '</p>';
		else
			echo '<p class="alert alert-error">' . $strings['email_error'] . '</p>';

	} else {
		// Errors were found, output all errors to the user.
		echo '<div class="alert alert-warning">';
			echo implode( '<br />', $errors );
		echo '</div>';
	}

else :

	// The user have tried to access thid page directly or is a spambot
	die("You're not allowed to access this page directly");

endif;

/**
 * Sanitize inputs
 *
 * @uses  FILTER_SANITIZE_STRING 		Strip tags
 * @uses  FILTER_FLAG_NO_ENCODE_QUOTES 	Prevents encoding of quotes
 * @uses  stripslashes() 				Removes slashes added to quotes
 *
 * @since  Jayj HTML5 theme 2.1
 * @param  string  $string The string to be sanitized
 * @return string          The sanitized string
 */
function jayj_html5_sanitize_string( $string ) {
	return stripslashes( filter_var( $string, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES ) );
}
