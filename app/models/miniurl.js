'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    shortid = require('shortid');

var miniUrlSchema  = new Schema({
	longUrl: { type: String, default: '' },
	shortId: {
	    type: String,
	    'default': shortid.generate
	}
 });

module.exports = mongoose.model('MiniUrl', miniUrlSchema );  