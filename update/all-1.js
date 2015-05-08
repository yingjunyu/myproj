var async = require('async');
var config = require('../config');
var read = require('./read');
var save = require('./save');
var debug = require('debug')('blog:update:all');

var articleList = {};

read.articleList(config.sinaBlog.url, function(err, list){
  	articleList = list;
  	var bloginfoa = [];
  	async.eachSeries(articleList, function(c, next){
  		var bloginfo = {
  			url: c.url,
  			name: c.name
  		}
  		bloginfoa.push(bloginfo);
  		next();
	});

	for(var i=0;i<bloginfoa.length;i++){
		//console.log(bloginfoa[i].url + ' ' + bloginfoa[i].name);
    var doc = {url : bloginfoa[i].url, name : bloginfoa[i].name};
		save.mongoinsert(doc);
	}
});

