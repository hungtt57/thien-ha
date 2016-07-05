'use strict';

angular.module('thienHaApp')
  .directive('thNavbar', function () {
    return {
      templateUrl: 'components/th-navbar/th-navbar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
