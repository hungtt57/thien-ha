'use strict';

describe('Controller: ThCharactersCtrl', function () {

  // load the controller's module
  beforeEach(module('thienHaApp'));

  var ThCharactersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThCharactersCtrl = $controller('ThCharactersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
