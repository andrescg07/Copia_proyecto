const ApartamentosCtrl = {};
const Apartamento = require('../models/Apartamento.model');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// FUNCION PARA CREAR Apartamento DE RENTA
ApartamentosCtrl.crearApartamento=async(req,res)=>{
    
    const{nombre, precio, descripcion}=req.body
    NuevaApartamento = new Apartamento({
        nombre,
        precio,
        descripcion
    })

    // const nombrePersona = await Apartamento.findOne({nombre:nombre})
    // if (nombrePersona){
    //     res.json({
    //         mensaje: 'El usuario ya ha solicitado rentar este inmueble'
    //     })
    // }

    await NuevaApartamento.save()
    res.json({
        mensaje:'Apartamento enviado'
    })
}

// FUNCION PARA LISTAR ApartamentoES DE RENTA EN BASE DE DATOS
ApartamentosCtrl.listar = async(req,res)=>{

    const obtenerApartamentoes = await Apartamento.find()
    res.json(obtenerApartamentoes)
}

// FUNCION PARA LISTAR Apartamento POR ID
ApartamentosCtrl.listarId = async(req,res)=>{

    const id = req.params.id
    const respuesta = await Apartamento.findById({_id: id})
    res.json(respuesta)
}

// FUNCION PARA FILTRAR SOLICTUD POR EL NOMBRE PERSONA

ApartamentosCtrl.buscarPorNombre = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Apartamento.find({nombre:id})
    res.json(respuesta)
}


// FUNCION PARA  ELIMINAR SOLICTUD DE RENTA
ApartamentosCtrl.eliminarApartamento = async(req,res) =>{

    const id = req.params.id
    await Apartamento.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'El Apartamento ha sido eliminada'
    })
}

// FUNCION PARA ACTUALIZAR UNA SOLICTUD
ApartamentosCtrl.actualizarApartamento = async(req,res)=>{
    const id = req.params.id
    await Apartamento.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje:'El apartamento ha sido actualizdo'
    })
}

// FUNCION PARA FILTRAR UNA Apartamento CON LA IDENTIFICACION DE LA PERSONA
ApartamentosCtrl.buscarPorIdentificacion = async(req,res)=>{
    const identificacion = req.params.criterio;

    try{

        const respuesta = await Apartamento.find({identificacion:identificacion})
        res.json({respuesta})

    }catch(error){

        return res.status(400).json({
            mensaje:'Ha ocurrido un error'
        })

    }
}


module.exports = ApartamentosCtrl