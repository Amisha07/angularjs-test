(function(){
  'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
 $scope.name ="Amisha";
 $scope.sayHello = function  () {
   return "Hello Folks";
 };
});

})();
