'use strict';

describe('Directive: thNews', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-news/th-news.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-news></th-news>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thNews directive');
  }));
});