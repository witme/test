// import { setInterval } from 'timers';

//压缩图片,生成thumb, images二个目录
var fs=require('fs');
var fl = require("./modules/photo-info/file-list");
var thumb = require("./modules/photo-thumb/thumb");
var CONST = require("./modules/const");
var SRC =  CONST.source;
//var DST = require("path").join( SRC , './thumb/');

console.log(SRC);
//console.log(DST);
var filelist = fl.getList(SRC);
console.log(filelist);

//控制一下调用频率
let g_idx = 0;
function getFile(idx){
	if(idx > filelist.length -1){
		return "";
	}
	return filelist[idx];
}
let timer = setInterval(function(){

	let file = getFile(g_idx);
	if( !file){
		clearInterval(timer);
		return;
	}
	//缩略图
	thumb(file, CONST.thumb, 320, 320, '_thumb');
	//正常图
	thumb(file, CONST.images, 1024, 1024, '_normal');
	g_idx++;

}, 2000);


