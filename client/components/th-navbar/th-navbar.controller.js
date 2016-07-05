'use strict';

angular.module('thienHaApp')
  .controller('ThNavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Trang chủ',
      'link': '/'
    },{
      'title': 'Thông báo',
      'link': '/category',
      'sub': [{
        'title': 'Tin tức',
        'link': '/category/news'
      }, {
        'title': 'Sự kiện',
        'link': '/category/event'
      }, {
        'title': 'Hướng dẫn',
        'link': '/category/introduction'
      }]
    },{
      'title': 'Hướng dẫn',
      'link': '#',
      'sub': [{
        'title': 'Giới thiệu',
        'link': '/post/gioi-thieu'
      }, {
        'title': 'Nạp Vàng',
        'link': '/post/huong-dan-nap-vang'
      }, {
        'title': 'Cài đặt',
        'link': '/post/huong-dan-cai-dat'
      }, {
        'title': 'Cẩm nang Thiên Hạ',
        'link': '/post/cam-nang-thien-ha'
      }]
    },{
      'title': 'Thư viện',
      'link': '/lib',
      'sub': [{
        'title': 'Video',
        'link': '/lib/video'
      }, {
        'title': 'Wallpapers',
        'link': '/lib/wallpaper'
      }, {
        'title': 'Screenshot',
        'link': '/lib/screenshot'
      }]
    },{
      'title': 'Fanpage',
      'link': 'https://www.facebook.com/thienhagarena/'
    },{
      'title': 'Hỗ trợ kỹ thuật <span>19002282</span>',
      'link': 'http://hotro.garena.vn',
      // 'sub': [{
      //   'title': 'PHÍM 1: Hỗ trợ nạp thẻ',
      //   'link': '/'
      // }, {
      //   'title': 'PHÍM 2: Hỗ trợ tài khoản',
      //   'link': '/'
      // }, {
      //   'title': 'PHÍM 3: Giải đáp & xử lý lỗi game',
      //   'link': '/'
      // }, {
      //   'title': 'PHÍM 4: Giải đáp chương trình khuyến mãi',
      //   'link': '/'
      // }, {
      //   'title': 'PHÍM 5: Các hỗ trợ khác',
      //   'link': '/'
      // }, {
      //   'title': 'PHÍM 6: Hỗ trợ tài khoản GAS và Lỗi GAS',
      //   'link': '/'
      // }]
    }];

    $scope.isCollapsed = true;

    setTimeout(function() {
      $('.navmenu').offcanvas({
        toggle: false
      });
    }, 0);

    $scope.menu.forEach(function(menu) {
      var menuLink = menu.link.replace(/[/]/gi, '');
      var locationLink = $location.path().replace(/[/]/gi, '');
      if(menuLink.length === 0) {
        if(locationLink.length !== 0) {
          menuLink = null;
        }
      }
      // console.log(menuLink, locationLink, locationLink.indexOf(menuLink));
      if(locationLink.indexOf(menuLink) > -1) {
        menu.active = true;
        // console.log(menu);
      }
    });

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.isActiveArr = function(routes) {
      return routes.some(function(route) {
        console.log($location.path());
        return route === $location.path() || $location.path().indexOf(route) > -1;
      });
    };
  });
