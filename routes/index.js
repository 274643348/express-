let express = require('express');
var db = require('../public/javascripts/Database/mysql.js');
let router = express.Router();

let ejs = require('ejs');
let unit = require('../public/javascripts/unit');
let path = require("path");

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("------------" + req.url);
  console.log("------------" + __dirname);

  let dir = path.dirname(__dirname);
  console.log("------------" + dir);
  let normalDir = path.normalize(dir);
  console.log("------------" + normalDir);


  unit.readFile(path.dirname(__dirname) + '/views/h.ejs', async date => {
    //获取数据库数据
    getDatabaseDate((jsondate) => {
      //将数据绑定到ejs中
      let html = ejs.render(date.toString(), jsondate);
      res.writeHead(200, { 'Conten-Type': 'text/html:charset=UTF-8' });
      res.end(html);
    });


  });
});


async function getDatabaseDate(callback) {
  var sql = 'SELECT count as name  from aa';
  db.query(sql, function (err, rows, fields) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(rows);
    //RowDataPacket对象转为json字符串；
    let rowsStr = JSON.stringify(rows);
    console.log(rowsStr);
    let rowJson = JSON.parse(rowsStr);
    console.log(rowJson);

    json = { 'user': rowJson };
    console.log(json);
    callback(json);

  });
}
module.exports = router;
