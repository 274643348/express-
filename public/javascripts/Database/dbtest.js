var db = require('./mysql.js');


//////////////////////////////////////////查询
// var sql = 'SELECT *  from aa';
// db.query(sql, function (err, rows, fields) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(rows);
//   //RowDataPacket对象转为json字符串；
//   let rowsStr = JSON.stringify(rows);
//   console.log(rowsStr);
//   let rowJson = JSON.parse(rowsStr);
//   console.log(rowJson);
//   console.log('用户数量 : ' + rowJson[0].userid);
// });


//////////////////////////////////////////插入
// var sql = 'insert into aa(Count,sex) value (33,0)';
// db.query(sql, function (err, rows, fields) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(rows);
// });

//////////////////////////////////////////删除u
// var sql = 'delete from aa where count = 33';
// db.query(sql, function (err, rows, fields) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(rows);
// });

//////////////////////////////////////////更新u
// var sql = 'update  aa set count = 888, sex = 1 where userid<10';
// db.query(sql, function (err, rows, fields) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(rows);
// });