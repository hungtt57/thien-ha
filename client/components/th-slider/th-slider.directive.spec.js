'use strict';

describe('Directive: thSlider', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-slider/th-slider.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-slider></th-slider>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thSlider directive');
  }));
});