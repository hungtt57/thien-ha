'use strict';

describe('Controller: ThSliderCtrl', function () {

  // load the controller's module
  beforeEach(module('thienHaApp'));

  var ThSliderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThSliderCtrl = $controller('ThSliderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
