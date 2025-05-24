const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'appuser',
  password: 'strongpassword',
  database: 'myappdb'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    throw err;
  }
  console.log('✅ Connected to MySQL Database');
});

module.exports = db;
