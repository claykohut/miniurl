'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    shortid = require('shortid');

var miniUrlSchema  = new Schema({
	longUrl: { type: String, default: '' },
	shortCode: {
	    type: String,
	    'default': shortid.generate
	},
	created: { type: Date, default: Date.now },
	redirects: { type: Number, default: 0 }
 });

module.exports = mongoose.model('MiniUrl', miniUrlSchema );  