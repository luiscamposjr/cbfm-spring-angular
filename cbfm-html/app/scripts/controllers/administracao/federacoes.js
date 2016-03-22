'use strict';
angular.module(GLOBAL.nameApp)
	.controller('FederacoesController', ['$scope', 'federacoesService', '$location', 'Csrf', '$http', 'CONST_UTIL',
		function($scope, federacoesService, $location, Csrf, $http, CONST_UTIL) {

		$scope.showFilter = false;
		$scope.showForm = false;
		$scope.showErrorMessage = false;
		$scope.errorMessage = "";
		$scope.errorStatus = "";

		$scope.listaFederacoes = [];
		$scope.federacao = {};

		$scope.estadosBrasileiros = CONST_UTIL.estadosBrasileiros;

		
		
		$scope.init = function (){

			$scope.showFilter = false;
			$scope.showForm = false;
			$scope.filter();

		};

		$scope.filter = function(){

			federacoesService.federacoesResource().query().$promise
					.then(function (response) {
			          	$scope.listaFederacoes = response;
			          	console.log('GET /rest/secure returned: ', response);
			        }).catch(function(response) {
			          	handleError(response);
			        });

		};

		var handleError = function(response) {

			if (response.status === 401) {
				$scope.errorMessage = "You need to login first!";
				$scope.errorStatus = response.status;
				$scope.showErrorMessage = true;
				$location.url('/login');

			} else {
				$scope.errorMessage = "Something went wrong...";
				$scope.errorStatus = response.status;
				$scope.showErrorMessageFunction();
			}
		};

		$scope.clickFilterTransition = function() {
			$scope.showFilter = !$scope.showFilter;
		};

		$scope.clickFilterPesquisa = function() {
			$scope.filter({sigla:$scope.federacao.sigla});
		};

		$scope.addItem = function() {
			$scope.showForm = true;
			if($scope.showErrorMessage) {
				$scope.showErrorMessageFunction();
			}			
		};

		$scope.cancelAddItem = function() {
			$scope.showForm = false;
			$scope.showErrorMessageFunction();
		};

		$scope.saveItem = function() {

			if($scope.federacao.id !== undefined && $scope.federacao.id > 0) {

				Csrf.addResourcesCsrfToHeaders(federacoesService.federacoesResource().options, $http.defaults.headers.put).then(function (headers) 
				{

						federacoesService.federacoesResource(headers).update(
							{id: $scope.federacao.id, sigla: $scope.federacao.sigla, nome: $scope.federacao.nome, uf: $scope.federacao.uf})
						.$promise.then(function (response) {
							$scope.showForm = false;
							$scope.filter();
						}).catch(function(response) {
							handleError(response);
						});
				});


			} else {

				Csrf.addResourcesCsrfToHeaders(federacoesService.federacoesResource().options, $http.defaults.headers.post).then(function (headers) 
				{
						federacoesService.federacoesResource(headers).post(
							{id: $scope.federacao.id, sigla: $scope.federacao.sigla, nome: $scope.federacao.nome, uf: $scope.federacao.uf})
						.$promise.then(function (response) {
							$scope.showForm = false;
							$scope.filter();
						}).catch(function(response) {
							handleError(response);
						});
				});
			}
		};

		$scope.editarItem = function() {

			$scope.federacao = $scope.listaFederacoes[$scope.selectedRow];
			console.log($scope.federacao);
			$scope.showForm = true;

		};


		$scope.deletarItem = function() {

			$scope.federacao = $scope.listaFederacoes[$scope.selectedRow];

			Csrf.addResourcesCsrfToHeaders(federacoesService.federacoesResource().options, $http.defaults.headers.delete).then(function (headers) 
			{

					federacoesService.federacoesResource(headers).deleteItem(
						{id: $scope.federacao.id})
					.$promise.then(function (response) {
						$scope.showForm = false;
						$scope.filter();
					}).catch(function(response) {
						handleError(response);
					});

				
			});

		};

		$scope.showErrorMessageFunction = function() {
			$scope.showErrorMessage = !$scope.showErrorMessage;
		};

		$scope.selectedRow = null;
		$scope.rowIsSelected = false;

		$scope.setClickedRow = function(index){
			$scope.selectedRow = index;
			if(index >= 0){
				$scope.rowIsSelected = true;
			}
			else {
				$scope.rowIsSelected = false;
			}
		};

		$scope.init();

}]);