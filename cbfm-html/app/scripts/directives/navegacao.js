'use strict';

/**
 * @ngdoc directive
 * @name cbfmHtmlApp.directive:navegacao
 * @description
 * # navegacao
 */
angular.module(GLOBAL.nameApp).directive('navegacao', function(){

	return {
		restrict: 'E',
		replace: false,
		controller:function($scope){
			$scope.menu = [
				{'label' : 'Home', 'active' : 'true', 'url' : '/'},
				{'label' : 'Federações', 'active' : 'false', 'url' : '/federacoes'},
				{'label' : 'Clubes', 'active' : 'false', 'url' : '/'},
				{'label' : 'Atletas', 'active' : 'false', 'url' : '/'},
				{'label' : 'Usuários', 'active' : 'false', 'url' : '/usuarios'}
			];
		},
		templateUrl: '/partials/navbar.html'
	};

});
