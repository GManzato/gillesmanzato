<?php 
$mail = $_POST['email'];
$name = $_POST['name'];
$text = $_POST['message'];
$headers = 'From: '. $mail . "\r\n" .
    'Reply-To: '. $mail  . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
if($url == ''){
	$to = 'gilles.manzato@gmail.com';
	$subject = 'Question';
	$message =' You received  a mail from '.$name;
	$message .=' Text of the message : '.$text;
	if(mail($to, $subject,$message,$headers)){
		echo '{"success":"1","text":"Message send !"}';
	}
	else{
		echo '{"success":"0","text":"Message not send !"}';
	}
}
else{
	echo '{"success":"0","text":"Message is spam !"}'; 
}
?>

