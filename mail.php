<? php
//Getting Submission Info
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

//Empty Fields
if(empty($name)||empty($vistor_email)) {
	echo "Name and email fields must be filled";
	exit;
}

//Composing Email
$email_from = $name;
$email_subject = "Personal Website";
$email_body = $message;

//Sending the Email
$to = "ssagee24@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $vistor_email \r\n"
mail($to, $email_subject, $email_body, $headers);
?>