angular.module('api.miniUrl', [])
.factory('miniUrl', function($http, $q){

	var urlData = {
		longUrl: '',
		shortUrl: ''
	}

	var makeUrlMini = function(){
		console.log('do it!')
	}

    return {
    	urlData: urlData,
    	isLoading: false,
    	hasError: false,
    	makeUrlMini: makeUrlMini
    };

});