'use strict';

var mongoose = require('mongoose')

var MiniUrl = mongoose.model('MiniUrl')

exports.makeUrlMini = function(req, res){

	console.log('longUrl ', req.body.longUrl)

	res.send({success: true})
}