'use strict';

describe('Directive: thDownloadsDesktop', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-downloads-desktop/th-downloads-desktop.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-downloads-desktop></th-downloads-desktop>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thDownloadsDesktop directive');
  }));
});