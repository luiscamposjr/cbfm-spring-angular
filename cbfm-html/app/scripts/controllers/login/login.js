'use strict';

angular.module(GLOBAL.nameApp)
	.controller('LoginController', ['$scope', '$cookies', 'loginService', '$http', '$location', 'toaster', '$animate',
		function($scope, $cookies, loginService, $http, $location, toaster) {


		$scope.credentials = {
			username: '',
			password: ''
		};
    

		$scope.login = function (){

			loginService.login($scope.credentials.username, $scope.credentials.password, function () {
				$location.url('/');
			}, function() {
				toaster.pop('error', 'Atenção', 'Ocorreu uma falha no login.', 3000);
			});

		};

		$scope.logout = function() {

			loginService.logout(function () {
				
				$scope.credentials = {username: '', password: ''};
				$cookies.remove("JSESSIONID");

				$location.url('/login');

			}, function() {
				toaster.pop('error', 'Atenção', 'Ocorreu uma falha no logout.', 3000);
			});
		};


}]);
