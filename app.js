require("dotenv").config()
const express = require('express')
const { rutaUser } = require("./routers/Usuario.router")
const puerto = process.env.PORTH
const app = express()

app.use(express.json())

app.use('/usuario',rutaUser)
require('./model/conexion')

app.use((error, res, req)=>{
    return res.status(500).json({ status: false, message: `Se ha generado un error ${error.message}`})
})
app.use((req, res)=>{
    return res.status(500).json({mensaje:"Ruta invalida"})
})
app.listen(puerto,()=>{
    console.log(`se esta escuchando el puerto ${puerto}`)
})