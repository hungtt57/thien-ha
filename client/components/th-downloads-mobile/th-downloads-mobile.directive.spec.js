'use strict';

describe('Directive: thDownloadsMobile', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-downloads-mobile/th-downloads-mobile.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-downloads-mobile></th-downloads-mobile>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thDownloadsMobile directive');
  }));
});