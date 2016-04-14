'use strict';
angular.module(GLOBAL.nameApp)
	.controller('ClubesController', ['$scope', 'clubesService', 'federacoesService', '$location', 'Csrf', '$http', 'CONST_UTIL', 'toaster', '$animate', 
		function($scope, clubesService, federacoesService, $location, Csrf, $http, CONST_UTIL, toaster) {

		$scope.showFilter = false;
		$scope.showForm = false;
		$scope.rowIsSelected = false;

		$scope.selectedRow = {};
		$scope.itemsList = [];
		$scope.filterDTO = {};

		$scope.clubes = [];
		$scope.federacoes = [];

		
		
		$scope.init = function (){

			$scope.showFilter = false;
			$scope.showForm = false;
			$scope.filter();
			$scope.listFederacoes();

		};

		$scope.clearAll = function(){
			$scope.itemsList.length = 0;
			$scope.selectedRow = {};
		};

		$scope.listFederacoes = function() {


			federacoesService.federacoesResource().query({sigla: $scope.filterDTO.sigla, nome: $scope.filterDTO.nome, uf: $scope.filterDTO.uf}).$promise
					.then(function (response) {
			          	$scope.federacoes = response;
			          	//console.log('GET /rest/secure returned: ', response);
			        }).catch(function(response) {
			          	handleError(response);
			        });

		};

		$scope.filter = function(){

			$scope.clearAll();

			clubesService.clubesResource().query({federacaoId: 0, nome: $scope.filterDTO.nome, responsavel: $scope.filterDTO.responsavel, email: $scope.filterDTO.email, cnpj: $scope.filterDTO.cnpj}).$promise
					.then(function (response) {
			          	$scope.itemsList = response;
			        }).catch(function(response) {
			          	handleError(response);
			        });

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

				Csrf.addResourcesCsrfToHeaders(clubesService.clubesResource().options, $http.defaults.headers.put).then(function (headers) 
				{

						clubesService.clubesResource(headers).update(
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

				Csrf.addResourcesCsrfToHeaders(clubesService.clubesResource().options, $http.defaults.headers.post).then(function (headers) 
				{
						clubesService.clubesResource(headers).post(
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

			Csrf.addResourcesCsrfToHeaders(clubesService.clubesResource().options, $http.defaults.headers.delete).then(function (headers) 
			{
					clubesService.clubesResource(headers).deleteItem(
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

		$scope.setClickedRow = function(item){

			if($scope.selectedRow === item){
				$scope.selectedRow = {};
				$scope.rowIsSelected = false;
			}
			else {
				$scope.selectedRow = item;
				$scope.rowIsSelected = true;
			}
		};

		$scope.itemDoubleClick = function(item) {
			$scope.selectedRow = item;
			$scope.editarItem();
		};

		$scope.init();

}]);