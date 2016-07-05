/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/news/rss              ->  rss
 */

 'use strict';

// Gets a list of newest 5 posts
exports.rss =  function(req, res) {
	var request = require('request');
	var config = require('../../config/environment');

	var apiUrl = config.apiUrl + '/api/posts/';
	// get all 5 post lastest category
	var categoryId = '';
	if(req.params.category != 'all'){
		switch(req.params.category) {
			case 'new':
			categoryId = config.newsCategoryId;
			break;
			case 'event':
			categoryId = config.eventsCategoryId;
			break;
			case 'guide':
			categoryId = config.guideCategoryId;
			break;
			default:
			categoryId = config.newsCategoryId;
		}
		var params = {
			site: config.siteId,
			category: categoryId,
			active: true,
			limit: 5,
			sort: '-publish'
		};

		request({url:apiUrl, qs:params}, function (error, response, body) {
			if(error){
				console.log(error);
			}
			var Feed = require('./feed');
			var feed = new Feed({
				title:       'Thiên Hạ | Siêu phẩm ARPG',
				description: 'Thiên Hạ là siêu phẩm ARPG thế hệ mới do Garena phát hành tại Việt Nam.',
				link:        config.baseUrl,
				copyright:   'garena.vn',
				updated:     Date.now()
			});

			if (!error || response.statusCode == 200) {
				var posts = JSON.parse(body);
				posts.forEach(function(post) {
					feed.addItem({
						'title': post.title,
						'link': config.baseUrl + '/post/' + post.slug,
						'guid': config.baseUrl + '/post/' + post.slug,
						'description': post.brief,
						'date': new Date(post.publish)
					});
				});
			}

			var xmlString = feed.render('rss-2.0');

			return res.set('Content-Type', 'text/xml').send(xmlString);
		});



	} // end get all 5 post lastest category
	else{
		console.log('-------get ALL lastest post-------');
		
		//get 5 post lastes in tin-tuc
		var param1 = {
			site: config.siteId,
			category: config.newsCategoryId,
			active: true,
			limit: 5,
			sort: '-publish'
		};
		
		request({url:apiUrl, qs:param1}, function (error, response, body) {
			var posts = [];

			var Feed = require('./feed');
			var feed = new Feed({
				title:       'Thiên Hạ | Siêu phẩm ARPG',
				description: 'Thiên Hạ là siêu phẩm ARPG thế hệ mới do Garena phát hành tại Việt Nam.',
				link:        config.baseUrl,
				copyright:   'garena.vn',
				updated:     Date.now()
			});
			if(error){
				console.log(error);
			}
			
			if (!error || response.statusCode == 200) {
				var news = JSON.parse(body);
				news.forEach(function(tintuc) {
					posts.push({
						'title': tintuc.title,
						'link': config.baseUrl + '/post/' + tintuc.slug,
						'guid': config.baseUrl + '/post/' + tintuc.slug,
						'description': tintuc.brief,
						'date': new Date(tintuc.publish)
					});

				});



				var param2 = {
					site: config.siteId,
					category: config.eventsCategoryId,
					active: true,
					limit: 5,
					sort: '-publish'
				};
				request({url:apiUrl,qs:param2},function(error,response,body){
					if(error){
						console.log(error);
					}
					
					if (!error || response.statusCode == 200) {
						var news = JSON.parse(body);
						news.forEach(function(tintuc) {
							posts.push({
								'title': tintuc.title,
								'link': config.baseUrl + '/post/' + tintuc.slug,
								'guid': config.baseUrl + '/post/' + tintuc.slug,
								'description': tintuc.brief,
								'date': new Date(tintuc.publish)
							});

						});

						var param3 = {
							site: config.siteId,
							category: config.guideCategoryId,
							active: true,
							limit: 5,
							sort: '-publish'
						};

						request({url:apiUrl,qs:param3},function(error,response,body){
							
							
							if (!error || response.statusCode == 200) {
								var news = JSON.parse(body);
								news.forEach(function(tintuc) {
									posts.push({
										'title': tintuc.title,
										'link': config.baseUrl + '/post/' + tintuc.slug,
										'guid': config.baseUrl + '/post/' + tintuc.slug,
										'description': tintuc.brief,
										'date': new Date(tintuc.publish)
									});

								});
							}
							posts.sort(function(a,b){
								var c = a.date;
								var d = b.date;
								return c>d ? -1 : c<d ? 1 : 0;
							})
							for(var i=0;i<5;i++){
								feed.addItem({
									'title': posts[i].title,
									'link': posts[i].link,
									'guid': posts[i].guide,
									'description': posts[i].description,
									'date': posts[i].date
								});

							}

							var xmlString = feed.render('rss-2.0');

							return res.set('Content-Type', 'text/xml').send(xmlString);

						});//end request 3

					}
				});//end request 2

			} 






		}); //end request1
		
	} //end if else

} //end function rss





//rss all 5 lastest post use async

// exports.async = function (req,res){
// 	var async = require('async');
// 	var request = require('request');
// 	var config = require('../../config/environment');
// 	var apiUrl = config.apiUrl + '/api/posts/';


// 	async.waterfall([
// 		function(callback){
// 			var params = {
// 				site: config.siteId,
// 				category: config.newsCategoryId,
// 				active: true,
// 				limit: 5,
// 				sort: '-publish'
// 			};
// 			var rss=[];
// 			request({url:apiUrl, qs:params}, function (error, response, body) {
// 				if(error){
// 					console.log(error);
// 				}
// 				var Feed = require('./feed');
// 				var feed = new Feed({
// 					title:       'Thiên Hạ | Siêu phẩm ARPG',
// 					description: 'Thiên Hạ là siêu phẩm ARPG thế hệ mới do Garena phát hành tại Việt Nam.',
// 					link:        config.baseUrl,
// 					copyright:   'garena.vn',
// 					updated:     Date.now()
// 				});

// 				if (!error || response.statusCode == 200) {
// 					var posts = JSON.parse(body);
// 					posts.forEach(function(post) {
// 						rss.push({
// 							'title': post.title,
// 							'link': config.baseUrl + '/post/' + post.slug,
// 							'guid': config.baseUrl + '/post/' + post.slug,
// 							'description': post.brief,
// 							'date': new Date(post.publish)
// 						});
// 					});
// 					callback(null,rss);
// 				}


// 			});

// 		},
// 		function(rss,callback){

// 			var params = {
// 				site: config.siteId,
// 				category: config.eventsCategoryId,
// 				active: true,
// 				limit: 5,
// 				sort: '-publish'
// 			};
// 			request({url:apiUrl, qs:params}, function (error, response, body) {
// 				if(error){
// 					console.log(error);
// 				}
// 				var Feed = require('./feed');
// 				var feed = new Feed({
// 					title:       'Thiên Hạ | Siêu phẩm ARPG',
// 					description: 'Thiên Hạ là siêu phẩm ARPG thế hệ mới do Garena phát hành tại Việt Nam.',
// 					link:        config.baseUrl,
// 					copyright:   'garena.vn',
// 					updated:     Date.now()
// 				});

// 				if (!error || response.statusCode == 200) {
// 					var posts = JSON.parse(body);
// 					posts.forEach(function(post) {
// 						rss.push({
// 							'title': post.title,
// 							'link': config.baseUrl + '/post/' + post.slug,
// 							'guid': config.baseUrl + '/post/' + post.slug,
// 							'description': post.brief,
// 							'date': new Date(post.publish)
// 						});
// 					});
// 					callback(null,rss);
// 				}


// 			});



// 		},
// 		function(rss,callback){
// 			var params = {
// 				site: config.siteId,
// 				category: config.guideCategoryId,
// 				active: true,
// 				limit: 5,
// 				sort: '-publish'
// 			};
// 			request({url:apiUrl, qs:params}, function (error, response, body) {
// 				if(error){
// 					console.log(error);
// 				}
// 				var Feed = require('./feed');
// 				var feed = new Feed({
// 					title:       'Thiên Hạ | Siêu phẩm ARPG',
// 					description: 'Thiên Hạ là siêu phẩm ARPG thế hệ mới do Garena phát hành tại Việt Nam.',
// 					link:        config.baseUrl,
// 					copyright:   'garena.vn',
// 					updated:     Date.now()
// 				});

// 				if (!error || response.statusCode == 200) {
// 					var posts = JSON.parse(body);
// 					posts.forEach(function(post) {
// 						rss.push({
// 							'title': post.title,
// 							'link': config.baseUrl + '/post/' + post.slug,
// 							'guid': config.baseUrl + '/post/' + post.slug,
// 							'description': post.brief,
// 							'date': new Date(post.publish)
// 						});
// 					});
// 					callback(null,rss);
// 				}


// 			});

// 		}


// 		],function(error,posts){
// 				var Feed = require('./feed');
// 				var feed = new Feed({
// 					title:       'Thiên Hạ | Siêu phẩm ARPG',
// 					description: 'Thiên Hạ là siêu phẩm ARPG thế hệ mới do Garena phát hành tại Việt Nam.',
// 					link:        config.baseUrl,
// 					copyright:   'garena.vn',
// 					updated:     Date.now()
// 				});
// 			posts.sort(function(a,b){
// 				var c = a.date;
// 				var d = b.date;
// 				return c>d ? -1 : c<d ? 1 : 0;
// 			})
// 			for(var i=0;i<5;i++){
// 				feed.addItem({
// 					'title': posts[i].title,
// 					'link': posts[i].link,
// 					'guid': posts[i].guide,
// 					'description': posts[i].description,
// 					'date': posts[i].date
// 				});

// 			}

// 			var xmlString = feed.render('rss-2.0');

// 			return res.set('Content-Type', 'text/xml').send(xmlString);
// 		});
// }