angular.module('ui.common', [])
.directive('loadingSpinner', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    templateUrl: 'templates/ui/spinner.html',
    scope: {
    	isActive: '='
    },
    link: function(scope, elem, attrs){

    }
  };
})
.directive('listWrap', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/ui/list.html',
    scope: {
       listItems: '=',
       showExtraData: '='
    },
    link: function(scope, elem, attrs){

    }
  };
})
.filter('displayUrl', function($location) {

  return function(input) {

    var output;

    output = 'http://' + $location.host() + ':' + $location.port() + '/#/' + input

    return output;

  }

})
.filter('displayDate', function() {

  return function(input) {

    var output;

    output = moment(input).fromNow()

    return output;

  }

});