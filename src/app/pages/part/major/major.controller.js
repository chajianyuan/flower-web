(function() {
  "use strict";

  angular.module("webtest").controller("MajorController", MajorController);

  function MajorController($http, $scope, $state, $stateParams) {
    var token = $stateParams.info;
    console.log(token);
    // 最新
    $http.post(saip + "flower/getFlowerByCreatetime", { limit: 8 }).then(
      function(data) {
        console.log(data);
        $scope.newflower = data.data.data;
      },
      function(error) {
        console.log(error);
      }
    );

    // 各种鲜花类型
    var elderflower = function() {
      $scope.elderflower = "送长辈鲜花";
      $http
        .post(saip + "flower/getFlowerByFtypeLimit", {
          ftype: $scope.elderflower
        })
        .then(
          function(data) {
            console.log(data.data.data.fname);
            $scope.ftype1 = data.data.data;
          },
          function(error) {
            console.log(error);
          }
        );
    };
    elderflower();

    var loveflower = function() {
      $scope.loveflower = "爱情鲜花";
      $http
        .post(saip + "flower/getFlowerByFtypeLimit", {
          ftype: $scope.loveflower
        })
        .then(
          function(data) {
            console.log(data.data.data.fname);
            $scope.ftype2 = data.data.data;
          },
          function(error) {
            console.log(error);
          }
        );
    };
    loveflower();

    var immortalflower = function() {
      $scope.immortalflower = "永生花";
      $http
        .post(saip + "flower/getFlowerByFtypeLimit", {
          ftype: $scope.immortalflower
        })
        .then(
          function(data) {
            console.log(data.data.data.fname);
            $scope.ftype3 = data.data.data;
          },
          function(error) {
            console.log(error);
          }
        );
    };
    immortalflower();

    var gift = function() {
      $scope.gift = "礼品";
      $http
        .post(saip + "flower/getFlowerByFtypeLimit", {
          ftype: $scope.gift
        })
        .then(
          function(data) {
            console.log(data.data.data.fname);
            $scope.ftype4 = data.data.data;
          },
          function(error) {
            console.log(error);
          }
        );
    };
    gift();

    // 点击更多事件
    $scope.flower     = {};
    $scope.findflower = function(data) {
      if (data === "送长辈鲜花") {
        console.log(data);
        $http.post(saip + "flower/getFlowerByFtype", { ftype: data }).then(
          function(data) {
            console.log(data);
            $state.go("base.home.ftype", {
              info: data
            });
          },
          function(error) {
            console.log(error);
          }
        );
      } else if (data === "爱情鲜花") {
        $http.post(saip + "flower/getFlowerByFtype", { ftype: data }).then(
          function(data) {
            console.log(data);
            // $scope.ftype = data.data.data;
            $state.go("base.home.ftype", {
              info: data
            });
          },
          function(error) {
            console.log(error);
          }
        );
      } else if (data === "永生花") {
        $http.post(saip + "flower/getFlowerByFtype", { ftype: data }).then(
          function(data) {
            console.log(data);
            // $scope.ftype = data.data.data;
            $state.go("base.home.ftype", {
              info: data
            });
          },
          function(error) {
            console.log(error);
          }
        );
      } else if (data === "礼品") {
        $http.post(saip + "flower/getFlowerByFtype", { ftype: data }).then(
          function(data) {
            console.log(data);
            // $scope.ftype = data.data.data;
            $state.go("base.home.ftype", {
              info: data
            });
          },
          function(error) {
            console.log(error);
          }
        );
      }
    };
  }
})();
