'use strict';

angular.module('thienHaApp')
  .directive('thDownloadsMobile', function () {
    return {
      templateUrl: 'components/th-downloads-mobile/th-downloads-mobile.html',
      restrict: 'EA',
      controller: 'ThDownloadsCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
