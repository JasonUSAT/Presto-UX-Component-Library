'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1',function ($scope) {
      
    $scope.daMarkdown = 'hello something!';
    
  });
  
var demoApp = angular.module('demoApp', []);  

demoApp.controller('siteGroupSelectorCtrl', function siteGroupSelectorCtrl($scope) {
    
    
    
});

