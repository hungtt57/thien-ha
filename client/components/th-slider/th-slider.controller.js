'use strict';

angular.module('thienHaApp')
  .controller('ThSliderCtrl', function($scope, $http, CacheFactory, cmsConfig) {

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [];

    // $scope.addSlide = function() {
    //   var newWidth = 600 + slides.length + 1;
    //   slides.push({
    //     image: '//placeimg.com/' + newWidth + '/350/any',
    //     text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['City', 'View', 'Land', 'Architecture'][slides.length % 4]
    //   });
    // };
    //
    // for (var i = 0; i < 5; i++) {
    //   $scope.addSlide();
    // }


    if (!CacheFactory.get('sliderCache')) {
      CacheFactory.createCache('sliderCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }

    var sliderCache = CacheFactory.get('sliderCache');

    var processData = function(data) {
      var bannerSort = function(banner) {
        banner.sort(function(a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        return banner;
      };
    
      $scope.slides = bannerSort(data);
    };


    //if(typeof sliderCache.get('thSlider') === "undefined") {
    if(true) {
      $http.get(cmsConfig['api-url']+'/api/uploads/album/' + cmsConfig['slider-album-id']).success(function(data) {
        sliderCache.put('thSlider', data);
        processData(data);
      });
    }
    else {
      processData(sliderCache.get('thSlider'));
    }
  });
