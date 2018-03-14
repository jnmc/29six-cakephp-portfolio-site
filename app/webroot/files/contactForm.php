<?php 
/* thid is contact-form.php */

if(isset($_POST['check']) && !empty($_POST['check'])) {

	if($_POST['check'] == 'post-validate') {

		$html = '';
		$html .= "NAME OR URL: " . $_POST['name'] ."<br>";
		$html .= "WEBSITE: " . $_POST['website'] ."<br>";
		$html .= "EMAIL: " . $_POST['emailPhone'] ."<br>";
		$html .= "MESSAGE: " . $_POST['message'] ."<br>";

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