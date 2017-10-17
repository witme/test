var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '106.15.202.241',
  user     : 'root',
  password : '654321',
  database : 'boot'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();