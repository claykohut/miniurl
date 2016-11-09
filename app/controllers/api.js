'use strict';

exports.makeUrlMini = function(req, res){

	console.log('longUrl ', req.body.longUrl)

	res.send({success: true})
}