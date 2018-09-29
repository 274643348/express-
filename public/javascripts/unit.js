let fs = require("fs");
/**
 * 
 * @param {*} url 
 * @param {*} callback 
 */
exports.readFile =  function readFile(url,callback)
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