'use strict';

angular.module('thienHaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('libVideo', {
        url: '/lib/video',
        templateUrl: 'app/lib/lib-video.html',
        controller: 'LibVideoCtrl'
      })
      .state('libWallpaper', {
        url: '/lib/wallpaper',
        templateUrl: 'app/lib/lib-wallpaper.html',
        controller: 'LibWallpaperCtrl'
      })
      .state('libScreenshot', {
        url: '/lib/screenshot',
        templateUrl: 'app/lib/lib-screenshot.html',
        controller: 'LibScreenshotCtrl'
      });
  });
