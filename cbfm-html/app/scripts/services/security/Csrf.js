'use strict';

/**
 * @ngdoc service
 * @name cbfmHtmlApp.security/Csrf
 * @description
 * # security/Csrf
 * Factory in the cbfmHtmlApp.
 */
angular.module(GLOBAL.nameApp).factory('Csrf', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
