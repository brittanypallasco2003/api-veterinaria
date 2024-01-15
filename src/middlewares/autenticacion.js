//Importar jwt
import jwt from 'jsonwebtoken'
//Importar el modelo
import Veterinario from '../models/Veterinario.js'

//Metodo ara proteger rutas
const verificarAutenticacion = async (req,res,next)=>{
//Validación si se está enviando el token
if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    
    //Desestructurar el token para el headers
    const {authorization} = req.headers
    //Capturar errores
    try {
        //Verificar el token recuperado con el almacenado
        const {id,rol} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        //verificar el rol
        if (rol==="veterinario"){
            //Obtener el usuario
            req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
            //Confirmar el proceso
            next()
        }
    } catch (error) {
        //Capturar errores y presentarlos
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}
//Exportar el modelo
export default verificarAutenticacion