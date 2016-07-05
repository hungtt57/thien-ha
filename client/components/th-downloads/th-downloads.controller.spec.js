'use strict';

describe('Controller: ThDownloadsCtrl', function () {

  // load the controller's module
  beforeEach(module('thienHaApp'));

  var ThDownloadsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThDownloadsCtrl = $controller('ThDownloadsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
