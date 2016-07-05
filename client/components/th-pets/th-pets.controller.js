'use strict';

angular.module('thienHaApp')
  .controller('ThPetsCtrl', function($scope, $http, cmsConfig) {


    // $scope.message = 'Hello';
    var pets = $scope.pets = [];

    //$scope.addPet = function(i) {
    //  pets.push({
    //    image: '/assets/images/components/pet/min/' + i + '-min.png',
    //  });
    //};
    //for (var i = 1; i <= 8; i++) {
    //  $scope.addPet(i);
    //}

    $http.get(cmsConfig['api-url']+'/api/uploads/album/' + cmsConfig['home-pets-id']).success(function(data) {
      data.forEach(function(pet) {
        var petImgUrl = 'http://' + pet.servers[0]+ '/uploads/' + pet.file.filename;
        pets.push({
          name: pet.name,
          description: pet.description,
          image: petImgUrl
        })
      });

      setTimeout(function() {
        $('.owl-carousel').owlCarousel({
          margin: 5,
          nav: true,
          responsive: {
            0: {
              items: 5
            },
            600: {
              items: 5
            },
            1000: {
              items: 5
            }
          }
        });
      }, 0);
    });

  });
