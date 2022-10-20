// get the client
const mysql = require('mysql2'); // npm install mysql2

// create the connection to database
const connection = mysql.createConnection({
  host: '172.25.192.1',
  user: 'joe',
  password: 'black',
  database: 'opentutorials'
});

// simple query
connection.query(
  'SELECT * FROM `topic`',
  function(err, results, fields) {
    console.log(err);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

/* node mysql/mysql2.js 명령어로 실행 */
