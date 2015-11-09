var app = angular.module('processBook', ['ngRoute'])

 .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('entryController', function($scope, $routeParams) {
     $scope.name = "EntryController";
     $scope.params = $routeParams;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/entry/:entryId', {
    templateUrl: function (params) {return 'views/entry/' + params.entryId + '.html';},
    controller: 'entryController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 200);
        return delay.promise;
      }
    }
  })

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);

  // angular.module('processBook').run(function($rootScope, $templateCache) {
  //      $rootScope.$on('$viewContentLoaded', function() {
  //         $templateCache.removeAll();
  //      });
  //   });

});