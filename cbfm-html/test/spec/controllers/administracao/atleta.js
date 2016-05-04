'use strict';

describe('Controller: AdministracaoAtletaCtrl', function () {

  // load the controller's module
  beforeEach(module('cbfmHtmlApp'));

  var AdministracaoAtletaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdministracaoAtletaCtrl = $controller('AdministracaoAtletaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdministracaoAtletaCtrl.awesomeThings.length).toBe(3);
  });
});
