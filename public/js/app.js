angular.module('miniUrlApp', [
  'ngRoute',
  'ctrl.home',
  'api.miniUrl',
  'ui.common'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 
 $routeProvider.when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}])