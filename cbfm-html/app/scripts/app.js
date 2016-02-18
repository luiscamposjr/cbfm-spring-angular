'use strict';

/**
 * @ngdoc overview
 * @name cbfmHtmlApp
 * @description
 * # cbfmHtmlApp
 *
 * Main module of the application.
 */
var app = angular
  .module('cbfmHtmlApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ]);

  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/federacoes', {
        templateUrl: 'views/administracao/federacoes.html',
        controller: 'FederacoesController',
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(false);
  });
