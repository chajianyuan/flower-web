(function() {
  "use strict";

  angular.module("webtest").controller("ftypeController", ftypeController);

  function ftypeController($scope, $stateParams) {
    $scope.flowers = $stateParams.info.data.data;
    
  }
})();
