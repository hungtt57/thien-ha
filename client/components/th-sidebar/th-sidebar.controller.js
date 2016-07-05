'use strict';

angular.module('thienHaApp')
  .controller('ThSidebarCtrl', function($scope, cmsConfig) {
    $scope.payLink = cmsConfig['pay-link'];
    $scope.supportLink = cmsConfig['support-link'];
    $scope.facebookLink = cmsConfig['facebook-link'];
    $scope.appleLink = cmsConfig['apple-link'];
    $scope.googleLink = cmsConfig['google-link'];
    $scope.apkLink = cmsConfig['apk-link'];
    $scope.gplusLink = cmsConfig['gplus-link'];
     $('.popup-download-apk').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,
                
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
  });
