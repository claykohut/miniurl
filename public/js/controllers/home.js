angular.module('ctrl.home', ['ngRoute'])
.controller('HomeCtrl', ['$scope', '$http', 'miniUrl', function($scope, $http, miniUrl ) {

	$scope.miniUrl = miniUrl

	console.log('in home!')

	$http.post('api/test').then(function(response, data){
		console.log('did it! ', response.data)
	})

}]);