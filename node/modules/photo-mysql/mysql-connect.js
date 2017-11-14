var mysql      = require('mysql');
var mysqlClient = {};
var connection = null;

mysqlClient.init = function(){
  //记录执行次数
  this.size = 0;
  if(connection == null){
    connection = mysql.createConnection({
      host     : '106.15.202.241',
      user     : 'root',
      password : '654321',
      database : 'baby'
    });

    connection.connect();
  }
};

mysqlClient.close = function(str){
  connection.end();
};

mysqlClient.insert = function(obj){

  //先转成字串,外层为单引号,内层双引号
  //首元素需要加单引号,尾部若为字串也须加
  var obj_str = "'" + [
    obj.path,
    obj.hash,
    obj.model || "",
    obj.size,
    obj.ISO || 0,
    obj.gps || "",

  ].join("','")
   + '\',str_to_date("' + (obj.CreateDate || "1970:01:01 00:00:01") + ' ", "%Y:%m:%d %H:%i:%s")';
  

  //console.log(".........",obj_str);
  
  var sql_str = "insert into baby_photo_info(" +
      "fileName," +
      "hashId," + 
      "model," +   
      "size," +
      "ISO," +
      "gps," +
      //"updateDate," +
      "CreateDate" +
  ") values("
    
    + obj_str
    
  +");";

  console.log( sql_str);

  connection.query( sql_str, function (error, results, fields) {
    //console.log(error);
    if (error) {
      console.log("sql 写入错误");
      return;
    }
    console.log('ok ', mysqlClient.size);
    mysqlClient.size++;
  });

}

module.exports = mysqlClient;