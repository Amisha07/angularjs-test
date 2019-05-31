(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter ) {
  $scope.stateOfBeing = "hungry";
$scope.sayMessage = function () {
   var msg = "Amisha likes to eat healthy snacks at night!";
   return msg;
 };

  $scope.name = "Amisha";
  $scope.foodCost = 5;


  //Built in filter:
  //$scope.sayMessage = function () {
//   var msg = "Amisha eat healthy snacks at night!";
  // var output = $filter('uppercase')(msg);
//   return msg;
//  };

  $scope.sayLovesMessage = function () {
    var msg1 = "Amisha likes to eat healthy snacks at night!";
    msg1 =  lovesFilter(msg1);
    return msg1;
  };

  $scope.FeedAmisha = function () {
    $scope.stateOfBeing = "feed";
  };

}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };
}

})();
