'use strict';
angular.module(GLOBAL.nameApp).factory("atletasService", function ($http, $resource) {

  var atletasResources = function (headers) {

    var data = $resource('http://localhost:8080/rest/atletas', {atleta: '@atleta'}, {
        post : {method: 'POST', headers: headers},
        deleteItem : {method: 'DELETE', headers: headers, url: 'http://localhost:8080/rest/atletas/atleta/:id', params:{id:'@id'}},
        update : {method: 'PUT', headers: headers},
        options: {method: 'OPTIONS', cache: false}
      });
      return data;


  };
  

  var _atletasResource = function () {
      return atletasResources();
  };


  return {
    atletasResource: _atletasResource
  };
});