import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config()

// Create the connection pool. The pool-specific settings are the defaults
export const pool = mysql.createPool({
  host: process.env.HOST || 'localhost',
  password: process.env.PASSWORD || 'jordonez',
  user: process.env.USER || 'root',
  database: process.env.DATABASE || 'test',
  port: process.env.MYSQLPORT || 3306
});

