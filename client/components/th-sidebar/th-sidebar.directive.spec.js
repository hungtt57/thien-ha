'use strict';

describe('Directive: thSidebar', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-sidebar/th-sidebar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-sidebar></th-sidebar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thSidebar directive');
  }));
});