const mongoose = require("mongoose")

const UsuarioRegistrar= new mongoose.Schema({
    username: String,
    password: String,
    full_name: String
})

const RegistrarUser = mongoose.model("Usuario", UsuarioRegistrar)


module.exports = RegistrarUser