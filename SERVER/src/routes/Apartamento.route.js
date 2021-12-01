const {Router} = require('express')
const router = Router()
const ApartamentoCtrl = require('../controller/Apartamento.controller')
const Autorizacion = require('../helpers/Auth')

router.post('/crear', ApartamentoCtrl.crearApartamento)
router.get('/listarApartamento',Autorizacion.verificarToken, ApartamentoCtrl.listar)
router.get('/listar/:id', Autorizacion.verificarToken, ApartamentoCtrl.listarId)
router.delete('/eliminar/:id',Autorizacion.verificarToken, ApartamentoCtrl.eliminarApartamento)
router.put('/actualizar/:id',Autorizacion.verificarToken, ApartamentoCtrl.actualizarApartamento)
router.get('/listar/:criterio',Autorizacion.verificarToken, ApartamentoCtrl.buscarPorIdentificacion)
router.get('/listarNombre/:id',Autorizacion.verificarToken, ApartamentoCtrl.buscarPorNombre)

module.exports = router