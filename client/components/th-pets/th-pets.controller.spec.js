'use strict';

describe('Controller: ThPetsCtrl', function () {

  // load the controller's module
  beforeEach(module('thienHaApp'));

  var ThPetsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThPetsCtrl = $controller('ThPetsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
