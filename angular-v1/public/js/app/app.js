// start new app with angular.module function 
//it take two arg app name and [] of loaded modules

// modules
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);


// routes
myApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeCtrl'
    })

      .when('/forcast', {
        templateUrl: 'pages/home.htm',
        controller: 'homeCtrl'
    })
})
// controller
myApp.controller('homeCtrl', ['$scope', function($scope){

}])

myApp.controller('forcastCtrl', ['$scope', function($scope){

}])