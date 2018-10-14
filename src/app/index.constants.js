/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('webtest')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    // .factory('sessionInteceptor',["$q","StatellizerShared","$location","$window",function ($q,StatellizerShared,$location,$window) {
    //   var mtInterceptor         = {};
    //       mtInterceptor.request = function(requestConfig){
    //     requestConfig["headers"]["token"] = StatellizerShared.getToken();
    //     return requestConfig;
    //   };
    //   mtInterceptor.response=function (responseObject) {
    //     //用来验证token失效的前端操作
    //     if (responseObject.data.code === 405 || responseObject.data.code === 401 || responseObject.data.code === 406) {
    //       console.log(responseObject, "token失效！！需要重新登录");
    //       //删除相关本地存储---实现一个退出登录的效果
    //       console.log("token失效，需要重新登录！");
    //       sessionStorage.clear();
    //       $location.url('/login');
    //       console.log("token失效，需要重新登录！");
    //     } else {
    //       // $urlRouterProvider.otherwise('/main/home');
    //     }
    //     return responseObject;
    //   };
    //   return myInterceptor;
    // }])
    // .config(function ($httpProvider) {
    //   //添加拦截器
    //   $httpProvider.interceptors.push('sessionInteceptor');
    // });
    //     return responseObject;
    //   };
    //   return myInterceptor;
    // }])
    // .config(function ($httpProvider) {
    //   //添加拦截器
    //   $httpProvider.interceptors.push('sessionInteceptor');
    // });

})();
