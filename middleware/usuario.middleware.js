const UserRegistro =(req,res, next)=>{

    const {username, full_name , password} = req.body;
    if(!username){
        return res.status(400).json({mensaje: "debe ingresar un nombre de usuario"}
        )
    }
    if(!full_name){
         return res.status(400).json({mensaje: "ingrese su nombre y apellido"})
    }
    if(!password || password.length <8){
         return res.status(400).json({mensaje: "la contraseña no puede estar vacio y debe ser mayor a 8 caracteres"})
    }

    next()
}

const inicio =(req, res, next)=>{
     const {username, password} = req.body;
    if(!username){
        return res.status(400).json({mensaje: "debe ingresar un nombre de usuario"}
        )
    }
    
     if(!password){
         return res.status(400).json({mensaje: "la contraseña no puede estar vacia"})
    }
    
    next()
}

module.exports= {
    UserRegistro,
    inicio
}