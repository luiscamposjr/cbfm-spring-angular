'use strict';

describe('Controller: FederacoesFederacoesCtrl', function () {

  // load the controller's module
  beforeEach(module('cbfmHtmlApp'));

  var FederacoesFederacoesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FederacoesFederacoesCtrl = $controller('FederacoesFederacoesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FederacoesFederacoesCtrl.awesomeThings.length).toBe(3);
  });
});
