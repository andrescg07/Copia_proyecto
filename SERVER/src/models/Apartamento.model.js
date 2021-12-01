const mongoose = require('mongoose')
const {Schema}= mongoose

const AdminSchema = new Schema({
    nombre: {type:String, required:[true,'Debes ingresar un nombre']},
    precio:{type:Number, required:[true,'Debes ingresar un precio']},
    descripcion:{type:String, required:[true,'Debes ingresar una descripcion']},
    date:{type:Date, default: Date.now}
})

// convertir a modelo

module.exports= mongoose.model('Apartamento',AdminSchema)