'use strict';

angular.module('thienHaApp')
  .directive('thDownloadsDesktop', function () {
    return {
      templateUrl: 'components/th-downloads-desktop/th-downloads-desktop.html',
      restrict: 'EA',
      controller: 'ThDownloadsCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
