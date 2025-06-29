const express = require('express')
const { CrearUser, login } = require('../controllers/Usuarios.controller')
const { UserRegistro, inicio } = require('../middleware/usuario.middleware')
const rutaUser = express.Router()

rutaUser.post('/registro',UserRegistro , CrearUser)
rutaUser.post('/login',inicio ,login)

module.exports={
    rutaUser
}