'use strict';
angular.module(GLOBAL.nameApp).factory("usuariosService", function ($http, $resource) {

  var usuariosResources = function (headers) {

    var data = $resource('http://localhost:8080/rest/usuarios', {usuario: '@usuario'}, {
        post : {method: 'POST', headers: headers},
        deleteItem : {method: 'DELETE', headers: headers, url: 'http://localhost:8080/rest/usuarios/usuario/:id', params:{id:'@id'}},
        update : {method: 'PUT', headers: headers},
        options: {method: 'OPTIONS', cache: false}
      });
      return data;

  };
  

  var _usuariosResource = function () {
      return usuariosResources();
  };


  return {
    usuariosResource: _usuariosResource
  };
});