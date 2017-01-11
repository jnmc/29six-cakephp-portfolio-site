	
// ANGULAR SCRIPT	

			
var App = angular.module('Application', ['ui.calendar']);

App.controller('MenuContoller', function($scope) {
	//console.log($scope);
});
App.controller('ContactContoller', function($scope, $http, $window) {
	//console.log('uues');
	

	$scope.formData = {};
	$scope.role = {};
	$scope.role.type = [
		{user:'Developer,'},
		{user:'Client,'},
		{user:'Business,'},
		{user:'Recruiter,'},
		{user:'Recommender'}
	];
	
	$scope.userType = function($event, user) {
		$scope.sender = {userTypeChk: true};
		if($scope.sender['userTypeChk']) {
			$scope.update = function() {
				
				
			var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
						 '<div>Email: ' + $scope.user.email + '</div>' +
						 '<div>Message: ' + $scope.user.body + '</div>' +
						 '<div>Date: ' + (new Date()).toString() + '</div>';

			$http({
			  url: 'https://api.postmarkapp.com/email',
			  method: 'POST',
			  data: {
				'From': 'foo@foo.com',
				'To': 'bar@bar.com',
				'HtmlBody': htmlBody,
				'Subject': 'New Contact Form Submission'
			  },
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-Postmark-Server-Token': '8569dcd45-6a1a-4e7b-ae75-ea37629de4'
			  }
			}).
			success(function (data) {
				$scope.success = true;
				$scope.user = {};
			}).
			error(function (data) {
				$scope.error = true;
			});
			}
		}
	}


	//$scope.processForm = function() {
	//alert('valid form!\n' + JSON.stringify($scope.formData, null, '\t'))
	
	// $http({
	  // method  : 'POST',
	  // url     : 'process.php',
	  // data    : $scope.formData,
	  // headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	// });
	
	//};
	
	
	//ng-pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$|^\D*0(\D*\d){9}\D*$|^04[0-9]{8}"
}); 




//	App.controller('CalendarContoller', function($scope) {
		//  config object 
		// $scope.uiConfig = {
		  // calendar:{
			// height: 400,
			
			// editable: true,
			// header:{
			  // left: 'month basicWeek basicDay agendaWeek agendaDay',
			  // center: 'title',
			  // right: 'today prev,next'
			// },
			// dayClick: $scope.alertEventOnClick,
			// eventDrop: $scope.alertOnDrop,
			// eventResize: $scope.alertOnResize
		  // }
		// };
//	});
	

	
/* 	App.controller('ShopSign', function($scope, $http) {
		$http.get('shopsign.json').then(function(res){
			console.log(res);
			$scope.todos = res.data;                
		});
	}); */

	
	