'use strict';

angular.module('thienHaApp')
  .directive('thFooter', function () {
    return {
      templateUrl: 'components/th-footer/th-footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });