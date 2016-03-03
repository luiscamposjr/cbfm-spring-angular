'use strict';

angular.module(GLOBAL.nameApp)
	.controller('LoginController', ['$scope', 'loginService',
		function($scope, loginService) {
    

		$scope.login = function (){

			loginService.login();

		};


}]);
