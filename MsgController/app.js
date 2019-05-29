(function () {
  'use strict';

angular.module('MsgApp',[] )
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name ="Amisha";
$scope.stateofBeing = "hungry";
$scope.sayMessage =function () {
  return "Eat healty food!!";

};

$scope.feedAmisha = function () {
  $scope.stateofBeing = "feed";
};
}
})();
