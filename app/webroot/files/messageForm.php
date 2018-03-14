<?php 
/* thid is contact-form.php */

if(isset($_POST['check']) && !empty($_POST['check'])) {

	if($_POST['check'] == 'post-validate') {

		$message = $_POST['message'];
		$meetingDate = $_POST['meetingDate'];
		$nameUrl = $_POST['projName'];
		$email = $_POST['emailPhoneInfo'];

		$html = "";
		$html .= "NAME OR URL:" . $nameUrl ."<br>";
		$html .= "EMAIL:" . $email ."<br>";
		$html .= "MEETING DATE:" . $meetingDate ."<br>";
		$html .= "MESSAGE:" . $message ."<br>";

		//bool mail ( string $to , string $subject , string $message [, string $additional_headers [, string $additional_parameters ]] ) 
		$admin_email = "jiantan29@gmail.com";
		$requestemail = "website email - yours truly";
		$subject = "Message from website";
		$headers = 'From: webmaster@example.com' . "\r\n" .
		'Reply-To: webmaster@example.com' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

		//send email
		if(mail($admin_email, $subject, $html, "From:" . $requestemail, $headers)){
			//Email response
			echo true;
		} else {
			//Email response
			echo false;
		}
	}

}




?>