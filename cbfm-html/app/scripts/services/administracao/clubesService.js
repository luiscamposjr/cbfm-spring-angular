'use strict';
angular.module(GLOBAL.nameApp).factory("clubesService", function ($http, $resource) {

  var clubesResources = function (headers) {

    var data = $resource('http://localhost:8080/rest/clubes', {clube: '@clube'}, {
        post : {method: 'POST', headers: headers},
        deleteItem : {method: 'DELETE', headers: headers, url: 'http://localhost:8080/rest/clubes/clube/:id', params:{id:'@id'}},
        update : {method: 'PUT', headers: headers},
        options: {method: 'OPTIONS', cache: false}
      });
      return data;


  };
  

  var _clubesResource = function () {
      return clubesResources();
  };


  return {
    clubesResource: _clubesResource
  };
});