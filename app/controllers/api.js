'use strict';

var mongoose = require('mongoose')

var MiniUrl = mongoose.model('MiniUrl')

exports.makeUrlMini = function(req, res){

	  if( ! req.body || ! req.body.longUrl ){
	  	res.send({error: true, code: 'no_url', message: 'Please send url to shorten!'})
	  	return false
	  }

	  var newUrl = new MiniUrl({ 
        longUrl: req.body.longUrl
      })

      newUrl.save(function(err, thisUrlData ){
        console.log('responnse from save url? ', thisUrlData)
        
        if( err || ! thisUrlData ){
        	res.send({ error: true, code: 'error_saving', message: 'error saving url!'})
        	return false
        }

        res.send({success: true, data: thisUrlData})

      })

}