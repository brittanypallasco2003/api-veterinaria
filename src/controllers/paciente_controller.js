import { sendMailToPaciente } from "../config/nodemailer.js"
import generarJWT from "../helpers/crearJWT.js"
import Paciente from "../models/Paciente.js"
import mongoose from "mongoose"

const loginPaciente = async(req,res)=>{
    const {email,password} = req.body
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const pacienteBDD = await Paciente.findOne({email})
    if(!pacienteBDD) return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    const verificarPassword = await pacienteBDD.matchPassword(password)
    if(!verificarPassword) return res.status(404).json({msg:"Lo sentimos, el password no es el correcto"})
    const token = generarJWT(pacienteBDD._id,"paciente")
		const {nombre,propietario,email:emailP,celular,convencional,_id} = pacienteBDD
    res.status(200).json({
        token,
        nombre,
        propietario,
        emailP,
        celular,
        convencional,
        _id
    })
}
//para registrar le paciente
const perfilPaciente =(req,res)=>{
    delete req.pacienteBDD.ingreso
    delete req.pacienteBDD.sintomas
    delete req.pacienteBDD.salida
    delete req.pacienteBDD.estado
    delete req.pacienteBDD.veterinario
    delete req.pacienteBDD.createdAt
    delete req.pacienteBDD.updatedAt
    delete req.pacienteBDD.__v
    res.status(200).json(req.pacienteBDD)
}

//mostrar todos los pacientes
const listarPacientes = async (req,res)=>{
    //Obtener todos los pacientes que se encuentren activos
    //que sean solo los del paciente que incio sesión
    const pacientes = await Paciente.find({estado:true}).where('veterinario').equals(req.veterinarioBDD).select("-salida -createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    //quitar campos no necesarios
    //mostrar campos de documentos relacionados
    res.status(200).json(pacientes)
}

//mostrar detalle del paciente
const detallePaciente = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`});
    const paciente = await Paciente.findById(id).select("-createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    res.status(200).json(paciente)
}

const registrarPaciente = async(req,res)=>{
    //desestructurar el email
    const {email} = req.body
    //validar todos los campos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    //obtener el usuario en base al email
    const verificarEmailBDD = await Paciente.findOne({email})
    //verificar si el paciente ya se encuentra registrado
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    //crear instancia dle paciente
    const nuevoPaciente = new Paciente(req.body)
    //crear un password
    const password = Math.random().toString(36).slice(2)
    //encriptar el password
    nuevoPaciente.password = await nuevoPaciente.encrypPassword("vet"+password)
    //enviar el correo electrónico
    await sendMailToPaciente(email,"vet"+password)
    //asociar el paciente con el veterinario
    nuevoPaciente.veterinario=req.veterinarioBDD._id
    //guardar en la BDD
    await nuevoPaciente.save()
    //Presentar el resultado
    res.status(200).json({msg:"Registro exitoso del paciente y correo enviado"})
}

//para actualizar un paciente
const actualizarPaciente = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`});
    await Paciente.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del paciente"})
}
//para dar de baja al paciente

const eliminarPaciente = async (req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`})
    const {salida} = req.body
    await Paciente.findByIdAndUpdate(req.params.id,{salida:Date.parse(salida),estado:false})
    res.status(200).json({msg:"Fecha de salida del paciente registrado exitosamente"})
}

export {
    loginPaciente,
    perfilPaciente, 
    listarPacientes,
    detallePaciente,
    registrarPaciente,
    actualizarPaciente,
    eliminarPaciente
}