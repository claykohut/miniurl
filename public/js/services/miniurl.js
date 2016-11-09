angular.module('api.miniUrl', [])
.factory('miniUrl', function($http, $q, $location){

	var urlData = {
		longUrl: ''
	}

	var makeUrlMini = function(thisUrl){

		var defer = $q.defer()

		var self = this

        var errorResponse = false

        if( this.loading ){
            errorResponse = { code: 'already_loading', message: 'Please wait for current request to finish'}
        } else if(self.urlData.longUrl == '') {
             errorResponse = { code: 'no_url', message: 'Please enter a url'}
        }// } else if( ! validUrl ){
        //     errorResponse = { code: 'invalid_url', message: 'Please enter a valid url'}
        // }

        if( errorResponse ){
            errorResponse.error = true
            errorResponse.active = true
            console.log('returning error... ', errorResponse)
            return errorResponse
        }

		self.loading = true

        $http.post('api/makeUrlMini', { longUrl: thisUrl })
        	.success(function(response){
        		console.log('got success! ', response)
        		self.loading = false
        		self.results.unshift(response.data)
        		self.urlData.longUrl = ''
        		console.log('self results? ', self.results)
        		defer.resolve(self.results);
        	})
        	.error(function(err){
        		console.log('got error! ', err)
        		self.loading = false
        		self.results = []
        		defer.resolve(err)
        	})

		return defer.promise

	}

    return {
    	urlData: urlData,
    	isLoading: false,
    	hasError: false,
    	results: [],
    	get hasResults(){
    		if( this.results && this.results.length > 0){
    			return true
    		} else {
    			return false
    		}
    	},
    	makeUrlMini: makeUrlMini
    };

});