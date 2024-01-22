import {Router} from 'express'
const router = Router()

//RUTA PARA CREAR TRATAMIENTOS
router.post('/tratamiento/registro',(req,res)=>res.send("Registrar tratamientos"))
//RUTA PARA VER EL DETALLE DEL TRATAMIENTO
router.get('/tratamiento/:id',(req,res)=>res.send("Detalle del tratamiento"))
//RUTA PARA ACTUALIZAR EL TRATAMIENTO
router.put('/tratamiento/:id',(req,res)=>res.send("Actualizar tratamiento"))
//RUTA PARA ELIMINAR EL TRATAMIENTO
router.delete('/tratamiento/:id',(req,res)=>res.send("Eliminar tratamiento"))
//RUTA PARA CAMBIAR EL ESTADO DEL TRATAMIENTO
router.post('/tratamiento/estado/:id',(req,res)=>res.send("Cambiar estado del tratamiento"))


export default router