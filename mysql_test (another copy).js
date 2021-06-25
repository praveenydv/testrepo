'use strict';

const mysql = require('mysql');
var mySqlPool;
let config = {
    connectTimeout  : 10000,
    acquireTimeout  : 10000,
    timeout         : 10000,

	host: 'mysql-db',
    	port:3306,
	user: 'test_user',
    	password: 'test_user',
	connectionLimit: 10,
	multipleStatements: true
};

try{

const con = mysql.createConnection(config);
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM alert_rule;", function(err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
    });
  });
}
catch(err){
console.log(err);
}
// dbConnection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });




