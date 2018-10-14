(function() {
  "use strict";

  angular.module("webtest").controller("AllController", AllController);

  function AllController($scope, $http) {
    //分页查询
    var page = function() {
      //第一页
      $http
        .post(saip + "flower/getAllFlower", { page: "1", pageSize: "12" })
        .then(
          function(data) {
            console.log(data);
            $scope.count = data.data.data.count;
            console.log("count", $scope.count);
            $scope.flower = data.data.data.data;
            //共有多少条
            $scope.totalNo = $scope.count;
          },
          function(error) {
            console.log(error);
          }
        );
    };
    page();
    //当前的页数
    $scope.bigCurrentPage = 1;
    //限制分页按钮显示的数量大小
    $scope.maxSize = 5;
    //每页的条数
    $scope.perPageNo   = 12;
    $scope.now         = 1;
    $scope.pageNo      = 1;
    $scope.pageChanged = function (pageNo) {
      $scope.now = pageNo;
      console.log($scope.now);
      $http
        .post(saip + "flower/getAllFlower", { page: $scope.now , pageSize: $scope.perPageNo })
        .then(
          function(data) {
            console.log(data);
            $scope.count = data.data.data.count;
            console.log("count", $scope.count);
            $scope.flower = data.data.data.data;
            //共有多少条
            $scope.totalNo = $scope.count;
          },
          function(error) {
            console.log(error);
          }
        );
    };
    
  }
})();
