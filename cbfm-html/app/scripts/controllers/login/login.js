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

			loginService.login($scope.credentials.username, $scope.credentials.password, function () {
				console.info('The user has been successfully logged in! ');
				$location.url('/');
			}, function() {
				console.error('Something went wrong while trying to login... ');
			});

		};

		$scope.logout = function() {

			loginService.logout(function () {
				
				$scope.credentials = {username: '', password: ''};
				$cookies.remove("JSESSIONID");

				console.info('The user has been logged out! ');

				$location.url('/login');

			}, function() {
				console.error('Something went wrong while trying to logout... ');
			});
		};


}]);
