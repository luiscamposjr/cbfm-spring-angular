/*global app */
'use strict';
app.factory("federacoesService", function ($http) {

  var _getFederacoes = function () {
    return $http.get("http://localhost:8080/federacoes");
  };

  return {
    getFederacoes: _getFederacoes
  };
});