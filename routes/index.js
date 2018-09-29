let express = require('express');
let router = express.Router();

let ejs = require('ejs');
let unit = require('../public/javascripts/unit');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.url);
  unit.readFile('./views/h.ejs', date => {
    let html = ejs.render(date.toString(), {
      user: [{ name: 'mingming' }, { name: 'mingming' }, { name: 'mingming' }],
    });
    res.writeHead(200, { 'Conten-Type': 'text/html:charset=UTF-8' });
    res.end(html);
  });
});

module.exports = router;
