var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '106.15.202.241',
  user     : 'root',
  password : '654321',
  database : 'baby'
});

connection.connect();

connection.query('SELECT hashId from baby_photo_info;', function (error, results, fields) {
    //console.log(error);
    if (error) throw error;
    console.log('The result is: ', results);
});

connection.end();