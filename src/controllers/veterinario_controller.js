
import Veterinario from "../models/Veterinario.js"

//Método para el login
const login =(req,res)=>{
    res.status(200).json({res:'login del veterinario'})
}
//Método para mostrar el perfil
const perfil=(req,res)=>{
    res.status(200).json({res:'perfil del veterinario'})
}
const registro = async (req,res)=>{
    //desestructurar los campos
    const {email,password} = req.body
    //validar todos los campos llenos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    //obtener el usuario de la bdd en base al email
    const verificarEmailBDD = await Veterinario.findOne({email})
    //validar que el email sea nuevo
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    //crear la instacia del veterinario
    const nuevoVeterinario = new Veterinario(req.body)
    //encriptar password
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
    //crear el token => mail
    nuevoVeterinario.crearToken()
    //guardar en bdd
    await nuevoVeterinario.save()
    //responder
    res.status(200).json({nuevoVeterinario})
}
//MÉTODO PARA CONFIRMAR UN TOKEN
const confirmEmail = (req,res)=>{
    res.status(200).json({res:'confirmar email de registro de veterinario'})
}
const listarVeterinarios = (req,res)=>{
    res.status(200).json({res:'lista de veterinarios registrados'})
}
const detalleVeterinario = (req,res)=>{
    res.status(200).json({res:'detalle de un eterinario registrado'})
}
const actualizarPerfil = (req,res)=>{
    res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}
//METODO PARA ACTUALIZAR EL PASSWORD
const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
//MÉTODO PARA RECUPERAR EL PASSWORD
const recuperarPassword= (req,res)=>{
    res.status(200).json({res:'enviar mail recuperación'})
}
//METODO PARA RECUPERAR EL PASWORD CON EL TOKEN
const comprobarTokenPasword= (req,res)=>{
    res.status(200).json({res:'verificar token mail'})
}
//GENERAR UN NUEVO PASSWORD
const nuevoPassword= (req,res)=>{
    res.status(200).json({res:'crear nuevo password'})
}

export {
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
	nuevoPassword
}