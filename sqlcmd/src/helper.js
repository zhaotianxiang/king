'use strict'

const mysql = require('mysql');

class DBHelper {
	constructor(user, password, host, db) {
		this.user = user;
		this.host = host;
		this.password = password;

		this.conn = mysql.createConnection({
			host: host,
			user: user,
			password: password,
			database: db
		});
		this.sql = '';
	}

	execute(query, callback) {
		this.conn.query(query, callback);
	}

	end() {
		if (this.conn) {
			this.conn.end();
		}
	}
}

module.exports = DBHelper;