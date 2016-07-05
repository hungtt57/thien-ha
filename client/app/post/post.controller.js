'use strict';

angular.module('thienHaApp')
  .controller('PostCtrl', function($scope, $http, $sce, $stateParams, CacheFactory, cmsConfig) {

    if (!CacheFactory.get('slugCache')) {
      CacheFactory.createCache('slugCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }
    $scope.relatePosts = '';
    $scope.isRelatePost = false;
    var slugCache = CacheFactory.get('slugCache');
    // console.log(slugCache);
    // console.log(slugCache.get('slugs'));

    var init = function(data) {
      if (!CacheFactory.get('postCache')) {
        CacheFactory.createCache('postCache', {
          deleteOnExpire: 'aggressive',
          recycleFreq: 60000
        });
      }

      var postCache = CacheFactory.get('postCache');

      var slugs = data;
      var thatSlug = '';
      var slugValid = slugs.some(function(data) {
        thatSlug = data;
        return data.slug === $stateParams.slug;
      });


      // console.log(postCache.get('post' + thatSlug._id));
      var processData = function(data) {
        data.content = $sce.trustAsHtml(data.content);
        switch (data.category.name) {
          case 'Tin tức':
            data.catSlug = 'news';
            break;
          case 'Sự kiện':
            data.catSlug = 'event';
            break;
          case 'Hướng dẫn':
            data.catSlug = 'introduction';
            break;
          default:
            data.catSlug = 'news';
        }
        $scope.post = data;
       $http.get(cmsConfig['api-url']+'/api/posts/'+$scope.post._id+'/relatePosts?limit=2')
          .success(function(data) {
            if(data ==''){
             $scope.isRelatePost = false;
            }else{
              data.forEach(function(datas){
               switch (datas.category.name) {
                  case 'Tin tức':
                    datas.catSlug = 'news';
                    break;
                  case 'Sự kiện':
                    datas.catSlug = 'event';
                    break;
                  case 'Hướng dẫn':
                    datas.catSlug = 'introduction';
                    break;
                  default:
                    datas.catSlug = 'news';
                };
              });
             
          
              $scope.relatePosts = data;
              $scope.isRelatePost = true;
            }
          
        
          })
          .error(function(data) {
             $scope.isRelatePost = false;
          });
      };

      if (slugValid) {
        //if (typeof postCache.get('post' + thatSlug._id) === "undefined") {
        if (true) {

          $http.get(cmsConfig['api-url']+'/api/posts/' + thatSlug._id).success(function(data) {
            postCache.put('post' + thatSlug._id, data);
            processData(data);
          });
        } else {
          processData(postCache.get('post' + thatSlug._id));
        }
      } else {
        window.location.href = '/';
      }
    };

    //if (typeof slugCache.get('slugs') === "undefined") {
    if (true) {
    
      $http.get(cmsConfig['api-url']+'/api/posts/slug/site/55f14b3cb4fce9a378cf656b').success(function(data) {
        slugCache.put('slugs', data);
        init(data);
      });
    } else {
      init(slugCache.get('slugs'));
    }

});
