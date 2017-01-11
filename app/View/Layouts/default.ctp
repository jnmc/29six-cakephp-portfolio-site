<!DOCTYPE html>
<!--[if (IE 6) | (IE 7) | (IE 8) ]> <html id="old-ie" class="no-js" lang="en-US"> <![endif]--> 
<!--[if IE 9 | IE 10]> <html id="ie" class="no-js" lang="en-US" <![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8) ]><!-->
<html lang="en" class="no-js"> <!--<![endif]-->
<head>
	<?php echo $this->Html->charset(); ?>

	<title>29SIX We Serve Business Pages</title>
	<meta name="author" content="Jian Tan" />

	<meta name="keywords" content="Melbourne, Website, Mobile, Apps, Development, E-commerce, Graphic Design, SEO, Sydney, Brisbane, Perth, Australia, Globe">
	<meta name="description" content="29SIX is a Web Development & Multimedia company based in Melbourne. We are professionals in Graphic design, Web Development & E-commerce, Multimedia Applications, Mobile & Tablet Applications, 3D Modelling & Animation, and SEO.">
	
	<meta name="subject" content="Web Development Melbourne">
	<meta name="copyright" content="29SIX">
	<meta name="designer" content="Jian Tan">
	<meta name="copyright" content="Copyright © 2015 29SIX">
	<meta name="url" content="http://www.29SIX.com.au">
	
	
	<meta property="og:title" content="29SIX | Website & Apps building">
	<meta property="og:description" content="A Web Development & Mobile Apps strategist and consultant" />
	<meta property="og:type" content="website">
	<meta property="og:url" content="http://www.29six.com.au">
	<meta property="og:site_name" content="29SIX">
	<meta property="og:image" content="" />
	<meta name="og:phone_number" content="0403272225"/>

	<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="favicon.ico" />
	<link rel="icon" type="image/png" href="favicon.png" />
	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon.png" />


	<?php
		echo $this->Html->meta('icon');

		//echo $this->Html->css('cake.generic');
		echo $this->Html->css('style');
		echo $this->Html->css('fullcalendar');
		echo $this->Html->css('ngDialog');
		echo $this->Html->css('ngDialog-theme-default');
		
		echo $this->Html->script('jquery-1.11.3.min.js');
		echo $this->Html->script('jquery-ui.js');
		echo $this->Html->script('moment.js');
		echo $this->Html->script('fullcalendar.js');
		echo $this->Html->script('gcal.js');	
		echo $this->Html->script('angular.min.js');
		echo $this->Html->script('angular-sanitize.min.js');
		echo $this->Html->script('angular-animate.js');
		echo $this->Html->script('calendar.js');
		echo $this->Html->script('ngDialog.js');

		echo $this->Html->script('hello.js');
		echo $this->Html->script('main.js');
		echo $this->Html->script('serve.js');
		echo $this->Html->script('particles.js');

		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>

</head>

<body>
	
	<div id="main_container">
		<header>
			<div id="header_container">
				<div id="left_column">
					<div id="left_extend">&nbsp;</div>
					<div id="left_greeting_placement">
						<canvas id="hello"></canvas>
						<?php echo $this->Html->image('notjustapage.png', array('alt' => 'Our Icon for the world', 'border' => '0', 'class' => 'icon'));?>
			
					</div>
				</div>
				<div id="center_column">
					<div id="center_definition">
						<?php echo $this->Html->image('banner.jpg', array('alt' => 'Our Banner showing our proud', 'border' => '0', 'class' => 'dynamicBanner'));?>
					</div>
				</div>
				<div id="right_column">
					<div id="logo_placement">
						<?php echo $this->Html->image('29six-logo.png', array('alt' => '29SIX, Our passion for great web design', 'border' => '0', 'class' => 'site-logo'));?>
					</div>
				</div>
			</div>
		</header>
		<main role="main">
			<div id="content_container">
				<div id="left_column">
					<div id="calibration_extend">&nbsp;</div>
					<div id="technology_placement">
						<?php echo $this->Html->image('jiantan-29six-author.png', array('alt' => 'Who am I but to help make great things come to life', 'border' => '0', 'class' => 'author'));?>
						
						<div class="bio-header">
							<p>Web deveoper of this site</p>
							<p>- Jian Tan </p>
						</div>
						<div class="bio-text">
							<p style="width:190px;">I don't start with a design objective,</p>
							<p style="width:230px;">I start with a communication objective. I feel my project is successful if it communicates what it is supposed to communicate.</p>
							<p style="width:140px; float:right;">- Mike Davidson</p>
						</div>
						<div class="bio-note">
							<p>Passionate, Logical, and Diligent Web Developer that's looking to help make businesses market and grow</p> 
						</div>
						<div class="bio-footer">&nbsp;</div>
					</div>
				</div>
				<div id="main_column">
					<div id="stepping">
						<div id="main_stepping">
							<div class="steps">
								<!--content-->
							</div>
							<div class="steps_extend">
								
							</div>
						</div>
						<div id="secondary_stepping">
							<div class="steps">
								<!--content-->
							</div>
							<div class="steps_extend">
								
							</div>
						</div>
					</div>
					<div id="main_content">
						<nav>
							<ul class="navi-main">
								<li><span class="nav-status"><?php echo $this->Html->link('CV','/cv'); ?></span></li>
								<li><span class="nav-status"><?php echo $this->Html->link('Skills','/skills'); ?></span></li>
								<li><span class="nav-status"><?php echo $this->Html->link('Work','/work'); ?></span></li>
								<li><span class="nav-status"><?php echo $this->Html->link('Hire me','/hireme'); ?></span></li>
								<li><span class="nav-status"><?php echo $this->Html->link('Blog','/blog'); ?></span></li>
							</ul>
							<ul class="navi-about"><li><span class="nav-status"><?php echo $this->Html->link('About','/about'); ?></span></li></ul>
						</nav>
						
						<div id="content">
							<div class="alt_header"></div>
							<div class="content">								
			
							<?php echo $this->Session->flash(); ?>			
							<?php echo $this->fetch('content'); ?>


							</div>
						</div>
						<aside role="sidebar">
							<!-- side content -->
						<aside>
					</div>
				</div>
			</div>
		</main>
	</div>
	<footer>
		<div id="footer_container">
			<div id="contact_form_holder">
				<div class="contact_form_elements">
					<div class="contact_form_minimise_btn">
					</div>
					<div class="contact_form_scrollBar">
					</div>
				</div>
				<div class="contact_form" ng-controller="ContactContoller">					
					<form action="/" method="POST" name="contactForm" class="contactForm" novalidate>
						<div class="user_details">
							<div class="nameError_alert" ng-show="contactForm.$submitted || contactForm.name.$touched">
								<p ng-show="contactForm.name.$error.required">Could I have your name please?</p>
								<p ng-show="contactForm.name.$error.minlength">Name entered is too short, Cmon mate</p>
								<p ng-show="contactForm.name.$error.minlength">Name entered is way too long, Are you serious</p>
							</div>
							<div class="websiteError_alert" ng-show="contactForm.$submitted || contactForm.website.$touched">
								<p ng-show="contactForm.website.$error.required">Could I have your website address</p>
								<p ng-show="contactForm.website.$error.pattern">Can you provide a valid web address</p>
							</div>
							<div class="emailPhoneError_alert" ng-show="contactForm.$submitted || contactForm.contactMethod.$touched">
								<p ng-show="contactForm.contactMethod.$error.required">Could I have your Email or Phone Number</p>
								<p ng-show="contactForm.contactMethod.$error.email">Could I have your Email or Phone Number</p>
							</div>
							<input type="text" name="name" value="" class="nameField" placeholder="Name" ng-model="sender.name" ng-minlength="3" ng-maxlength="40" required=""/>
							<input type="text" name="website" value="" class="websiteField" placeholder="Website Link" ng-model="sender.website" required="" ng-pattern="/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/" />
							<input type="text" name="contactMethod" value="" class="contactMethodField" placeholder="Email or Mobile" ng-model="sender.emailPhone" required="" />
						</div>
						<div class="user_message">
							<div class="messageError_alert" ng-show="contactForm.$submitted || contactForm.message.$touched">
								<p ng-show="contactForm.message.$error.required">Could you write a message for me</p>
							</div>
							<textarea name="message" class="messageField" placeholder="Message" ng-model="sender.message" required=""></textarea>
						</div>
						<div class="contact_form_user_type">
							<div class="contact_form_users">
								<ul class="contact_form_userList">
									<li ng-repeat="type in role.type" ng-click="userType($event, type.user)">{{type.user}}</li>
								</ul>
							</div>
							<button type="button" name="send" class="sendField" ng-click="update(sender)" >Send</button>
							<input type="checkbox" name="userTypeChk" value="" ng-model="sender.userTypeChk" class="userTypeField" />
  
						</div>
					</form>

				</div>
			</div>
		</div>
		<div id="footer_extended">
			<div class="footer_extra">
				<div class="footer_spacing">
				</div>
			</div>
			<div class="footer_copyright">
				Copyright © 2015 29SIX, A Melbourne Web Company.
			</div>
		</div>
	</footer>
								
			
			<?php //echo $this->element('sql_dump'); ?>
</body>
</html>



