//IMPORTAR MOONGOSE
import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

//CREAR UNA FUNCIÓN LLAMADA CONNECTION
const connection = async()=>{
    try {
        //establecer la conexión con la base de datos
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        //presentar la conexión en consola
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
        //capturar el error de la conexión
    } catch (error) {
        console.log(error);
    }
}
//EXPORTAR LA FUNCION
export default  connection