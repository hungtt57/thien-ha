'use strict';

angular.module('thienHaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'angular-cache',
    'ui.thumbnail'
  ])
  .constant('cmsConfig', {
    'api-url': 'http://admin.gmo.ved.com.vn',
    'api-post': '/api/posts/',
    'siteId': '55f14b3cb4fce9a378cf656b',
    'pay-link': 'http://mshop.garena.com/topup/role?app_id=100036',
    'facebook-link': 'https://www.facebook.com/thienhagarena/',
    'support-link': 'http://hotro.garena.vn/',
    'apple-link': 'https://app.appsflyer.com/id1047095819?pid=OrganicA&c=Website_home',
    'google-link': 'https://app.appsflyer.com/com.garena.game.worldvn?pid=OrganicA&c=Website_home',
    'apk-link': 'https://app.appsflyer.com/com.garena.game.worldvn-Standalone?pid=OrganicA&c=Website_home',
    'gplus-link': '/post/choi-thien-ha-tren-gia-lap',
    'landing-post-id': '5684e459b1567f9634702952',
    'trailer-id': '56d8125ecf7acddd7dd35c48',
    'slider-album-id': '56386af4823079d23154810b',
    'landing-pets-id': '56d907689bd20a607d3cd7e1',
    'home-pets-id': '56d9078cfd95df8ba7fa4d7b',
    'character-bow': 'linh-vu',
    'character-wizard': 'van-loc',
    'character-sword': 'dich-kiem',
    'character-blade': 'thien-co'
  })
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, CacheFactoryProvider, ThumbnailServiceProvider) {
    angular.extend(CacheFactoryProvider.defaults, {
      maxAge: 60 * 60 * 1000,
      deleteOnExpire: 'aggressive', // Items will be deleted from this cache right when they expire.
      storageMode: 'localStorage', // This cache will use `localStorage`.
    });

    ThumbnailServiceProvider.defaults.width = 276;
    ThumbnailServiceProvider.defaults.height = 155;
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
