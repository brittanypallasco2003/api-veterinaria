//Importar el modelo
import Tratamiento from "../models/Tratamiento.js"
import Paciente from "../models/Paciente.js"
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
const actualizarTratamiento = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`});
    await Paciente.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del paciente"})
}

//método para eliminar el tratamiento
const eliminarTratamiento = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe ese tratamiento`})
    await Tratamiento.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"Tratamiento eliminado exitosamente"})
}
//método para cambiar el estado del tratamiento
const cambiarEstado = async(req,res)=>{
    await Tratamiento.findByIdAndUpdate(req.params.id,{estado:false})
    res.status(200).json({msg:"Estado del Tratamiento modificado exitosamente"})
}


export {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
}