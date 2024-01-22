//IMPORTAR LIBRERÍAS
//importar express
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
//importar la variable routerVeterinarios
import routerVeterinarios from './routers/veterinario_routes.js'
//importar la variable routerPacientes
import routerPacientes from './routers/paciente_routes.js'
import routerTratamientos from './routers/tratameinto_routes.js'

//INICIALIZACIONES
// instaciar express
const app = express()
dotenv.config()

//CONFIGURACIONES
app.set('port',process.env.port || 3000)
app.use(cors())

//MIDDLEWARS
app.use(express.json())

//VARIABLES GLOBALES

//RUTAS
app.get('/',(req,res)=>{
    res.send("Server on")
})
app.use('/api',routerVeterinarios)
app.use('/api',routerPacientes)
app.use('/api', routerTratamientos)
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


//EXPORTAR LA VARIABLE APP
export default  app
