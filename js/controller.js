var adgAppControllers=angular.module('adgAppControllers',[]);

adgAppControllers.controller('CompletedCtrl',['$scope','$http',function ($scope,$http) {
    $http.get('data/homepage_projects.json').success(function (data) {
       $scope.completed=data;
    });
}]);