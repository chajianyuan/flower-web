(function () {
    'use strict';
  
    angular
      .module('webtest')
      .component('base', {
        template: 'asd<div ui-view></div>'
      });
  })();
  