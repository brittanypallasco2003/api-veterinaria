//Importar Router de express
import {Router} from 'express'
//crear una instancia de router
const router = Router()
//importar método para protección de rutas
import verificarAutenticacion from '../middlewares/autenticacion.js'
import { validacionVeterinario } from '../middlewares/validacionVeterinario.js';

import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";

//RUTAS PÚBLICAS
router.post("/login", login);
router.post('/registro',validacionVeterinario,registro)
router.get("/confirmar/:token", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.get("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/:token", comprobarTokenPasword);
router.post("/nuevo-password/:token", nuevoPassword);
//RUTAS PRIVADAS
router.get('/perfil',verificarAutenticacion,perfil)
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
router.get('/veterinario/:id',verificarAutenticacion,detalleVeterinario)
//RUTA PARA ACTUALIZAR EL PERFIL DE VETERINARIO
router.put('/veterinario/:id',verificarAutenticacion,actualizarPerfil)

//exportar la variable router
export default router