'use strict';
angular.module(GLOBAL.nameApp)
	.controller('FederacoesController', ['$scope', 'federacoesService', '$location',
		function($scope, federacoesService, $location) {

		$scope.showFilter = false;
		$scope.showForm = false;
		$scope.showErrorMessage = false;
		$scope.errorMessage = "";
		$scope.errorStatus = "";

		$scope.listaFederacoes = [];

		
		$scope.init = function (){

			$scope.showFilter = false;
			$scope.showForm = false;

			$scope.filter();

		};

		$scope.filter = function(){

			federacoesService.listaFederacoes().$promise
				.then(function (response) {
		          	$scope.listaFederacoes = response;
		        }).catch(function(response) {
		          	handleError(response);
		        });

		};

		var handleError = function(response) {

			if (response.status === 401) {
				//console.error('You need to login first!');
				$scope.errorMessage = "You need to login first!";
				$scope.errorStatus = response.status;
				$scope.showErrorMessage = true;
				$location.url('/login');

			} else {
				//console.error('Something went wrong...', response);
				$scope.errorMessage = "Something went wrong...";
				$scope.errorStatus = response.status;
				$scope.showErrorMessage = true;
			}
	};

		$scope.clickFilterTransition = function() {
			$scope.showFilter = !$scope.showFilter;
		};

		$scope.addItem = function() {
			$scope.showForm = true;
		};

		$scope.cancelAddItem = function() {
			$scope.showForm = false;
		};

		$scope.init();

}]);

