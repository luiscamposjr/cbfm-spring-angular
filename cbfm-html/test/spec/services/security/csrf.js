'use strict';

describe('Service: security/Csrf', function () {

  // load the service's module
  beforeEach(module('cbfmHtmlApp'));

  // instantiate service
  var security/Csrf;
  beforeEach(inject(function (_security/Csrf_) {
    security/Csrf = _security/Csrf_;
  }));

  it('should do something', function () {
    expect(!!security/Csrf).toBe(true);
  });

});
