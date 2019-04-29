'use strict'

const DB = require('./helper');
let db = new DB('root', 'aini1314@xiaoqing', 'tianzhaoruixiang', 'king'); 

const sql = `insert into hero(name, profession, gender, price) values('王昭君','法师','女','6300')`

db.execute(sql, callback);

function callback(error, results, fields){
	if(error){
		console.log(error);
		db.end();
	}
	console.log(results);
}

db.end();
