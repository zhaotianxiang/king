const express = require('express');
const db = require('../db/mysql.js');
const getRouter = express.Router();
const postRouter = express.Router();
/* 渲染登录页面 */
getRouter.get('/login', function(req, res, next) {
	res.render('login', {
		flag: 0
	});
});

/* 处理登录请求 */
postRouter.post('/login', function(req, res) {
	// login process
	let self = this;
	const username = res.body.username;
	const password = res.body.password;
	const sql = `select password from user where name='${username}'`
	db.execute(sql, (error, results, fields) => {
		if (error) {
			console.log(error);
			db.end();
		}
		if (password == results[0].password) {
			res.cookie('authorized', req.body.username);
			res.redirect('/admin');
		} else {
			res.render('login', {
				flag: 1
			});
		}
		console.log(results);
	});
	if (db) {
		db.end();
	}
});

exports.get = getRouter;
exports.post = postRouter;