'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var miniUrlSchema  = new Schema({
	longUrl: { type: String, default: '' },
	shortUrl: { type: String, default: '' }
 });

module.exports = mongoose.model('MiniUrl', miniUrlSchema );  