'use strict';

angular.module('thienHaApp')
  .directive('thCharacters', function () {
    return {
      templateUrl: 'components/th-characters/th-characters.html',
      restrict: 'EA',
      controller: 'ThCharactersCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
