'use strict';

describe('Service: security/Cookies', function () {

  // load the service's module
  beforeEach(module('cbfmHtmlApp'));

  // instantiate service
  var security/Cookies;
  beforeEach(inject(function (_security/Cookies_) {
    security/Cookies = _security/Cookies_;
  }));

  it('should do something', function () {
    expect(!!security/Cookies).toBe(true);
  });

});
