'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'employee'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Conectado a la Base de Datos!");
});
module.exports = dbConn;