(function() {
  "use strict";

  angular.module("webtest").controller("UnderController", UnderController);

  function UnderController() {
    //地图加载
    var map = new AMap.Map("container", {
      resizeEnable: true
    });
    
  }
})();
