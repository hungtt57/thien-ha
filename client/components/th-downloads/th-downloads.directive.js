'use strict';

angular.module('thienHaApp')
  .directive('thDownloads', function () {
    return {
      templateUrl: 'components/th-downloads/th-downloads.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });