var myApp = angular.module('myApp', [
    'ngRoute',
    'Controllers'
]);
myApp.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/page/course', {
            templateUrl: 'page/course.html',
            controller: 'ListController'

        }).
        when('/page/Contact', {
            templateUrl: 'page/Contact.html',
            controller: 'ListController'

        }).
        when('/page/Education', {
            templateUrl: 'page/Education.html',
            controller: 'ListController'

        }).
        when('/page/Research', {
            templateUrl: 'page/Research.html',
            controller: 'ListController'

        }).
        when('/Home', {
            templateUrl: 'page/page1.html',
            controller: 'ListController'

        }).
        when('/details/:itemId', {
            templateUrl: 'page/details.html',
            controller: 'detailsController'

        }).otherwise({
            redirectTo: '/Home'
        });
    }
]);



var Controllers = angular.module('Controllers', []);

Controllers.controller('ListController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data.json').success(function(data) {
            $scope.artists = data;

        });
    }
]);

Controllers.controller('detailsController', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('data.json').success(function(data) {
            $scope.artists = data;
            $scope.whichItem = $routeParams.itemId;
        });
    }
]);