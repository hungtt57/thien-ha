'use strict';

describe('Controller: ThNavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('thienHaApp'));

  var ThNavbarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThNavbarCtrl = $controller('ThNavbarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
