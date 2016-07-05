'use strict';

describe('Directive: thDownloads', function () {

  // load the directive's module and view
  beforeEach(module('thienHaApp'));
  beforeEach(module('components/th-downloads/th-downloads.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<th-downloads></th-downloads>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the thDownloads directive');
  }));
});