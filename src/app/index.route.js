(function() {
  "use strict";

  angular.module("webtest").config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      // .state('home', {
      //   url         : '/',
      //   templateUrl : 'app/main/main.html',
      //   controller  : 'MainController',
      //   controllerAs: 'main'
      // })
      .state("base", {
        url        : "",
        abstract   : true,
        templateUrl: "app/base.html"
      })
      //登录页面
      .state("base.home.login", {
        url         : "/home/login",
        templateUrl : "app/pages/auth/login/login.html",
        controller  : "LoginController",
        controllerAs: "vm",
        params      : {
          info: {}
        }
      })
      //注册页面
      .state("base.home.regist", {
        url         : "/home/regist",
        templateUrl : "app/pages/auth/regist/regist.html",
        controller  : "RegistController",
        controllerAs: "vm"
      })
      //首页
      .state("base.home", {
        url         : "/home",
        templateUrl : "app/pages/home/home.html",
        controller  : "HomeController",
        controllerAs: "vm"
      })
      //首页中的首页
      .state("base.home.major",{
        url         : '/major',
        templateUrl : 'app/pages/part/major/major.html',
        controller  : 'MajorController',
        controllerAs: 'vm',
        params      : {
          info: {}
        }
      })
      //首页中的所有商品
      .state('base.home.all',{
        url         : '/all',
        templateUrl : 'app/pages/part/all/all.html',
        controller  : 'AllController',
        controllerAs: 'vm'
      })
      //首页中的支付方式
      .state("base.home.pay",{
        url         : '/pay',
        templateUrl : 'app/pages/part/pay/pay.html',
        controller  : 'PayController',
        controllerAs: 'vm'
      })
      //首页中的关于花语
      .state("base.home.about",{
        url         : '/about',
        templateUrl : 'app/pages/part/about/about.html',
        controller  : 'AboutController',
        controllerAs: 'vm'
      })
      //首页中的线下门店
      .state("base.home.under",{
        url         : '/under',
        templateUrl : 'app/pages/part/under/under.html',
        controller  : 'UnderController',
        controllerAs: 'vm'
      })
      // 各类鲜花页面
      .state("base.home.ftype",{
        url         : '/ftype',
        templateUrl : 'app/pages/part/ftype/ftype.html',
        controller  : 'ftypeController',
        controllerAs: 'vm',
        params      : {
          info: {}
        }
      })
      //购物车
      .state("base.home.purchase",{
        url         : '/purchase',
        templateUrl : 'app/pages/part/purchase/purchase.html',
        controller  : 'PurchaseController',
        controllerAs: 'vm'
      })
      ;

    $urlRouterProvider.otherwise("/home/major");
  }
})();
