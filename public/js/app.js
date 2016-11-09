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
  })
  .when('/:shortcode', {
	resolve: {
    	lookupShortCode: ['$q', '$http',  function($q, $http) {
          return $http
              .get('api/lookupShortCode', { params: { shortcode: 'short' }} )
              .then(function(response){
                  var initData = response.data
                  if( initData.url ){
                  	window.location = initData.url;
                  } else {
                  	window.location = '/'
                  }
                  console.log("got data!", initData)
                  return initData;
              })
        }]
    }
  })

 // $routeProvider.otherwise({redirectTo: '/'});
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