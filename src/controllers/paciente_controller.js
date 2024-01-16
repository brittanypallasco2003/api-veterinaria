import { sendMailToPaciente } from "../config/nodemailer.js"
import Paciente from "../models/Paciente.js"

const loginPaciente = (req,res)=>{
    res.send("Login del paciente")
}
//para registrar le paciente
const perfilPaciente = (req,res)=>{
    res.send("Perfil del paciente")
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
const detallePaciente = (req,res)=>{
    res.send("Detalle del paciente")
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
const actualizarPaciente = (req,res)=>{
    res.send("Actualizar paciente")
}
//para dar de baja al paciente
const eliminarPaciente = (req,res)=>{
    res.send("Eliminar paciente")
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