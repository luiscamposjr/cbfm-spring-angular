/*global app */
'use strict';
app.factory("federacoesService", function ($http) {

  var _getFederacoes = function () {
    // return $http.get("http://localhost:8080/cbfm-spring-mvc/rest/federacoes");
    return null;
  };

  return {
    getFederacoes: _getFederacoes
  };
});