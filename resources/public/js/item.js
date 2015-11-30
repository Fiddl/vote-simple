$scope.delete = function (item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
}