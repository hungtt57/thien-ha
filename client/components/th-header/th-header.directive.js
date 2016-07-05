'use strict';

angular.module('thienHaApp')
  .directive('thHeader', function () {
    return {
      templateUrl: 'components/th-header/th-header.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });