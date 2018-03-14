<?php 


if(isset($_POST['check']) && !empty($_POST['check'])) {

	if($_POST['check'] == 'pre-validate') {

		$message = $_POST['message'];
		$meetingDate = $_POST['meetingDate'];
		$nameUrl = $_POST['projName'];
		$email = $_POST['emailPhoneInfo'];



		$validateCheckArr = [];
		$errorArr = [];
		$errorArr[0] = '';

		function ifcomma($errorArrStr, $str) {
			if(strlen($errorArrStr) > strlen($str)) {
				return ",";
			} else { 
				return '.'; 
			}
				
		}


		if(preg_match("/^[ ,.:a-zA-Z0-9_-]*$/", $message)) {
			$validateCheckArr['message'] = $message;
		} else {
			$addbreak .=  ifcomma($errorArr[0], "Message not valid");
			if($addbreak) {
				$errorArr[0] .= "Message not valid" . $addbreak ." ";
				$addbreak = '';
			}
			
		}


		if(preg_match("/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/", $meetingDate)) {
			$validateCheckArr['meetingDate'] = $meetingDate;
		} else {
			$addbreak .=  ifcomma($errorArr[0], "Meeting Date not valid");
			if($addbreak) {
				$errorArr[0] .= "Meeting Date not valid" . $addbreak ." ";
				$addbreak = '';
			}
		}



		$txtType = substr($nameUrl, 0, 4);
		if(strstr($txtType, 'http') || strstr($txtType, 'www.')) {
			//name or url
			if(preg_match("/(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/imuS", $nameUrl)) {
				$validateCheckArr['nameUrl'] = $nameUrl;
			} else {
				$addbreak .=  ifcomma($errorArr[0], "Url not valid");
				if($addbreak) {
					$errorArr[0] .= "Url not valid" . $addbreak ." ";
					$addbreak = '';
				}
			}
		} else {
			//name or url
			if($nameUrl != '') {
				if(preg_match("/^[ .a-zA-Z0-9_-]*$/", $nameUrl)) {
					$validateCheckArr['nameUrl'] = $nameUrl;
				} else {
					$addbreak .=  ifcomma($errorArr[0], "Name Url not valid");
					if($addbreak) {
						$errorArr[0] .= "Name not valid" . $addbreak ." ";
						$addbreak = '';
					}
				}
			} else {
				$addbreak .=  ifcomma($errorArr[0], "Name Url not valid");
				if($addbreak) {
				$errorArr[0] .= "Name not valid" . $addbreak ." ";
				$addbreak = '';
				}
			}
		}


		if(strstr($email, '@') || strstr($email, '.') || preg_match("/^[ ,.:a-zA-Z_-]*$/", $email)) {
			//Email
			if(preg_match("/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/", $email)) {
				$validateCheckArr['email'] = $email;
			}else{
				$addbreak .=  ifcomma($errorArr[0], "Email not valid");
				if($addbreak) {
					$errorArr[0] .= "Email not valid" . $addbreak ." ";
					$addbreak = '';
				}
			}
		} else {
			//Phone info
			if(preg_match('/^(0(2|3|4|7|8))?\d{8}$/', $email) || preg_match('/^1(3|8)00\d{6}$/', $email) || preg_match('/^13\d{4}$/', $email)) {
				$validateCheckArr['email'] = $email;
			}else{
				$addbreak .=  ifcomma($errorArr[0], "Number not valid");
				if($addbreak) {
					$errorArr[0] .= "Number not valid" . $addbreak ." ";
					$addbreak = '';
				}
			}
		}



		if(is_string($errorArr[0]) == 1 && $errorArr[0] != false) {
			$error = [
				"error"=>1,
				"errormsg"=>substr(str_replace(".", ",", $errorArr[0]), 0, -2),
				"message"=>array("error"=>true, "msg"=>$validateCheckArr['message'], "date"=>$validateCheckArr['meetingDate'], "name"=>$validateCheckArr['nameUrl'], "email"=>$validateCheckArr['email'])
			];
			//print_r(substr(str_replace(".", ",", $errorArr[0]), 0, -2));

			header('Content-Type: application/json');
			echo json_encode($error);
		} else {
			$validateReturn = [
				"error"=>0,
				"errormsg"=>"",
				"message"=>array("error"=>false, "msg"=>$validateCheckArr['message'], "date"=>$validateCheckArr['meetingDate'], "name"=>$validateCheckArr['nameUrl'], "email"=>$validateCheckArr['email'])
			];
			header('Content-Type: application/json');
			echo json_encode($validateReturn);
		}



	}

}



?>