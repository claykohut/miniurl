angular.module('api.miniUrl', [])
.factory('miniUrl', function($http, $q){

	var urlData = {
		longUrl: '',
		shortUrl: ''
	}

	var makeUrlMini = function(thisUrl){

		var defer = $q.defer()

		var self = this

		self.loading = true

        $http.post('api/makeUrlMini', { longUrl: thisUrl })
        	.success(function(response){
        		console.log('go success! ', response)
        		self.loading = false
        		self.results = response.data || []
        		defer.resolve(self.results);
        	})
        	.error(function(err){
        		console.log('got error! ', err)
        		self.loading = false
        		self.results = []
        		defer.resolve(err)
        	})

		return defer.promise
		console.log('do it!')
	}

    return {
    	urlData: urlData,
    	isLoading: false,
    	hasError: false,
    	makeUrlMini: makeUrlMini
    };

});