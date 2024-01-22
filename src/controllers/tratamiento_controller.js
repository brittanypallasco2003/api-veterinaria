//Importar el modelo
import Tratamiento from "../models/Tratamiento.js"
//Importar moongose
import mongoose from "mongoose";


//método para ver el detalle del tratamiento

const detalleTratamiento = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe ese tratamiento`});
    const tratamiento = await Tratamiento.findById(id).populate('paciente','_id nombre')
    res.status(200).json(tratamiento)
}

//método para crear tratamiento
const registrarTratamiento = async (req,res)=>{
    const {paciente} = req.body
    if( !mongoose.Types.ObjectId.isValid(paciente) ) return res.status(404).json({msg:`Lo sentimos, debe ser un id válido`});
    const tratamiento = await Tratamiento.create(req.body)
    res.status(200).json({msg:`Registro exitoso del tratamiento ${tratamiento._id}`,tratamiento})
}
//método para actuzliar el tratamiento
const actualizarTratamiento = (req,res)=>{
    res.send("Actualizar tratamiento")
}
//método para eliminar el tratamiento
const eliminarTratamiento = (req,res)=>{
    res.send("Eliminar tratamiento")
}
//método para cambiar el estado del tratamiento
const cambiarEstado = (req,res)=>{
    res.send("Cambiar estado del tratamiento")
}

export {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
}