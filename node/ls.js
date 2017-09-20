var fs=require('fs');
var path = require('path');
var thumb = require('./thumb.js');
var SRC = '/home/data/pics/2017';
	//var SRC = './test';
var DST = '/var/www/html/static/';
	//var DST = '/home/thumb/';
function ls(ff)
{
	var files=fs.readdirSync(ff);
	for(fn in files)
	{
		var fname = ff+path.sep+files[fn];
	    var stat = fs.lstatSync(fname);
		if(stat.isDirectory() == true)
		{
			ls(fname);
		}
		else
		{
			if(/\.jpg|\.JPG/.test(fname)){
				console.log(fname);
				//缩略图
				thumb(fname, DST + 'thumb/', 320, 320, '_thumb');
				//正常图
				thumb(fname, DST + 'images/', 1024, 1024, '_normal');
			}
			
		}
	}
}

ls(SRC)
