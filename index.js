const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/getClientes', (req, res) => {
    const sql = 'SELECT * FROM clientes';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener los clientes:', err);
            return res.status(500).json({ error: 'Error al obtener los clientes' });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
