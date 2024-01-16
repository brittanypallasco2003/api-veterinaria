import {Router} from 'express'
const router = Router()

import {
    actualizarPaciente,
    detallePaciente,
    eliminarPaciente,
    listarPacientes,
    registrarPaciente,
    loginPaciente,
    perfilPaciente 
} from "../controllers/paciente_controller.js";

import verificarAutenticacion from "../middlewares/autenticacion.js";


//RUTA PARA EL PROCESO DE LOGIN
router.post('/paciente/login',loginPaciente)
//RUTA PAR VER EL PERFIL
router.get('/paciente/perfil',verificarAutenticacion,perfilPaciente)
//RUTA PAR LISTAR TODOS LOS PACIENTES
router.get('/pacientes',verificarAutenticacion,listarPacientes)
//RUTA PARA VER EL DETALLE DE UN PACIENTE EN PARTICULAR
router.get('/paciente/:id',verificarAutenticacion,detallePaciente)
//RUTA PARA REGISTRAR UN PACIENTE
router.post('/paciente/registro',verificarAutenticacion,registrarPaciente)
//RUTA PAR ACTUALIZAR UN PACIENTE
router.put('/paciente/actualizar/:id',verificarAutenticacion,actualizarPaciente)
//RUTA PARA ELIMINAR UN PACIENTE (DAR DE BAJA - CAMBIAR DE ESTADO)
router.delete('/paciente/eliminar/:id',verificarAutenticacion,eliminarPaciente)


//EXPORTAR LA VARIABLE ROUTER
export default router