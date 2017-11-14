var fs = require('fs');
var gm = require('gm');

//use imageMagick
var im = gm.subClass({ imageMagick: true });

//srcFile路径+文件名, dstPath只需路径
function thumb(srcFile, dstPath, size_x, size_y, ext){
	var fileArr = srcFile.split('\/');
	var fileName = fileArr[fileArr.length -1];
	var newFile = dstPath + fileName.substring(0,fileName.length -4) 
				+ ext + '.jpg';
	im(srcFile) //此处该用im而不是gm了！！！
	.autoOrient()
	.resize(size_x, size_y) //160x160, x2倍屏幕
	.write(newFile, function (err) {
 		 if (!err) console.log('done');
		 if (err) console.log(err, srcFile, newFile);
	});

}


module.exports = thumb;