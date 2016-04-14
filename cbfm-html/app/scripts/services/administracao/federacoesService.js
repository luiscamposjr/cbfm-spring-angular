'use strict';
angular.module(GLOBAL.nameApp).factory("federacoesService", function ($http, $resource) {

  var federacoesResources = function (headers) {

    var data = $resource('http://localhost:8080/rest/federacoes', {federacao: '@federacao'}, {
        post : {method: 'POST', headers: headers},
        deleteItem : {method: 'DELETE', headers: headers, url: 'http://localhost:8080/rest/federacoes/federacao/:id', params:{id:'@id'}},
        update : {method: 'PUT', headers: headers},
        options: {method: 'OPTIONS', cache: false}
      });
      return data;


  };
  

  var _federacoesResource = function () {
      return federacoesResources();
  };


  return {
    federacoesResource: _federacoesResource
  };
});