var fs=require('fs');
var path = require('path');



//用同步的方法
module.exports = {

	getList : function(folder){
		var file_arr = [];
		ls(folder, file_arr);
		return file_arr;
	},

	getSubFolerList: function(folder){ //获取当前目录下的二级目录

		var files = fs.readdirSync(folder);
		var folderlist = [];
		for(fn in files)
		{
			var fname = path.join(folder,files[fn]);
			var stat = fs.lstatSync(fname);
			if(stat.isDirectory() == true)
			{
				// console.log('fname:', fname);
				// console.log('folder:', folder);
				//只保留最后一层目录
				folderlist.push(fname.replace(folder, ''));
			}
		}
		return folderlist;
	}
}

function ls(ff, arr)
{
	var files=fs.readdirSync(ff);
	for(fn in files)
	{
		var fname = ff+path.sep+files[fn];
	    var stat = fs.lstatSync(fname);
		if(stat.isDirectory() == true)
		{
			ls(fname, arr);
		}
		else
		{
			if(/\.jpg|\.JPG/.test(fname)){
				//保存文件路径
				arr.push(fname);
			}
			
		}
	}
}

