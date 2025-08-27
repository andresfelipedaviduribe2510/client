const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'andres',
    password:'Andres123!',
    database:'pd_andres_uribe_hopper'
});

db.connect(err =>{
    if(err){
    console.error("Error al conectar con MYSQL", err);
    return;
    }
    console.log("Conectado a la BD");
});

module.exports = db;
