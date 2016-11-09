'use strict';

exports.render = function(req, res) {
    res.sendFile(__dirname + "/views/index.html"); 
};
