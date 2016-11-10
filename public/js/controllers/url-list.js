angular.module('ctrl.url-list', ['ngRoute'])
.controller('UrlListCtrl', ['$scope', '$http', 'urlListData', function($scope, $http, urlListData ) {

	console.log('in url list! ', urlListData)

	$scope.listData = urlListData.data

}]);