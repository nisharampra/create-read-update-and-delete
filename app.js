const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql2to");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static files
app.use(express.static('public'));

// // template engine
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine('hbs', handlebars.engine);
app.set("view engine", "hbs");

// MySQL connection
const con = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// check database connection
con.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connection successful");
    connection.release();
});


// routes
const routes=require("./server/routes/student")
app.use('/',routes);
// listen port
app.listen(port, () => {
    console.log("Listening on port: " + port);
});

