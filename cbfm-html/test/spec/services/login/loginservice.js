'use strict';

describe('Service: login/loginService', function () {

  // load the service's module
  beforeEach(module('cbfmHtmlApp'));

  // instantiate service
  var login/loginService;
  beforeEach(inject(function (_login/loginService_) {
    login/loginService = _login/loginService_;
  }));

  it('should do something', function () {
    expect(!!login/loginService).toBe(true);
  });

});
