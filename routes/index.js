var express = require('express');
var router = express.Router();
var fs = require('fs');
let ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.url);
  readEjsTostring( "./views/h.ejs",(date)=>{
    let html = ejs.render(date.toString(), { "user":[{name:"mingming"},{name:"mingming"},{name:"mingming"}] });
    res.writeHead(200,{"Conten-Type":"text/html:charset=UTF-8"});
    res.end(html);
  })
});


function readEjsTostring(url,callback)
{
  console.log(url);
  fs.readFile(url,(err,data)=>{
    if (!err) {
        callback(data);
    }else
    {
        console.log("************err");
    }
  });
}


module.exports = router;
