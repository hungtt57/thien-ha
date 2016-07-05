'use strict';

angular.module('thienHaApp')
  .directive('thSlider', function () {
    return {
      templateUrl: 'components/th-slider/th-slider.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });