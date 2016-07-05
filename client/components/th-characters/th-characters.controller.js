'use strict';

angular.module('thienHaApp')
  .controller('ThCharactersCtrl', function($scope, cmsConfig) {

    var slides = $scope.slides = [];

    var arrChar = [cmsConfig['character-bow'], cmsConfig['character-wizard'], cmsConfig['character-sword'], cmsConfig['character-blade']];

    $scope.addSlide = function(num) {
      var newWidth = 716 + slides.length + 1;
      slides.push({
        url: '/post/' + arrChar[num - 1],
        image: '/assets/images/components/character/min/' + num + '-min.jpg'
      });
    };

    for (var i = 0; i < 4; i++) {
      $scope.addSlide(i+1);
    }

    var initSlider = function() {
      $("#thCharacters").zAccordion({
        timeout: 3500,
        speed: 500,
        slideWidth: 717,
        width: $('#thCharacters').outerWidth(),
        height: 337,
        slideClass: 'th-character'
      });
    };

    setTimeout(function() {
      initSlider();
    }, 0);
  });
