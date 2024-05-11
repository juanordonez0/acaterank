import mysql from 'mysql2/promise';

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  password: 'jordonez',
  user: 'root',
  database: 'test',
  port: 3306
});