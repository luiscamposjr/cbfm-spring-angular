/*global app */
'use strict';
app.controller('FederacoesController', ['$scope', '$http', 'federacoesService',
	function($scope, $http, federacoesService) {

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

	$scope.filter = function($filter){

		federacoesService.getFederacoes().
			then(function successCallback(response) {
					$scope.listaFederacoes = response.data;
					$scope.showErrorMessage = false;
	  		}, function errorCallback(response) {
					$scope.errorMessage = "Aconteceu um problema";
					$scope.errorStatus = response.status;
					$scope.showErrorMessage = true;
	  		});
	}

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

