'use strict';
angular.module(GLOBAL.nameApp).factory("federacoesService", function ($http, $resource) {

  var federacoesResources = function (headers) {
    if (headers !== undefined) {
      return $resource('http://localhost:8080/federacoes', {}, {
        post: {method: 'POST', headers: headers, isArray: false}
      });
    } else {
      return $resource('http://localhost:8080/federacoes', {}, {
        get: {method: 'GET', cache: false, isArray: true}
        //,options: {method: 'OPTIONS', cache: false}
      });
    }
  };

  var _listaFederacoes = function () {
  
      return federacoesResources().get();
  };

  


  return {
    listaFederacoes: _listaFederacoes
  };
});