var fs=require('fs');
var path = require('path');

var file_arr = [];

//用同步的方法
module.exports = {

	getList : function(folder){
		ls(folder);
		return file_arr;
	}
}

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
				//保存文件路径
				file_arr.push(fname);
				
			}
			
		}
	}
}

