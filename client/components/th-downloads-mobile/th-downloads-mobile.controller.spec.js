'use strict';

describe('Controller: ThDownloadsMobileCtrl', function () {

  // load the controller's module
  beforeEach(module('thienHaApp'));

  var ThDownloadsMobileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThDownloadsMobileCtrl = $controller('ThDownloadsMobileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
