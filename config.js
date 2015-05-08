// MySQL数据库连接配置
var mysql = require('mysql');
exports.db = mysql.createConnection({
  host:            '127.0.0.1',   // 数据库地址
  port:            3306,          // 数据库端口
  database:        'mydb',   // 数据库名称
  user:            'root',        // 数据库用户
  password:        'root'             // 数据库用户对应的密码
});

//Mongodb数据库连接配置
var mongoose = require('mongoose');
exports.mondb = mongoose.connect('mongodb://127.0.0.1:27017/mydb1');

// 博客配置
exports.sinaBlog = {
  //url: 'http://blog.sina.com.cn/u/1776757314'  // 博客首页地址
  url: 'http://blog.sina.com.cn/toto111111'
};

// Web服务器端口
exports.port = 3000;

// 定时更新
exports.autoUpdate = '* */1 * * *';  // 任务执行规则，参考 cron 语法
