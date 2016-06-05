'use strict';

angular.module(GLOBAL.nameApp)
	.controller('AuthController', ['$scope', '$cookies', '$rootScope', 'authService', '$http', '$location', 'toaster', '$animate', 
		function($scope, $cookies, $rootScope, authService, $http, $location, toaster) {


		$scope.credentials = {
			username: '',
			password: ''
		};
    

		$scope.login = function (){

			authService.login($scope.credentials.username, $scope.credentials.password, 
				function () {
					$location.url('/');
					// console.log("login:");
					// console.info('The user has been successfully logged in! ', data, status, headers, config);
					$rootScope.isAuthenticated = true;
					console.log("logou no auth controller");

				    authService.currentUser().then(
				    	function successCallback(response) {
				    		sessionStorage.currentUser = JSON.stringify(response.data);
				    		$rootScope.currentUser = response.data;
					  }, function errorCallback() {
						  	$rootScope.isAuthenticated = false;
						  	$location.url('/login');
					  });



				}, function() {
					toaster.pop('error', 'Atenção', 'Ocorreu uma falha no login.', 3000);
				}
			);
		};

		$scope.logout = function() {

			authService.logout(function () {
				
				$scope.credentials = {username: '', password: ''};
				$cookies.remove("JSESSIONID");
				$rootScope.isAuthenticated = false;
				$rootScope.currentUser = undefined;
				sessionStorage.currentUser = null;
				$location.url('/login');

			}, function() {
				toaster.pop('error', 'Atenção', 'Ocorreu uma falha no logout.', 3000);
			});
		};


}]);
