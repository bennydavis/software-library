var adgApp=angular.module('adgApp',[
    'ngRoute',
    'adgAppControllers'
]);

adgApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/',{
            templateUrl:'partials/completed.html',
            controller:'CompletedCtrl'
        }).otherwise({
            redirectTo:'/'
        });
    }
]);