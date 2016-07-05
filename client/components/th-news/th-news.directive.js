'use strict';

angular.module('thienHaApp')
  .directive('thNews', function () {
    return {
      templateUrl: 'components/th-news/th-news.html',
      restrict: 'EA',
      controller: 'ThNewsCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
