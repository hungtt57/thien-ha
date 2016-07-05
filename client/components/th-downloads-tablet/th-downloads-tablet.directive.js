'use strict';

angular.module('thienHaApp')
  .directive('thDownloadsTablet', function () {
    return {
      templateUrl: 'components/th-downloads-tablet/th-downloads-tablet.html',
      restrict: 'EA',
      controller: 'ThDownloadsCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
