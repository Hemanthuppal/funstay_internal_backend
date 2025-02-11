const mysql = require('mysql2');


// const db = mysql.createConnection({
//   host: 'localhost', // Your database host
//   user: 'nodeuser', // Your database user
//   password: 'Root@1234', // Your database password
//   database: 'funstay_db', // Your database name
// });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your DB password
  database: 'funstay', // Replace with your DB name
});

db.promise()
  .connect()
  .then(() => console.log('Connected to MySQL database'))
  .catch((err) => console.error('Database connection error: ', err.message));

module.exports = db;
