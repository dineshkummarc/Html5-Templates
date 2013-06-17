<?php

$recipient = "your-email@mail.com";
$author = $_POST['author'];
$email = $_POST['email'];
$title = $_POST['title'];
$mess = $_POST['message'];

if (isset($_POST['email'])) {	
	if (preg_match('(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,})', $_POST['email'])) {
		$msg = 'E-mail address is valid';
	} else {
		$msg = 'Invalid email address';
	}

  $ip = getenv('REMOTE_ADDR');
  $host = gethostbyaddr($ip);	
  $message .= "Name: ".$author."\n";
  $message .= "Email: ".$email."\n";
  $message .= "Subject: ".$title."\n";
  $message .= "Message: ".$mess."\n\n";
  $message .= "IP:".$ip." HOST: ".$host."\n";
  
  $headers .= "From: <".$email.">\r\n"; 

  $sent = mail($recipient, $title, $message, $headers); 
  

$text = "Thanks for contacting us! We will check your message within a few hours.";
	
echo '<xml>	<someText>'.$text.'</someText> </xml>';

} else {
	die('Invalid entry!');
}


?>