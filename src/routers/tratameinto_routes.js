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
import verificarAutenticacion from "../middlewares/autenticacion.js";


// //RUTA PARA CREAR TRATAMIENTOS
router.post('/tratamiento/registro',registrarTratamiento)

router
//RUTA PARA VER EL DETALLE DEL TRATAMIENTO
.route('/tratamiento/:id')
.get(verificarAutenticacion,detalleTratamiento)
//RUTA PARA ACTUALIZAR EL TRATAMIENTO
.put(verificarAutenticacion,actualizarTratamiento)
//RUTA PARA ELIMINAR EL TRATAMIENTO
.delete(verificarAutenticacion,eliminarTratamiento)
//RUTA PARA CAMBIAR EL ESTADO DEL TRATAMIENTO
router.put('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)


export default router