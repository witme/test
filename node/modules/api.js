let formidable = require("formidable"); //载入 formidable
let fs = require('fs');
var api = {};
//var file = {};

let _FOLDER = (new Date()).getFullYear() + '/';
let DEST_FOLDER = '/home/data/pics/' + _FOLDER;
let TMP_FOLDER = './tmp/';
function uploadImg(req, res) {
	var form = new formidable.IncomingForm();   //创建上传表单
  form.encoding = 'utf-8';
  form.uploadDir = TMP_FOLDER;    //设置临时上传目录
  form.keepExtensions = true;     //保留后缀
  form.maxFieldsSize = 10 * 1024 * 1024;   //文件大小
	form.hash = 'md5'; //校验

  form.parse(req, function(err, fields, files) {

    if (err) {
      res.locals.error = err;
      //res.render('index', { title: TITLE });
			res.status(500).send('上传失败');
      return;
    }


    var extName = '';  //后缀名
		let pic = files.upload; //upload为表单中图片字段名
		console.log("uploadfile %s: %s", (new Date).getTime(), pic.path);

    switch ( pic.type) {
      case 'image/pjpeg':
        extName = 'jpg';
        break;
      case 'image/jpeg':
        extName = 'jpg';
        break;
      case 'image/png':
        extName = 'png';
        break;
      case 'image/x-png':
        extName = 'png';
        break;
    }

    if(extName.length == 0){
      res.locals.error = '只支持png和jpg格式图片';
      //res.render('index', { title: TITLE });
			res.status(500).send('只支持png和jpg格式图片');
      return;
    }

		let newPath = DEST_FOLDER + (new Date()).getTime() + '.' + extName;
    fs.renameSync( pic.path, newPath);
		//res.send('done');
	});

	//不必实现此接口,xhr自带progress事件
	form.on('progress', function(bytesReceived, bytesExpected) {
		//console.log(bytesReceived);
	});

	form.on('end', function() {
		res.json({status:200, msg:'发送成功'});

	});
}

api.uploadImg = uploadImg;
api.test = function test(req,res,next) {
	res.send('req');
	next();

}
module.exports = api;
