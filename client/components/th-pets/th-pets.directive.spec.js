'use strict';

describe('Directive: thPets', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-pets/th-pets.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-pets></th-pets>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thPets directive');
  }));
});