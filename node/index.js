
//用于上传文件并以hash为文件名,保存到/home/data/pics/2017/

"use strict"
let express = require('express');
let api = require('./modules/api.js');
var config = {
	port: 8081
	//port:80
};

var app = express();
//静态文件
app.use( '/web', express.static('web/'));

//加日志
app.use(function(req,res,next){
	let d = new Date();
	console.log("%s-%s-%s %s:%s:%s", d.getFullYear(), d.getMonth()+1, d.getDay(),
	 d.getHours(),d.getMinutes(),d.getSeconds(), req.ip);
	next();
});

//路由
app.post('/uploadImg', api.uploadImg);
app.get('/test', api.test);
app.get('/getGallery', api.test);

app.listen(process.env.PORT || config.port, function (req, res) {

	console.log('port:'+process.env.PORT);
	console.log('start');
	//console.log(process.env);
});
