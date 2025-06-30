const express = require('express')
const { CrearUser, login, autenticacionControl } = require('../controllers/Usuarios.controller')
const { UserRegistro, inicio, autentificacion, autenticacion } = require('../middleware/usuario.middleware')
const rutaUser = express.Router()

rutaUser.post('/registro',UserRegistro , CrearUser)
rutaUser.post('/login',inicio ,login)
rutaUser.get('/profile',autenticacion, autenticacionControl)

module.exports={
    rutaUser
}