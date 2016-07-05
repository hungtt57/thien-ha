'use strict';

describe('Directive: thCharacters', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-characters/th-characters.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-characters></th-characters>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thCharacters directive');
  }));
});