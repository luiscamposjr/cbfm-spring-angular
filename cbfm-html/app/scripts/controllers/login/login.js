'use strict';

angular.module(GLOBAL.nameApp)
	.controller('LoginController', ['$scope', '$cookies', 'loginService', '$http', '$location', 
		function($scope, $cookies, loginService, $http, $location) {


		$scope.credentials = {
			username: '',
			password: ''
		};
    

		$scope.login = function (){

			console.log("chegou aqui");

			loginService.login($scope.credentials.username, $scope.credentials.password, function (data, status, headers, config) {
				// Success handler
				console.info('The user has been successfully logged in! ', data, status, headers, config);

			}, function(data, status, headers, config) {
				// Failure handler
				console.error('Something went wrong while trying to login... ', data, status, headers, config);
			});

		};

		$scope.logout = function() {

			loginService.logout(function (data, status, headers, config) {
				// Success handler
				$scope.credentials = {username: '', password: ''};
				//delete $cookies['JSESSIONID'];
				$cookies.remove("JSESSIONID");

				console.info('The user has been logged out! ', data, status, headers, config);

				$location.url('/login');

			}, function(data, status, headers, config) {
				// Failure handler
				console.error('Something went wrong while trying to logout... ', data, status, headers, config);
			});
		};


}]);
