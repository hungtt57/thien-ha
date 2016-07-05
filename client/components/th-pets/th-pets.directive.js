'use strict';

angular.module('thienHaApp')
  .directive('thPets', function () {
    return {
      templateUrl: 'components/th-pets/th-pets.html',
      restrict: 'EA',
      controller: 'ThPetsCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
