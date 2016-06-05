'use strict';

angular.module(GLOBAL.nameApp)
	.controller('IndexController', ['$scope', 'authService', '$rootScope', '$location', 
	function($scope, authService, $rootScope, $location) {

		$rootScope.isAuthenticated = false;
		$rootScope.currentUser = null;

		var init = function() {

			isLoggedIn();

			$rootScope.currentUser = angular.isDefined(sessionStorage.currentUser) ? JSON.parse(sessionStorage.currentUser) : null;

			console.log($rootScope.currentUser.authorities);
		};


		var isLoggedIn = function(){	

	    authService.currentUser().then(
	    	function successCallback() {
				$rootScope.isAuthenticated = true;
		  }, function errorCallback() {
			  	$rootScope.isAuthenticated = false;
			  	sessionStorage.currentUser = null;
			  	$location.url('/login');
		  });
		};

		init();

}]);

