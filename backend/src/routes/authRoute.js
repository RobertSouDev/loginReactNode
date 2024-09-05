const express = require('express')
const users = require('../mock/apifake')
const routes = express.Router()

routes.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return res.status(200).json(user);
    }

    return res.status(401).json({ message: "Credenciais inválidas" });
});

routes.post('/register', (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        return res.status(400).json({msg: "Por Favot, preencga todos os campos"})
    }

    const userExists = users.find(user => user.email === email)
    if(userExists) {
        return res.status(400).json({msg: "E-mail já cadastrado"})
    }

    const newUser = {
        id: users.length + 1, // gerar um id simples
        name,
        email,
        password
    };
    users.push(newUser)

    res.status(201).json({msg: "Usuário cadastrado com sucesso!", user: newUser})
})

module.exports = routes