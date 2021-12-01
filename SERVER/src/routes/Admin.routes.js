const {Router} = require('express')
const router = Router()
const AdminCtrl= require('../controller/Admin.controller')

router.post('/crear', AdminCtrl.crearAdmin)
router.post('/login', AdminCtrl.login)
router.get('/obtener', AdminCtrl.obtener)

module.exports = router

