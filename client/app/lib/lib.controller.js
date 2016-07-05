'use strict';

angular.module('thienHaApp')
  .controller('LibVideoCtrl', function ($scope, $stateParams, $http, $location,ThumbnailService,cmsConfig) {

    var slug = $stateParams.slug;

    $scope.maxSize = 9;
    $scope.bigCurrentPage = 1;
    $scope.itemsPerPage = 9;

    $scope.go = function ( path ) {
      $location.path( path );
    };

    var obj = {
      id: '563b2de4025fcbb1b7984e36',
      name: 'Video'
    };

    $scope.processData = function(banner) {
      banner.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      return banner;
    };

    $scope.getUrl = function(server, filename) {
      return 'http://' + server + '/uploads/' + filename;
    };

    $http.get(cmsConfig['api-url']+'/api/uploads/album/' + obj.id).success(function(data) {
      //console.log(data);
      $scope.lib = {
        name: obj.name,
        data: $scope.processData(data),
        active: $scope.active
      };

      var activePopup = function() {
        $('.lib-youtube').magnificPopup({
          // disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      };

      setTimeout(function() {
        // console.log($('.popup-youtube').length);
        activePopup();
      }, 500);
    });
  })
  .controller('LibWallpaperCtrl', function ($scope, $stateParams, $http, $location, ThumbnailService,cmsConfig) {

    var slug = $stateParams.slug;

    $scope.maxSize = 9;
    $scope.bigCurrentPage = 1;
    $scope.itemsPerPage = 9;

    $scope.go = function ( path ) {
      $location.path( path );
    };

    var obj = {
      id: '563b2a6da387b5c0c016df6f',
      name: 'Wallpaper'
    };

    $scope.processData = function(banner) {
      banner.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      return banner;
    };
    
    $scope.getUrl = function(server, filename) {

      var link = 'http://' + server + '/uploads/' + filename;
  
      return link;
    };

    $http.get(cmsConfig['api-url']+'/api/uploads/album/' + obj.id).success(function(data) {
    
      $scope.lib = {
        name: obj.name,
        data: $scope.processData(data),
        active: $scope.active,

      };
     
   
    });
})
  .controller('LibScreenshotCtrl', function ($scope, $stateParams, $http, $location,cmsConfig) {

    var slug = $stateParams.slug;

    $scope.maxSize = 9;
    $scope.bigCurrentPage = 1;
    $scope.itemsPerPage = 9;

    $scope.go = function ( path ) {
      $location.path( path );
    };

    var obj = {
      id: '563b2a74a1ae8ccbc04512d3',
      name: 'Screenshot'
    };

    $scope.processData = function(banner) {
      banner.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      return banner;
    };

    $scope.getUrl = function(server, filename) {
      return 'http://' + server + '/uploads/' + filename;
    };

    $http.get(cmsConfig['api-url']+'/api/uploads/album/' + obj.id).success(function(data) {
      //console.log(data);
      $scope.lib = {
        name: obj.name,
        data: $scope.processData(data),
        active: $scope.active
      };
    });
});
