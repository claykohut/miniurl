'use strict';

var mongoose = require('mongoose')
var validator = require('validator');

var MiniUrl = mongoose.model('MiniUrl')

exports.makeUrlMini = function(req, res){

	  if( ! req.body || ! req.body.longUrl ){
	  	res.status(300).send({ error: 'Please send url to shorten!', code: 'no_url' })
	  	return false
	  }

    if( ! validator.isURL(req.body.longUrl) ){
      res.status(300).send({ error: 'Please enter a valid url like google.com or http://reddit.com', code: 'invalid_url' })
      return false
    }

	  var newUrl = new MiniUrl({ 
        longUrl: req.body.longUrl
      })

      newUrl.save(function(err, thisUrlData ){
        console.log('responnse from save url? ', thisUrlData)
        
        if( err || ! thisUrlData ){
          res.status(300).send({ error: 'error saving url!', code: 'error_saving' })
        	return false
        }

        res.send({success: true, data: thisUrlData})

      })

}

exports.lookupShortCode = function(req, res){
  console.log('short code lookup! ', req.query , ' code: ', req.query.shortcode  )
  
  MiniUrl.findOneAndUpdate({
    shortCode: req.query.shortcode
  },
  {
    $inc: { redirects: 1 }
  })
  .exec(function(err, data){
    console.log("err ", err, ' data ', data )
    if( err || ! data ){
      res.send({ error: true, code: 'invalid_shortcode', message: 'code not found!'})
      return false
    }
    res.send({success: true, url: data.longUrl })
  })

  
}

exports.getAllUrls = function(req, res){
  MiniUrl.find({})
    .exec(function(err, data){
      if( err || ! data || data.length == 0 ){
        res.status(300).send({ error: 'no urls found!', code: 'no_urls' })
        return false
      }
      res.send({success: true, data: data })
    })
}
