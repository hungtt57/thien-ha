/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /universal              ->  index
 */

'use strict';

// Gets a list of newest 5 posts
exports.index = function(req, res) {
	var request = require('request');
	var config = require('../../config/environment');
		//id 55f14b3cb4fce9a378cf656b
	// link api http://gmo.kaitech.io/api/sites/
	var apiUrl = config.apiUrl + '/api/sites/' + config.siteId;
	var utm_campaign = 'trangchu';

	if(req.query.utm_campaign){
		utm_campaign = req.query.utm_campaign;
	} 
	var pathName = '&c='+utm_campaign;

	request(apiUrl, function (error, response, body) {
		var siteInfo = JSON.parse(body);
		var releasedVersion = siteInfo.released_version.toLowerCase();
	    if(releasedVersion !== 'official') {
	        return res.redirect('/teaser');
	    }
	    if (!siteInfo.links) {
        	return res.redirect('/');
      	}

      	var MobileDetect = require('mobile-detect'),
    	md = new MobileDetect(req.headers['user-agent']);

    	if (md.os() == "iOS" && siteInfo.links.ios) {
    		console.log(siteInfo.links.ios+pathName);
        	return res.redirect(siteInfo.links.ios+pathName);
      	}

      	if (siteInfo.links.android) {
      		console.log(siteInfo.links.android+pathName);
        	return res.redirect(siteInfo.links.android+pathName);
      	}

      	return res.redirect('/');
	});
}