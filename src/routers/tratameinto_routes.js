import {Router} from 'express'
const router = Router()
//importar los métodos del controlador
import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";

// //RUTA PARA CREAR TRATAMIENTOS
router.post('/tratamiento/registro',registrarTratamiento)

router
//RUTA PARA VER EL DETALLE DEL TRATAMIENTO
.route('/tratamiento/:id')
.get(detalleTratamiento)
//RUTA PARA ACTUALIZAR EL TRATAMIENTO
.put(actualizarTratamiento)
//RUTA PARA ELIMINAR EL TRATAMIENTO
.delete(eliminarTratamiento)
//RUTA PARA CAMBIAR EL ESTADO DEL TRATAMIENTO
router.put('/tratamiento/estado/:id',cambiarEstado)


export default router