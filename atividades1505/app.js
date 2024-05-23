const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'gerenciamento_tarefas_db',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
});

const promisePool = pool.promise();
let saltRounts=10

app.post(`/registrar`, async (req,res) => { // Registrar usuario
    const { nome_usuario , senha_usuario } = req.body;
    const hashSenha = await bcrypt.hash(senha_usuario, saltRounts);
    await promisePool.query(`INSERT INTO usuarios (nome_usuario,senha_usuario) VALUES (?,?)`, [nome_usuario,hashSenha]);
    res.status(201).send(`Usuário registrado com sucesso`)
});

const PORTA = 3000; // criar porta
app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
});
