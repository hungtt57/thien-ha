'use strict';

describe('Directive: thDownloadsTablet', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-downloads-tablet/th-downloads-tablet.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-downloads-tablet></th-downloads-tablet>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thDownloadsTablet directive');
  }));
});