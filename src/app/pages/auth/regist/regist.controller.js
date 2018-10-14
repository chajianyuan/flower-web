(function() {
  "use strict";

  angular.module("webtest").controller("RegistController", RegistController);

  function RegistController($scope, $http, $state) {
    $scope.user = {};
    console.log($scope.user)
    $scope.regist = function(user) {
      console.log(user);
      console.log($scope.user);
      $http.post(saip + "user/addUser",user).then(function(res) {
        console.log(res);
        if (res.data.errno == 1002) {
          swal({
            title: "用户名已存在",
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
            title: "注册成功",
            icon : "error"
          });
          $state.go("base.home.login");
        }
      });
    };
  }
})();
