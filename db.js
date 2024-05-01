"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///jobly_test";
} else if (process.env.DATABASE_URL) {
  DB_URI = process.env.DATABASE_URL
} else {
  DB_URI = "postgresqll:///jobly";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;