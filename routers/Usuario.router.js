const express = require('express')
const { CrearUser } = require('../controllers/Usuarios.controller')
const { UserRegistro } = require('../middleware/usuario.middleware')
const rutaUser = express.Router()

rutaUser.post('/',UserRegistro , CrearUser)

module.exports={
    rutaUser
}