angular.module('ctrl.home', ['ngRoute'])
.controller('HomeCtrl', ['$scope', '$http', 'miniUrl', function($scope, $http, miniUrl ) {

	$scope.miniUrl = miniUrl	

	console.log('in home!')

}]);