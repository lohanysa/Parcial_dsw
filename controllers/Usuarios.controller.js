const express = require('express');
const RegistrarUser = require('../model/usuario.model');

const CrearUser = async (req, res)=>{

    try{
        //aqui debe ir la logica para hacer el insert a la BD
        const {username, full_name , password} = req.body;
        const user = new RegistrarUser({
            username,
            full_name,
            password
        })
        await user.save()
        return res.status(202).json({mensaje:"ok", data: user})

    }catch(error){
        return res.status(500).json({ status: false, message: error })
    }

}

module.exports={
    CrearUser
}