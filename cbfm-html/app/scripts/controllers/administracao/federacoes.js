'use strict';
angular.module(GLOBAL.nameApp)
	.controller('FederacoesController', ['$scope', 'federacoesService', '$location', 'Csrf', '$http', 'CONST_UTIL', 'toaster', '$animate',
		function($scope, federacoesService, $location, Csrf, $http, CONST_UTIL, toaster) {

		$scope.showFilter = false;
		$scope.showForm = false;
		$scope.rowIsSelected = false;

		$scope.selectedRow = {};
		$scope.itemsList = [];
		$scope.filterDTO = {};

		$scope.estadosBrasileiros = CONST_UTIL.estadosBrasileiros;

		
		
		$scope.init = function (){

			$scope.showFilter = false;
			$scope.showForm = false;
			$scope.filter();

		};

		$scope.clearAll = function(){
			$scope.itemsList.length = 0;
			$scope.selectedRow = {};
		};

		$scope.filter = function(){

			$scope.clearAll();

			federacoesService.federacoesResource().query({sigla: $scope.filterDTO.sigla, nome: $scope.filterDTO.nome, uf: $scope.filterDTO.uf}).$promise
					.then(function (response) {
			          	$scope.itemsList = response;
			        }).catch(function(response) {
			          	handleError(response);
			        });
			// $scope.rowIsSelected = false;

		};

		var handleError = function(response) {

			if (response.status === 401) {
				$location.url('/login');
				toaster.pop('error', 'Atenção', 'Seu usuário não está logado.', 3000);

			} 
			else if (response.status === -1) {
				$location.url('/login');
				toaster.pop('error', 'Atenção', 'Servidor está fora de serviço.', 3000);
			} else {
				toaster.pop('error', 'Atenção', 'Aconteceu algum problema.', 3000);
			}
		};

		$scope.clickFilterTransition = function() {
			$scope.showFilter = !$scope.showFilter;
		};

		$scope.clickFilterCancelar = function() {
			$scope.filterDTO = {};
			$scope.clickFilterTransition();
		};

		$scope.clickFilterLimpar = function() {
			$scope.filterDTO = {};
		};

		$scope.clickFilterPesquisa = function() {
			$scope.clickFilterTransition();
			$scope.filter();
		};

		$scope.addItem = function() {
			$scope.selectedRow = {};
			$scope.showForm = true;		
		};

		$scope.cancelAddItem = function() {
			$scope.showForm = false;
		};

		$scope.saveItem = function() {

			if($scope.selectedRow.id !== undefined && $scope.selectedRow.id > 0) {

				Csrf.addResourcesCsrfToHeaders(federacoesService.federacoesResource().options, $http.defaults.headers.put).then(function (headers) 
				{

						federacoesService.federacoesResource(headers).update(
							{id: $scope.selectedRow.id, sigla: $scope.selectedRow.sigla, nome: $scope.selectedRow.nome, uf: $scope.selectedRow.uf})
						.$promise.then(function () {
							toaster.pop('info', 'Atenção', 'Item atualizado com sucesso.', 3000);
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
							{id: $scope.selectedRow.id, sigla: $scope.selectedRow.sigla, nome: $scope.selectedRow.nome, uf: $scope.selectedRow.uf})
						.$promise.then(function () {
							toaster.pop('info', 'Atenção', 'Item adicionado com sucesso.', 3000);
							$scope.showForm = false;
							$scope.filter();
						}).catch(function(response) {
							handleError(response);
						});
				});
			}
		};

		$scope.editarItem = function() {

			$scope.showForm = true;

		};


		$scope.deletarItem = function() {

			Csrf.addResourcesCsrfToHeaders(federacoesService.federacoesResource().options, $http.defaults.headers.delete).then(function (headers) 
			{
					federacoesService.federacoesResource(headers).deleteItem(
						{id: $scope.selectedRow.id})
					.$promise.then(function () {
						$scope.showForm = false;
						$scope.filter();
						toaster.pop('info', 'Atenção', 'Item excluído com sucesso.', 3000);
					}).catch(function(response) {
						handleError(response);
					});
			});
		};

		$scope.setClickedRow = function(federacao){

			if($scope.selectedRow === federacao){
				$scope.selectedRow = {};
				$scope.rowIsSelected = false;
			}
			else {
				$scope.selectedRow = federacao;
				$scope.rowIsSelected = true;
			}
		};

		$scope.itemDoubleClick = function(item) {
			$scope.selectedRow = item;
			$scope.editarItem();
		};

		$scope.init();

}]);