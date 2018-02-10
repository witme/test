var fs = require('fs');
var gm = require('gm');
var path = require('path');
var CONST = require("../../modules/const");
var SRC =  CONST.source;
//use imageMagick
var im = gm.subClass({ imageMagick: true });

function getDestFoler(srcFile, dstPath){
	var file = srcFile.replace(SRC, ''); //移除根路径
	//移除文件名
	var fileArr = srcFile.split('\/');
	var fileName = fileArr[fileArr.length -1];
	file = file.replace(fileName, '');

	var folder = path.join(dstPath, file);

	if( !fs.existsSync( folder)){
		console.warn("create: ",folder);
		fs.mkdirSync(folder);
	}

	return folder;

}
//srcFile路径+文件名, dstPath只需路径
function thumb(srcFile, dstPath, size_x, size_y, ext){
	console.log('begin: ', srcFile);
	var fileArr = srcFile.split('\/');
	var fileName = fileArr[fileArr.length -1];
	var	JpgfileName = fileName.substring(0,fileName.length -4) + ext + '.jpg';
	var dstFoler = getDestFoler(srcFile, dstPath);
	var newFile = path.join(dstFoler , JpgfileName);
	im(srcFile) //此处该用im而不是gm了！！！
	.autoOrient()
	.resize(size_x, size_y) //160x160, x2倍屏幕
	.write(newFile, function (err) {
 		 if (!err) console.log('done: ', newFile);
		 if (err) console.log(err, srcFile, newFile);
	});

}


module.exports = thumb;