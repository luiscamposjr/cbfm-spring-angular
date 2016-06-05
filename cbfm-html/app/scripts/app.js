'use strict';

/**
 * @ngdoc overview
 * @name cbfmHtmlApp
 * @description
 * # cbfmHtmlApp
 *
 * Main module of the application.
 */

(function(w) {
  w.GLOBAL = {
    nameApp: 'cbfmHtmlApp',
    version: "0.0.1",
    nameSystem: "CBFM Manager"
  };

})(window);

angular
  .module(GLOBAL.nameApp, [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'toaster'
  ]);

angular.module(GLOBAL.nameApp)
  .config(['$routeProvider', '$locationProvider', '$httpProvider', 
    function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/administracao/federacoes', {
        templateUrl: 'views/administracao/federacoes.html',
        controller: 'FederacoesController',
        controllerAs: 'Federacoes'
      })
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'AuthController',
        controllerAs: 'Auth'
      })
      .when('/administracao/clubes', {
        templateUrl: 'views/administracao/clubes.html',
        controller: 'ClubesController',
        controllerAs: 'Clubes'
      })
      .when('/administracao/atletas', {
        templateUrl: 'views/administracao/atletas.html',
        controller: 'AtletasController',
        controllerAs: 'Atletas'
      })
      .when('/administracao/usuarios', {
        templateUrl: 'views/administracao/usuarios.html',
        controller: 'UsuariosController',
        controllerAs: 'Usuarios'
      })
      .otherwise({
        redirectTo: '/'
      });
    
    $httpProvider.defaults.withCredentials = true;
    // Tough luck: the default cookie-to-header mechanism is not working for cross-origin requests!
    $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN'; // The name of the cookie sent by the server
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'; // The default header name picked up by Spring Security
    $httpProvider.defaults.headers.delete = {'Content-Type' : 'application/json'};

    $locationProvider.html5Mode(false);
  }]);


