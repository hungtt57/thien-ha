'use strict';

angular.module('thienHaApp')
  .controller('ThNewsCtrl', function($scope, $http, $location, $stateParams, CacheFactory,cmsConfig) {
    $scope.posts = [];
    $scope.tabs = [];
    $scope.catSlug = ['news', 'event', 'introduction'];
    $scope.posts_news = [];
    $scope.posts_introduction = [];
    $scope.posts_event = [];
    $scope.maxSize = 10;
    $scope.bigCurrentPage = 1;
    $scope.itemsPerPage = 10;
    var getLimit = 1000;

    if (!CacheFactory.get('postsCache')) {
      CacheFactory.createCache('postsCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }

    var postsCache = CacheFactory.get('postsCache');

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    var processData = function(data) {
  
      var now = new Date();
      data.forEach(function(post) {
        var post_cat = post.category.name;
        if (post.active === true) {
          switch (post_cat) {
            case 'Tin tức':
              $scope.posts_news.push(post);
              break;
            case 'Sự kiện':
              $scope.posts_event.push(post);
              $scope.posts_news.push(post);
              break;
            case 'Hướng dẫn':
              $scope.posts_introduction.push(post);
              $scope.posts_news.push(post);
              break;
            default:
              // console.log(post.category.name);
          }
        }
      });
      $scope.posts_news.category_name = 'Tin tức';
      $scope.posts_event.category_name = 'Sự kiện';
      $scope.posts_introduction.category_name = 'Hướng dẫn';

      $scope.tabs.push( $scope.posts_news, $scope.posts_event,$scope.posts_introduction);
     
      switch ($stateParams.slug) {
        case 'introduction':
          $scope.tabs[2].active = true;
          break;
        case 'news':
          $scope.tabs[0].active = true;
          break;
        case 'event':
          $scope.tabs[1].active = true;
          break;
        default:
          $scope.tabs[0].active = true;
      }
    };
    //if (typeof postsCache.get('posts') === "undefined") {
    if (true) {
 
      $http.get(cmsConfig['api-url']+'/api/posts/site/55f14b3cb4fce9a378cf656b/limit/' + getLimit + '?skip=0&sort=-publish')
        .then(function(res) {

          postsCache.put('posts', res.data);
          processData(res.data);
        });
    } else {
      processData(postsCache.get('posts'));
    }
  });
