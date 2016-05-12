'use strict';
angular.module(GLOBAL.nameApp)
	.controller('UsuariosController', ['$scope', 'usuariosService', '$location', 'Csrf', '$http', 'CONST_UTIL', 'toaster', '$animate', 
		function($scope, usuariosService, $location, Csrf, $http, CONST_UTIL, toaster) {

		$scope.showFilter = false;
		$scope.showForm = false;
		$scope.rowIsSelected = false;

		$scope.selectedRow = {};
		$scope.itemsList = [];
		$scope.filterDTO = {};

		$scope.clubes = [];
		$scope.federacoes = [];
		$scope.atletas = [];

		$scope.dataDefault = "19/06/1985";

		
		
		$scope.init = function () {

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

			usuariosService.usuariosResource().query().$promise
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
			// $scope.clickFilterTransition();
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

			console.log($scope.selectedRow.federacao);

			if($scope.selectedRow.id !== undefined && $scope.selectedRow.id > 0) {

				Csrf.addResourcesCsrfToHeaders(usuariosService.usuariosResource().options, $http.defaults.headers.put).then(function (headers) 
				{

						usuariosService.usuariosResource(headers).update(
							{id: $scope.selectedRow.id, nome: $scope.selectedRow.nome, cnpj: $scope.selectedRow.cnpj, email: $scope.selectedRow.email, responsavel: $scope.selectedRow.responsavel, ativo: $scope.selectedRow.ativo, federacao: { id: $scope.selectedRow.federacao } })
						.$promise.then(function () {
							toaster.pop('info', 'Atenção', 'Item atualizado com sucesso.', 3000);
							$scope.showForm = false;
							$scope.filter();
						}).catch(function(response) {
							handleError(response);
						});
				});


			} else {

				Csrf.addResourcesCsrfToHeaders(usuariosService.usuariosResource().options, $http.defaults.headers.post).then(function (headers) 
				{

						usuariosService.usuariosResource(headers).post(
							{id: $scope.selectedRow.id, nome: $scope.selectedRow.nome, cnpj: $scope.selectedRow.cnpj, email: $scope.selectedRow.email, responsavel: $scope.selectedRow.responsavel, ativo: $scope.selectedRow.ativo, federacao: { id: $scope.selectedRow.federacao } })
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

			Csrf.addResourcesCsrfToHeaders(usuariosService.usuariosResource().options, $http.defaults.headers.delete).then(function (headers) 
			{
					usuariosService.usuariosResource(headers).deleteItem(
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