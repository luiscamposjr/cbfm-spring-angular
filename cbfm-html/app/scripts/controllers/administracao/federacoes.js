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

		federacoesService.getFederacoes().success(function (data) {
					$scope.listaFederacoes = data;
					$scope.showErrorMessage = false;
				}).error(function (data, status) {
					$scope.errorMessage = "Aconteceu um problema";
					$scope.errorStatus = status;
					$scope.showErrorMessage = true;

				});

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

