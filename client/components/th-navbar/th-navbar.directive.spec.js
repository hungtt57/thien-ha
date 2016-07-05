'use strict';

describe('Directive: thNavbar', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-navbar/th-navbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-navbar></th-navbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thNavbar directive');
  }));
});