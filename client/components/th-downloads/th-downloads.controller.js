'use strict';

angular.module('thienHaApp')
  .controller('ThDownloadsCtrl', function ($scope, $http, $cookies, cmsConfig) {


    $scope.payLink = cmsConfig['pay-link'];
    $scope.supportLink = cmsConfig['support-link'];
    $scope.facebookLink = cmsConfig['facebook-link'];
    $scope.appleLink = cmsConfig['apple-link'];
    $scope.googleLink = cmsConfig['google-link'];
    $scope.apkLink = cmsConfig['apk-link'];
    $scope.gplusLink = cmsConfig['gplus-link'];

    $http.get(cmsConfig['api-url'] + cmsConfig['api-post'] + cmsConfig['trailer-id']).then(function(res) {
      //console.log(res.data.content);
      var rawContent = res.data.content;
      var rawContentArr = rawContent.split('');
      var i = rawContent.indexOf('https');
      var j = rawContent.indexOf('">', i + 1);
      $scope.videoLink = rawContentArr.slice(i, j).join('');

   
      setTimeout(function() {


        $('.popup-youtube').magnificPopup({
          // disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });

        var popupCookie = $cookies.get('showPopupFirst');

        if(typeof popupCookie == 'undefined') {
          $('.popup-youtube').magnificPopup('open');
          $cookies.put('showPopupFirst', 1);
        }


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
      }, 0);
    });
  });
