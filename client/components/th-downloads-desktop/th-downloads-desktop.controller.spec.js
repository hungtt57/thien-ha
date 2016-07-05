'use strict';

describe('Controller: ThDownloadsDesktopCtrl', function () {

  // load the controller's module
  beforeEach(module('thienHaApp'));

  var ThDownloadsDesktopCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThDownloadsDesktopCtrl = $controller('ThDownloadsDesktopCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
