import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql4@11",
    database: "bd_agenda",
});