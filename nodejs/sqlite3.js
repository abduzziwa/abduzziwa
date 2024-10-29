// import betterSqlite3 from "better-sqlite3";
const betterSqlite3 = require("better-sqlite3");

const db = betterSqlite3("C:\\Users\\Gebruiker\\Desktop\\db\\intro.db");
command = "SELECT * FROM intro";
// const db = betterSqlite3("test.db");
// db.prepare(
//   "CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT)"
// ).run();

// db.insert = db.prepare("INSERT INTO test (name) VALUES (?)");
// db.insert.run("foo");

// command = "SELECT * FROM test";
// const rows = db.prepare(command).all();
// console.log(rows);
