angular.module('miniUrlApp', [
  'ngRoute',
  'ctrl.home',
  'ctrl.url-list',
  'api.miniUrl',
  'ui.common'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 
 $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .when('/all-urls', {
    templateUrl: 'templates/all-urls.html',
    controller: 'UrlListCtrl',
    resolve: {
    	urlListData: ['$q', '$http', function($q, $http){
    		return $http
			 .get('api/getAllUrls')
              .then(function(response){
                  var initData = response.data
                  return initData;
              })
    	}]
    }
  })
  .when('/:shortcode', {
	resolve: {
    	lookupShortCode: ['$q', '$http', '$route',  function($q, $http, $route) {
          return $http
              .get('api/lookupShortCode', { params: { shortcode: $route.current.params.shortcode }} )
              .then(function(response){
                  var initData = response.data
                  if( initData.url ){
                  	var externalUrl = initData.url
                  	if( externalUrl.indexOf('http://') == -1 && externalUrl.indexOf('https://') == -1 ){
                  		externalUrl = 'http://'+ externalUrl
                  	}
                  	window.location = externalUrl;
                  } else {
                  	window.location = '/'
                  }
                  return initData;
              })
        }]
    }
  })

}])
.directive('ngEnter', function () {
	return function (scope, element, attrs) {
	    element.bind("keydown keypress", function (event) {
	        if(event.which === 13) {
	            scope.$apply(function (){
	                scope.$eval(attrs.ngEnter);
	            });

	            event.preventDefault();
	        }
	    });
	};
})