'use strict';

angular.module('thienHaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post/:slug',
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      });
  });
