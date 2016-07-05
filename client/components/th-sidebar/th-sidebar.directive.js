'use strict';

angular.module('thienHaApp')
  .directive('thSidebar', function () {
    return {
      templateUrl: 'components/th-sidebar/th-sidebar.html',
      restrict: 'EA',
      controller: 'ThSidebarCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
