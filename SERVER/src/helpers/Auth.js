const Autorizacion={}
const jwt = require('jsonwebtoken')
// const { token } = require('morgan')

Autorizacion.verificarToken = (req,res, next)=>{
   
   if(!req.headers.autorizacion){
        return res.json({
            mensaje: '¡No posee autorizacion o permisos!'
        })
   }

   const token= req.headers.autorizacion
   if(token === null){
       res.json({
           mensaje: '¡No esta autorizado!'
       })
   }

   next();

}

module.exports = Autorizacion