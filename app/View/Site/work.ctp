	<!--<div class="alt_header_pages"></div>-->
	<div class="content_work">								
		<div class="work_sample" ng-app="GalleryApp">

			<div class="gallery-holder" ng-controller="GalleryController">
				<div class="previous-btn">
					<button type="button" name="gallary-previous" ><?php echo $this->Html->image('previous-btn.png', array('alt' => 'previous button', 'border' => '0', 'class' => 'gallery-style'));?></a>
				</div>
				<div class="next-btn">
					<button type="button" name="gallary-next" ><?php echo $this->Html->image('next-btn.png', array('alt' => 'next button', 'border' => '0', 'class' => 'gallery-style'));?></a>
				</div>
				
				<div class="mixed-gallery">
					<div class="work-primary">
						<div class="work-title">
							<h2>{{worktitle}}</h2>
						</div>
						<?php echo $this->Html->image('work-primary-img-example.jpg', array('alt' => 'Client work', 'border' => '0', 'class' => 'clientwork'));?>
						<p>{{gallerytext}}</p>
						<?php echo $this->Html->image('work-primary-img-example.jpg', array('alt' => 'Client work', 'border' => '0', 'class' => 'clientwork'));?>
					</div>
					<div class="work-secondary">
						<?php echo $this->Html->image('work-secondary-img-example.jpg', array('alt' => 'Client work', 'border' => '0', 'class' => 'clientwork'));?>
						<?php echo $this->Html->image('work-secondary-img-example.jpg', array('alt' => 'Client work', 'border' => '0', 'class' => 'clientwork'));?>
					</div>					
				</div>

			</div>

		</div>
	</div>





<script>
var App = angular.module('GalleryApp', ['galleryProfilesView']);
App.controller('GalleryController', function($scope, $http, galleryProfiles) {
	$scope.worktitle = "test";
	$scope.gallerytext = "dedwdwew";

	    $params = $.param({
	      "gallery": "1"
	    });

      galleryProfiles.galleryPosts($scope)
        .then(function(data) {
          console.log(data);
        },
        function(error) {
          // error
        });


});


</script>