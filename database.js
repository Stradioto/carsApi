const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'covid19',
  database: 'carsdb'
});
module.exports = connection;