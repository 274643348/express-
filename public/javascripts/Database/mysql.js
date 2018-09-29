// var db    = {};
// var mysql = require('mysql');
// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'root',
//   password        : '123456',
//   database        : 'nodejs'
// });

// db.query = function(sql, callback){

// 	if (!sql) {
// 		callback();
// 		return;
// 	}
// 	pool.query(sql, function(err, rows, fields) {
// 	  if (err) {
// 	    console.log(err);
// 	    callback(err, null);
// 	    return;
// 	  };

// 	  callback(null, rows, fields);
// 	});
// }
// module.exports = db;

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ljy19931216',
  port: '3306',
  database: 'test1',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
