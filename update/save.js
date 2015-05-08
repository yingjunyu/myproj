var async = require('async');
var db = require('../config').db;
var mdb = require('../config').mondb;
var mblog = require('../mblog.js');
var debug = require('debug')('blog:update:save');

/**
 * 向mysql中插入数据
 *
 */
exports.mysqlinsert = function (list, callback) {
	//console.log('insert into bloginfo(url, name) values(' + '\'' + list.url + '\',\'' + list.name + '\')');
  db.query('insert into bloginfo(url, name) values(' + '\'' + list.url + '\',\'' + list.name + '\')', function (err, data) {
    if (err) return next(err);
  });
};

/**
 * 向mongdb插入数据
 *
 */
exports.mongoinsert = function(list, callback){
  var doc = new mblog(list);
  doc.save(function(err){
    if(err){
      console.log(err);
    }else{
      console.log(list);
    } 
  });
};



