'use strict';

angular.module('thienHaApp')
  .controller('LandingCtrl', function ($scope, $http, $sce, cmsConfig) {

    var pets = $scope.pets = [];

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
    });

    $http.get(cmsConfig['api-url']+'/api/posts/' + cmsConfig['landing-post-id']).then(function(res) {
      $scope.intro = $sce.trustAsHtml(res.data.content);
    });

    $http.get(cmsConfig['api-url']+'/api/uploads/album/' + cmsConfig['landing-pets-id']).success(function(data) {
      data.forEach(function(pet) {
        //console.log(pet);
        var petImgUrl = 'http://' + pet.servers[0]+ '/uploads/' + pet.file.filename;
        pets.push({
          name : pet.name,
          description : pet.description,
          image: petImgUrl
        })
      });

      setTimeout(function() {

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          // disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });

        var swiper = new Swiper('.slidertop', {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          loop:true,
          grabCursor: true

        });

        $("#sliderbanner").flipster({
          itemContainer:'ul',
          itemSelector:'li',
          style:'carousel',
          start: 3,
          buttons: true,
          loop: true
        });

        $('.cm-overlay').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });

        $('.slim-scrollbar').slimScroll({
          width: '610px',
          height: '450px',
          color: '#234747',
          railVisible: true
        });

        $(".sclose").click(function() {
          $(".downpp").hide()
        });

        $('.th-landing-tabs li').click(function(){
          var tab_id = $(this).attr('data-landing-tab');
          $('.th-landing-tabs li').removeClass('current');
          $('.th-landing-tab-content').removeClass('current');
          $(this).addClass('current');
          $("#petContent_"+tab_id).addClass('current');
        });

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
      }, 0)
    });


  });
