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
    nameApp: 'cbfmHtmlApp'
  };

})(window);

angular
  .module(GLOBAL.nameApp, [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ]);

angular.module(GLOBAL.nameApp).config(['$routeProvider', '$locationProvider', '$httpProvider', 
    function ($routeProvider, $locationProvider, $httpProvider) {

    // $httpProvider.defaults.withCredentials = true;
    // // Tough luck: the default cookie-to-header mechanism is not working for cross-origin requests!
    // $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN'; // The name of the cookie sent by the server
    // $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'; // The default header name picked up by Spring Security

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/federacoes', {
        templateUrl: 'views/administracao/federacoes.html',
        controller: 'FederacoesController',
        controllerAs: 'Federacoes'
      })
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginController',
        controllerAs: 'Login'
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


