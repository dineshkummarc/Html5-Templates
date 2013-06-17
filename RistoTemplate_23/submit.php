<?php

/* config start */

$emailAddress = '';

/* config end */


require "phpmailer/class.phpmailer.php";

session_name("fancyform");
session_start();


foreach($_POST as $k=>$v)
{
	if(ini_get('magic_quotes_gpc'))
	$_POST[$k]=stripslashes($_POST[$k]);
	
	$_POST[$k]=htmlspecialchars(strip_tags($_POST[$k]));
}


$err = array(); 

if(count($err))
{
	if($_POST['ajax'])
	{
		echo '-1';
	}

	else if($_SERVER['HTTP_REFERER'])
	{
		$_SESSION['errStr'] = implode('<br />',$err);
		$_SESSION['post']=$_POST;
		
		header('Location: '.$_SERVER['HTTP_REFERER']);
	}

	exit;
}


$msg=
'Nome:	'.$_POST['first_name'].'<br />
Email:	'.$_POST['email'].'<br />
Telefono:  '.$_POST['phone_number'].'<br />
Oggetto:  '.$_POST['subject'].'<br />
IP:	'.$_SERVER['REMOTE_ADDR'].'<br /><br />

Messaggio:<br /><br />

'.nl2br($_POST['text']).'

';


$mail = new PHPMailer();
$mail->IsMail();

$mail->AddReplyTo($_POST['email'], $_POST['first_name']);
$mail->AddAddress($emailAddress);
$mail->SetFrom($_POST['email'], $_POST['first_name']);
$mail->Subject = "Nuova richiesta di ".$_POST['subject']." da ".$_POST['first_name']." | contact form risto.danielevotta.it";

$mail->MsgHTML($msg);

$mail->Send();     

unset($_SESSION['post']);

if($_POST['ajax'])
{
	echo '1';
}
else
{
	$_SESSION['sent']=1;
	
	if($_SERVER['HTTP_REFERER'])
		header('Location: '.$_SERVER['HTTP_REFERER']);
	
	exit;
}

function checkLen($str,$len=2)
{
	return isset($_POST[$str]) && mb_strlen(strip_tags($_POST[$str]),"utf-8") > $len;
}

function checkEmail($str)
{
	return preg_match("/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/", $str);
}

?>
