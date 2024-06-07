// // // router.get('', (req, res) => {
// // //     res.render("home");
// // // });
// // const mysql = require("mysql2");
// // const con = mysql.createPool({
// //     connectionLimit: 10,
// //     host: process.env.DB_HOST,
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASS,
// //     database: process.env.DB_NAME
// // });
// // con.getConnection((err, connection) => {
// //     if (err) {
// //         console.error("Error connecting to database:", err);
// //         connection.query("select *from users",(err,rows)=>{
// //             connection.release();
// //             if(!err){
// //                 console.log("good");
// //             }else{
// //                 console.log("error in listining data"+err);
// //             }
// //         })
// //         return;
// //     }
// //     console.log("Connection successful");
// //     connection.release();
// // });

// // exports.view= (req, res) => {
// //     res.render("home",{rows});}


// const mysql = require("mysql2");
// const con = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

// exports.view = (req, res) => {
//     con.getConnection((err, connection) => {
//         if (err) {
//             console.error("Error connecting to database:", err);
//             return res.status(500).send("Error connecting to database");
//         }

//         connection.query("SELECT * FROM users", (err, rows) => {
//             connection.release(); // Release the connection after executing the query

//             if (err) {
//                 console.error("Error querying database:", err);
//                 return res.status(500).send("Error querying database");
//             }

//             // Pass the fetched data to the view
//             res.render("home", { rows });
//         });
//     });
// };

////////////////////
// const mysql = require('mysql2');
// require('dotenv').config();

// const con = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

// exports.view = (req, res) => {
//     con.query("SELECT * FROM users", (err, rows) => {
//         if (!err) {
//             console.log("Fetched rows: ", rows);
//             res.render("home", { rows });
//         } else {
//             console.log("Error in fetching data: " + err);
//         }
//     });
// };
// exports.adduser=(req,res)=>{
//     res.render("adduser")
// }


// exports.save = (req, res) => {
//     const { name, age, city } = req.body;

//     con.getConnection((err, connection) => {
//         if (err) {
//             throw err;
//         }
//         connection.query("INSERT INTO users (NAME, AGE, CITY) VALUES (?, ?, ?)", [name, age, city], (err, rows) => {
//             connection.release(); // Release the connection back to the pool
//             if (!err) {
//                 console.log("User added successfully");
//                 res.redirect('/'); // Redirect to home after saving
//             } else {
//                 console.log("Error in inserting data: " + err);
//                 res.status(500).send("Error in inserting data");
//             }
//         });
//     });
// };

// exports.edituser = (req, res) => {
//     con.getConnection((err, connection) => {
//         if (err) throw err;
//         let id = req.params.id;
//         con.query("SELECT * FROM users where id=?", [id], (err, rows) => {
//             if (!err) {
//                 res.render("edituser", { rows });
//             } else {
//                 console.log("Error in fetching data: " + err);
//                 // Handle error
//             }
//             connection.release(); // Release the connection back to the pool
//         });
//     });
// };
// // exports.edit = (req, res) => {
// //     const { name, age, city } = req.body;
// //     let id = req.params.id;

// //     con.getConnection((err, connection) => {
// //         if (err) {
// //             throw err;
// //         }
// //         connection.query("update users set NAME=?,AGE=?,CITY=? Where ID=?", [name, age, city], (err, rows) => {
// //             connection.release(); // Release the connection back to the pool
// //             if (!err) {
// //                 console.log("User added successfully");
// //                 res.redirect('/'); // Redirect to home after saving
// //             } else {
// //                 console.log("Error in inserting data: " + err);
// //                 res.status(500).send("Error in inserting data");
// //             }
// //         });
// //     });
// // };
// exports.saveEditedUser = (req, res) => {
//     const { name, age, city } = req.body;
//         let id = req.params.id;
    
//         con.getConnection((err, connection) => {
//             if (err) {
//                 throw err;
//             }
//             connection.query("update users set NAME=?,AGE=?,CITY=? Where ID=?", [name, age, city], (err, rows) => {
//                 connection.release(); // Release the connection back to the pool
//                 if (!err) {
//                     console.log("User added successfully");
//                     res.redirect('/'); // Redirect to home after saving
//                 } else {
//                     console.log("Error in inserting data: " + err);
//                     res.status(500).send("Error in inserting data");
//                 }
//             });
//         });};
const mysql = require('mysql2');
require('dotenv').config();

const con = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

exports.view = (req, res) => {
    con.query("SELECT * FROM users", (err, rows) => {
        if (!err) {
            console.log("Fetched rows: ", rows);
            res.render("home", { rows });
        } else {
            console.log("Error in fetching data: " + err);
        }
    });
};

exports.adduser = (req, res) => {
    res.render("adduser");
};

exports.save = (req, res) => {
    const { name, age, city } = req.body;

    con.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.query("INSERT INTO users (NAME, AGE, CITY) VALUES (?, ?, ?)", [name, age, city], (err, rows) => {
            connection.release();
            if (!err) {
                console.log("User added successfully");
                res.redirect('/'); 
            } else {
                console.log("Error in inserting data: " + err);
                res.status(500).send("Error in inserting data");
            }
        });
    });
};

exports.edituser = (req, res) => {
    con.getConnection((err, connection) => {
        if (err) throw err;
        let id = req.params.id;
        con.query("SELECT * FROM users WHERE id=?", [id], (err, rows) => {
            if (!err) {
                res.render("edituser", { rows: rows[0] }); // Pass the first row
            } else {
                console.log("Error in fetching data: " + err);
            }
            connection.release();
        });
    });
};

exports.edit = (req, res) => {
    const { name, age, city } = req.body;
    let id = req.params.id;

    con.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.query("UPDATE users SET NAME=?, AGE=?, CITY=? WHERE ID=?", [name, age, city, id], (err, rows) => {
            connection.release();
            if (!err) {
                console.log("User updated successfully");
                res.redirect('/'); 
            } else {
                console.log("Error in updating data: " + err);
                res.status(500).send("Error in updating data");
            }
        });
    });
};
