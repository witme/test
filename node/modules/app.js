//
//
var express = require('express');
var router = express.Router();
//var form = require('./app.form.js');

exports.create = function(){
	var app = express();
	//静态html
	//排行榜测试
	app.use('/pages', express.static('../rank/tmp/vips-rank/vips-rank-web/src/main/webapp/pages/'));
	app.use('/static', express.static('../study/vue/myvue/dist/static/'));
	//
	app.use('/', express.static('../'));
	app.use('/react', express.static('../study/react/ReactDemo'));
	app.use('/study', express.static('../study'));
	app.use('/proj', express.static('../proj'));
	//图片地址
	app.use('/uploadDir', express.static('uploadDir'));
	//图片对外存储,img为挂载点,上一级目录
	app.use('/img', express.static('../img'));
	//接口
	app.use('/api', router);

	router.use(function(req, res, next){
		console.log('time');
		next();
	});

	/* 图片上传api */
	app.post('/upload', function(req, res) {
	  console.log('upload incoming.');
	  //form.create(req,res);

	});

	return app;

};
