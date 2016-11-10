angular.module('ctrl.home', ['ngRoute'])
.controller('HomeCtrl', ['$scope', '$http', 'miniUrl', function($scope, $http, miniUrl ) {

	$scope.miniUrl = miniUrl	

	//$scope.regex = '^((https?|ftp)://)?([A-Za-z]+\\.)?[A-Za-z0-9-]+(\\.[a-zA-Z]{1,4}){1,2}(/.*\\?.*)?$';
	$scope.regex = RegExp('^((https?|ftp)://)?([a-z]+[.])?[a-z0-9-]+([.][a-z]{1,4}){1,2}(/.*[?].*)?$', 'i');

	console.log('in home!')

}]);