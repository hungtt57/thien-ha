'use strict';

angular.module('thienHaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/category/:slug',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });
