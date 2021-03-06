var async = require('async');

module.exports = function(app) {

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

    var api = require('../app/controllers/api');

    app.post('/api/makeUrlMini', api.makeUrlMini);

    app.get('/api/lookupShortCode', api.lookupShortCode);

    app.get('/api/getAllUrls', api.getAllUrls);

};