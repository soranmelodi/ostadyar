var myapp = angular.module("myapp", []);
myapp.controller("mycontroller", ["$scope", "$http", function($scope, $http) {
    $http.get('json.js').success(function(data) {
        $scope.artists = data;
    });
}]);