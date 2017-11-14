
//扫描SRC目录,将文件信息存储到数据库中

var r = require("./modules/photo-info/wrap-exif-info.js");
var f = require("./modules/photo-info/file-list");
var sql = require("./modules/photo-mysql/mysql-connect");
var path_array = [];
//test
//var SRC = '/Users/wit.luo/Pictures/2017';
var SRC =  require("path").join(__dirname , '../photo');
console.log(SRC);
//getList为同步方法
path_array = f.getList(SRC);

sql.init();
//array -> json
//json_photo返回一个照片文件的信息
r.getExifJson(path_array, function(json_photo){
    console.log("-----start:",json_photo);
    try{
        sql.insert(json_photo);
    }catch(e){
        console.log("sql错误发生");
    }
    
    //console.log("---end");

});

setTimeout(function() {
    sql.close();
}, 10*60*1000);




