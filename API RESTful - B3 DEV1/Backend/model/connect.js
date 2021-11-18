require('dotenv').config();
const mysql = require('mysql');

console.log("CONNEXION A LA BASE DE DONNEES");

//connexion base de donnée SI EN PHPMYADMIN :
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BDD
});

db.connect(function(err) {

    if (err) throw err;
 
    console.log("Connecté à la base de données MySQL!"); 
});
module.exports = db;