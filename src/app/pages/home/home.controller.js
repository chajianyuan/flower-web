(function() {
  "use strict";

  angular.module("webtest").controller("HomeController", HomeController);

  function HomeController($state,$scope,) {
    var vm = this;
    $("document").ready(function() {
      //点击出现浮层
      $("#show").click(function() {
        //清除之前的样式
        $("#fullScreen").remove();
        $("body").append(
          "<div id='fullScreen'></div>" +
            "<div id='floatLayer'>" +
            "<input type='text' placeholder='输入关键字' id='search'>" +
            "<button id='btn1' class='mdui-btn mdui-ripple'>确定</button>"+
            "<button id='btn2' class='mdui-btn mdui-ripple'>取消</button>"+
            "</div>"
        );
        //隐藏浮层
        $("#btn2").click(function() {
          $("#fullScreen,#floatLayer").remove();
        });
      });
    });
  }
})();
