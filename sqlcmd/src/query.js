'use strict'

const DB = require('./helper');
let db = new DB('root', 'aini1314@xiaoqing', 'tianzhaoruixiang', 'king'); 
let username = '天昭瑞祥'
const sql = `select password from user where name='${username}'`

db.execute(sql, callback);

function callback(error, results, fields){
	if(error){
		console.log(error);
		db.end();
	}
	console.log(results[0].password);
}

db.end();
