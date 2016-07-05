'use strict';

describe('Controller: ThNewsCtrl', function () {

  // load the controller's module
  beforeEach(module('thienHaApp'));

  var ThNewsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThNewsCtrl = $controller('ThNewsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
