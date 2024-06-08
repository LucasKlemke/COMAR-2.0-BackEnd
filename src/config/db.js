import mysql from "mysql2";
import "dotenv/config";

const dbConfig = {
  //localhost
  host: process.env.HOST,
  database: process.env.DATABASE,
  //root
  user: process.env.USER_DB,
};

const db = mysql.createConnection(dbConfig);

export default db;
