
//压缩图片,生成thumb, images二个目录
var fs=require('fs');
var path = require('path');
var fl = require("./modules/photo-info/file-list");
var thumb = require("./modules/photo-thumb/thumb");

//var SRC = '/Users/wit.luo/Pictures/photo/';
var SRC =  require("path").join(__dirname , '../photo/');
var DST = require("path").join( SRC , './thumb/');

console.log(SRC);
console.log(DST);
var filelist = fl.getList(SRC);

filelist.map( path=>{
		//缩略图
		thumb(path, SRC + 'thumb/', 320, 320, '_thumb');
		//正常图
		thumb(path, SRC + 'images/', 1024, 1024, '_normal');
});



