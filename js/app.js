var app = angular.module('processBook', ['ui.router'])

 .controller('MainController', function($scope, $state) {

 })

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
     //
     // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/");
     // $locationProvider.html5Mode(true);

     //
     // Now set up the states
     $stateProvider
      .state('Entry', {
        url: "/entry/:entryId",
        templateUrl: function (stateParams){
                    return '/partials/entry' + stateParams.entryId + '.html';
                }
      })
       .state('Home', {
         url: "/",
         templateUrl: "/partials/start.html",
       })

    });