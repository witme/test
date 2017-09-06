let formidable = require("formidable"); //载入 formidable
let fs = require('fs');
var api = {};
//var file = {};

let _FOLDER = (new Date()).getFullYear() + '/';
let DEST_FOLDER = '/home/data/pics/' + _FOLDER;
let TMP_FOLDER = './tmp/';


/* 文件结构
*  size: 6111,
    path: 'tmp\\upload_ec6c22aff64813002dd8f50449791740.png',
    name: '750x360.png',
    type: 'image/png',
    hash: '569ca8588ebed64b55d89fa0b2ac0fc6',
*/
var FILE = {
	//临时目录中的全路径名
	getFullName: function(file) {
		//return '/home/app/' + file[1].path; //须加.,此处为相对路径
		return file[1].path; //须加.,此处为相对路径
	},
	//原始文件名,带扩展名
	getFileName: function(file) {
		let fileName = file[1].name;
		return fileName;
	},
	//
	getTmpName: function(file) {
		//此处需要改正,linux下为左斜杠;win下为右斜杠
		//let fileName = file[1].path.split('\\');
		//return fileName[fileName.length -1];
		return file[1].path.slice(4); //移除tmp/或tmp\\
		//使用hash name容易重名
		//return file[1].hash + '.png';
	},
	getExtName: function(file) {
		let fileTypes = file[1].name.split('.');
		let fileExtName = fileTypes[fileTypes.length -1]; //取.的最后一段
		return fileExtName;
	}
}

function uploadImg(req, res) {
	var form = new formidable.IncomingForm({
			encoding : 'utf-8',
		  uploadDir : TMP_FOLDER,    //设置临时上传目录
		  keepExtensions : true,     //保留后缀
		  maxFieldsSize : 10 * 1024 * 1024,   //文件大小
			hash : 'md5', //校验
	});   //创建上传表单


	var recvFileList = [];
  form.on('file', function (filed, file) {
      recvFileList.push([filed, file]); //收集传过来的所有文件
   })

	form.parse(req, function(err, fields, files) {

    if (err) {
      res.locals.error = err;
      //res.render('index', { title: TITLE });
			res.status(500).send('上传失败');
      return;
    }
		console.log('本地上传:%s张图', recvFileList.length);
		recvFileList.forEach(function(file, idx) {
					let fileFullName = FILE.getFullName(file); //原全路径
					let tmpName = FILE.getTmpName(file); //原文件名,带扩展名
					//let fileExtName = FILE.getExtName(file); //原扩展名
					let newPath = DEST_FOLDER + tmpName;

					//console.log("fileFullName %s\t, fileName %\t, newPath %s\r\n", fileFullName, tmpName, newPath);
console.log(fileFullName, newPath);
          fs.renameSync(fileFullName, newPath);
		});


		function checkExt(file) {
			var extName = getExtName(file);  //后缀名
			if(!/\.(jpg|png|bmp|jpeg|gif)$/.test( extName.toLocaleLowerCase())){
				res.locals.error = '只支持png和jpg格式图片';
				res.status(500).send('只支持png和jpg格式图片');
	      return;
			}
		}

	});

	//不必实现此接口,xhr自带progress事件
	form.on('progress', function(bytesReceived, bytesExpected) {
		//console.log(bytesReceived);
	});

	form.on('end', function() {
		res.json({status:200, msg:'发送成功'});
	});
}


api.test = function test(req,res,next) {
	res.send('req');
	next();
}

api.uploadImg = uploadImg;
module.exports = api;
