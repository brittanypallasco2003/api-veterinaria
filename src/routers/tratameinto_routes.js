import {Router} from 'express'
import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';
const router = Router()
import verificarAutenticacion from "../middlewares/autenticacion.js";
//importar los métodos del controlador
import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";


// //RUTA PARA CREAR TRATAMIENTOS
router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)

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