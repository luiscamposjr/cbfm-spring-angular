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
				    authService.currentUser().then(
				    	function successCallback(response) {
				    		sessionStorage.currentUser = JSON.stringify(response.data);
				    		$rootScope.currentUser = response.data;			    		
				    		$location.url('/');
				    		$rootScope.isAuthenticated = true;
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
				
				sessionStorage.removeItem("currentUser");
				$scope.credentials = {username: '', password: ''};
				$cookies.remove("JSESSIONID");
				$rootScope.isAuthenticated = false;
				$rootScope.currentUser = undefined;
				$location.url('/login');

			}, function() {
				toaster.pop('error', 'Atenção', 'Ocorreu uma falha no logout.', 3000);
			});
		};


}]);
