'use strict';

describe('Controller: AdministracaoClubesCtrl', function () {

  // load the controller's module
  beforeEach(module('cbfmHtmlApp'));

  var AdministracaoClubesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdministracaoClubesCtrl = $controller('AdministracaoClubesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdministracaoClubesCtrl.awesomeThings.length).toBe(3);
  });
});
