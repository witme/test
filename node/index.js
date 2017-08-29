var config = {
	//port: 6060
	port:80
};

var app = require('./app').create();
app.listen(process.env.PORT || config.port, function (req, res) {

	console.log('port:'+process.env.PORT);
	console.log('start');
	//console.log(process.env);
});




