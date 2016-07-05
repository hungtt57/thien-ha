'use strict';

var express = require('express');
var controller = require('./news.controller');

var router = express.Router();

router.get('/rss/:category', controller.rss);
// rss 5 post lastest use async
// router.get('/async',controller.async);  
module.exports = router;
