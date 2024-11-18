const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const db = new sqlite3.Database("database.db");

app.use(cors());
app.use(bodyParser.json());

// Criar tabela de usuários
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT
        )
    `);
});

// Rota de cadastro
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    db.run(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, hashedPassword],
        (err) => {
            if (err) {
                return res.status(400).json({ message: "Erro ao cadastrar usuário." });
            }
            res.json({ message: "Usuário cadastrado com sucesso!" });
        }
    );
});

// Rota de login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: "Usuário não encontrado." });
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Senha incorreta." });
        }

        const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
        res.json({ message: "Login bem-sucedido!", token });
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
