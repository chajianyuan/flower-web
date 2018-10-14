(function() {
  "use strict";

  angular.module("webtest").controller("LoginController", LoginController);

  function LoginController($http, $scope, $state) {
    var token        = "";
        $scope.user  = {};
        $scope.login = function() {
      $http.post(saip + "user/login", $scope.user).then(function(res) {
        console.log(res);
        if (res.data.errno == 1006) {
          swal({
            title: "用户名或密码错误",
            icon : "error"
          });
          $scope.user = {};
        } else if (res.data.errno == 1004) {
          swal({
            title: "缺少字段",
            icon : "error"
          });
          $scope.user = {};
        } else {
          swal({
            title: "登录成功",
            icon : "error"
          });
          token = res.data.data.token;
          console.log(token);
          $state.go("base.home.major",{
            info: token
          });
        }
      });
    };
  }
})();
