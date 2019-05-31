(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name= "AMISHA";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watches: ", $scope.$$watchersCount);
  };

$scope.countOnce = function () {
  $scope.onceCounter = 1;
};

$scope.upCounter = function () {
  $timeout(function () {
    $scope.counter++;
    console.log("Counter Increment!");
  }, 2000);
};
// $scope.upCounter = function () {
//   setTimeout(function () {
//     $scope.$apply(function () {
//       $scope.counter++;
//       console.log("Counter Increment!");
//     });
//   }, 2000);
//};

// $scope.upCounter = function () {
//   setTimeout(function () {
//       $scope.counter++;
//       console.log("Counter Increment!");
//       $scope.$digest();
//   }, 2000);
//};


$scope.$watch(function () {
    console.log("Digest loop fired!");
})

// $scope.$watch('onceCounter', function (newValue, oldValue) {
//   console.log("onceCounter old Value: ", oldValue);
//   console.log("onceCounter new Value: ", newValue);
// });
//
// $scope.$watch('counter', function (newValue, oldValue) {
//   console.log("counter old Value: ", oldValue);
//   console.log("counter new Value: ", newValue);
// });

}

})();
