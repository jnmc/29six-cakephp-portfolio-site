
(function(){

	window.addEventListener('load', function(){

		function onya() {		
			clearInterval(waitForIt);
			var canvas = document.getElementById('hello');
			var ctx = canvas.getContext('2d');

			if (ctx){   
					
				var maxPos = 53, increPos = 0;

				var img = new Image();
				img.onload = function () {

					var i = (-190);
					var helloTimer = setInterval(function(){
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						i = parseInt(i) + 24;
						if(i<maxPos && finSaidInit != 1) {
							ctx.drawImage(img, 0, 0, 63, 27, i, 0, 198, 149);
						} else {
							ctx.drawImage(img, 0, 0, 63, 27, maxPos, 0, 198, 149);
							finSaidInit = 1;
							clearInterval(helloTimer);
						}

					}, 800/60);
						
				}
				img.src = "http://29six.com.au/app/webroot/img/29six-hello.png";
				
			} else {   
			   //canvas-unsupported code here 
			}

		}

		
		function tooright() {
			if(finSaidInit == 2) {
				var canvas = document.getElementById('hello');
				var ctx = canvas.getContext('2d');
				
				if (ctx){   
						
					var maxPos = 53, increPos = 0;

					var img = new Image();
					img.onload = function () {
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						ctx.drawImage(img, 0, 0, 63, 27, maxPos, 0, 198, 149);
							
					}
					img.src = "http://29six.com.au/app/webroot/img/29six-hello.png";
					
				} else {
					//canvas-unsupported code here 
				}	
			}
		}
	
			
		var finSaidInit = 0;
		var waitForIt;
		var hello = document.querySelector('#hello');
		var helloHeight = getComputedStyle(hello).height.split('px')[0];
		var cookieTime = moment();
		
		function showWaitForItTimer(e) {			
			if(window.pageYOffset > helloHeight) {
				clearInterval(waitForIt);
			} else if(window.pageYOffset == 0) {
				clearInterval(waitForIt);
				if(finSaidInit == 0) {
					waitForIt = setInterval(onya, 500);
				}
			}
		}
		
		function setHello(cookieName, cookiePermission, days) {
			cookieTime = cookieTime.day(days);
			document.cookie = cookieName + "=" + cookieTime.format('YYYY-MM-DD') +"; "+cookieTime.toISOString();
			//document.cookie = document.cookie+";expires=Thu, 01 Jan 1970 00:00:01 GMT";
		}
		
		function getCookie(cookieName) {

			var rCookie = document.cookie.split(';');
			for(var i=0; i<rCookie.length; i++) {
				rCookie[i] = rCookie[i].replace(" ", ""); 
				rCookieName = rCookie[i].substring(rCookie[i].search('='), (i.length-rCookie[i].search('=')));
				rCookieDate = rCookie[i].substring(rCookie[i].length, (rCookie[i].search('=')+1));
				//document.cookie = rCookie[i]+";expires=Thu, 01 Jan 1970 00:00:01 GMT";
				
 				if(rCookieName == cookieName && moment(rCookieDate).unix() > moment().unix()) {
					return true;
				}
			}
		}

		function deleteCookie() {
			
		}
		
		
		function vistorView() {
			if (getCookie('goodSir') == true) {
				finSaidInit = 2;
				tooright();
			} else {
				if(finSaidInit == 0) { 
					waitForIt = setInterval(onya, 2900);
					setHello('goodSir', 'granted', 10);
				}
			}
		
		}
		
		vistorView();
		window.addEventListener('scroll', showWaitForItTimer, false);
	
	
	
	
	/* NAVIGATION MENU */
	
	var pagesArr = [], i = 0;
	var posLblArr = [6, 73, 152, 235, 318, 494];
	$('.navi-main').find('li span a').each(function(){
		pagesArr.push({lbl:$(this).text(), lblPos:posLblArr[i++], active:false});
	});
	pagesArr.push({lbl:$('.navi-about li span a').text(), lblPos:posLblArr[5], active:false});
	
	
	 $('.navi-main li span a, .navi-about li span a').click(function(e) {
		//e.preventDefault();
		 menuInteract(this, 'click');
	 });
	
	$('.navi-main li span a, .navi-about li span a').hover(function() {
		menuInteract(this, 'hover');
	});
	
	$('.navi-main li span a, .navi-about li span a').mouseleave(function() {
		$('.selectPage').remove();
	});
	
	var menuInteract = function(curr, role) {
		var currPage = $(curr).text();
		$.each(pagesArr, function(key, val) {
			if(val.lbl == currPage) {
				 if (role == 'click') {
					
					 $('.navi-main').append("<img class='activePage' src='http://29six.com.au/app/webroot/img/active.jpg'/>");
					 $('.activePage').css({'left': val.lblPos, 'z-index':'99'});
					 if (role == 'hover') { 
						 $('.navi-main').remove($('.selectPage'));
						 $('.selectPage').css('left', val.lblPos);
					 }
				 } 
				
				if (role == 'hover') { 
					$('.navi-main').append("<img class='selectPage' src='http://29six.com.au/app/webroot/img/select.jpg'/>");
					$('.selectPage').css('left', val.lblPos);
				}
			}
		});
	}
	
	var menuActive = function(currURLRoute) {
		currURLRoute = currURLRoute.substr(1);
		$.each(pagesArr, function(key, val) {
			valLblLC = val.lbl.toLowerCase();
			if(valLblLC == currURLRoute) {
				$('.navi-main').append("<img class='activePage' src='http://29six.com.au/app/webroot/img/active.jpg'/>");
				$('.activePage').css({'left': val.lblPos, 'z-index':'99'});
			}
		});
	}
	
	menuActive(window.location.pathname);


	}, false);
	
})();



var App = angular.module('Mailsettings', ['contactFormServe']);
App.controller('ContactContoller', function($scope, $http, $window, contactFormService) {

	$scope.userTypeChk = {};
	$scope.role = {};
	$scope.role.type = [
		{user:'Developer,'},
		{user:'Client,'},
		{user:'Business,'},
		{user:'Recruiter,'},
		{user:'Recommender'}
	];

	$scope.emailOrPhoneValidation = function(senderdetails) {
		var regexEmail = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
	    var regexPhone1 = new RegExp(/^(0(2|3|4|7|8))?\d{8}$/);
	    var regexPhone2 = new RegExp(/^1(3|8)00\d{6}$/);
	    var regexPhone3 = new RegExp(/^13\d{4}$/);
	    $scope.emailifError = true

	    if(regexEmail.test(senderdetails) || regexPhone1.test(senderdetails) || regexPhone2.test(senderdetails) || regexPhone3.test(senderdetails) ) {
	    	$scope.emailifError = false;
	    }
	}

	$scope.messageValidation = function(senderdetails) {
		var regexMessage = new RegExp(/^[ ,.:a-zA-Z0-9_-]*$/);
	    $scope.messageifError = true

	    if(regexMessage.test(senderdetails)) {
	    	$scope.messageifError = false;
	    }
	}

	$scope.userType = function($event, user) {
		$scope.sender = {userTypeChk: true};
		$scope.userTypeChk = true;
		if($scope.sender['userTypeChk'] && user) {
			// error
		}
	}

	$scope.update = function(sender) {
		if(sender['userTypeChk']) {
			if(sender['message'] && sender['name'] && sender['website'] && sender['emailPhone']) {
				$scope.messageifError = false;

			    $params = $.param({
			      "check": "post-validate",
			      "message": sender['message'],
			      "name": sender['name'],
			      "website": sender['website'],
			      "emailPhone": sender['emailPhone']
			    });

		    	contactFormService.postContactFormSend($params)
		        .then(function(data) {
		        	(data.data == "1")?$scope.contactifSuccess = true: "";
		        },
		        function(error) {
		          // error
		          //var error = "Error Sending";
		        });

			}
		} else {
			// error message on userTypeChk
			$scope.messageifError = true;
		}
	}

}); 




