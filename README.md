# Api-Veterinaria 🐶
## Árbol de Trabajo 📂
```
└── 📁Api-Veterinaria
    └── database.js
    └── index.js
    └── server.js`
    └── package-lock.json
    └── package.json
    └── .env.example
    └── .gitignore
    └── README.md
    └── 📁src
        └── 📁config
            └── nodemailer.js
        └── 📁controllers
            └── veterinario_controller.js
            └── paciente_controller.js
        └── 📁helpers
            └── crearJWT.js
        └── 📁middlewares
            └── autenticacion.js
            └── validacionVeterinario.js
        └── 📁models
            └── Veterinario.js
            └── Tratamiento.js
            └── Paciente.js
        └── 📁routers
            └── veterinario_routes.js
            └── paciente_routes.js
            └── tratamiento_routes.js
```
## Clonación e Instalación
Para acceder al proyecto se debe realizar la clonación del mismo mediante:
```
git clone https://github.com/brittanypallasco2003/api-veterinaria.git
```
> [!NOTE]
>
> Este proyecto trabaja con el sistema de módulos ES Modules

### Instalación de Dependencias

> [!IMPORTANT]
>
> Una vez clonado el repositorio se debe correr, por terminal, el siguente comando para poder instalar las dependencias correspondientes al proyecto.

```
npm i
```

## Environment Variables
**Cadena de conexión BDD:**

`MONGODB_URI`

**Servidor SMTP:**

`URL_BACKEND` 
`HOST_MAILTRAP`
`PORT_MAILTRAP`
`USER_MAILTRAP`
`PASS_MAILTRAP`

> [!NOTE]
>
> Este sistema tiene un enfoque Stateless, por lo tanto, se tiene una variable de entorno para el secreto JWT que permitirá firmar y verificar la autenticidad del token.

**Jason Web Token**

`JWT_SECRET`

## Conexión a la BDD con MongoDB
![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/1b98c96c-8a4e-46c0-9048-4331fdc8f4a7)

## Módulo Veterinarios
### Resgistro y envío de emails
|Registro|Envío emails|Login|
|-|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/97f978ca-579d-4308-b874-204d4390c780)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/e82500e1-1457-413b-8068-1874c4d914a4)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/30564bbc-264b-4f62-b586-afe93720c6d3)|

## Recuperación de Contraseñas
|Recuperar Password|Enlace para recuperar password|
|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/8483b7b6-1b9d-4a90-a6a0-c9f85a6af352)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/05743b11-a9cb-4ec8-a0aa-606c447f7203)|

|Restablecer password|Inicio de Sesión con password reestablecido|
|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/dd553bec-681a-40cf-adcb-12a2a3f226a3)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/dfe3c6c7-c2a3-4a00-b912-ce0987b034c1)|

## JWT
|Generación y Envío del JWT al Cliente|
|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/84c46f5d-6b12-49a8-ac20-4e1f518d2527)|

## Protección de Rutas
|Ruta Perfil|Ruta Detalle de Veterinario|
|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/128e81ad-4943-41de-8d87-430a03438b65)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/2494b32a-d600-4b1e-aa2b-b97d13265144)|

## Actulización de Perfil
|Actualizar perfil|Perfil Actualizado|
|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/b322ddca-9457-49dd-a7d4-806502c171d5)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/75bcba36-5a12-4dd1-bba0-03014ac4fc2f)|

## Actualizar contraseña
![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/5d4e0d21-111d-4452-8a8e-653d22df6c35)

## Validación de Datos
|Validación de Password|Registro|
|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/5fc4ec21-3905-4e82-b576-5fcd86a87b4b)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/adb28f20-5ae2-4e01-8e9d-08c480b9614b)|


## Módulo Pacientes
### Resgistro y envío de emails
|Registro|Envío emails|Login|
|-|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/1ba18237-433c-4fe6-85b9-18f340b19c24)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/cf8708db-da10-4c46-85c4-746862b1e530)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/5fb1d974-a374-4c3d-b136-5118f9514b15)|

### Mostrar los pacientes por veterinario
|Pacientes del Veterinario: Heidi Quinto|
|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/fdb8992d-6746-4633-bf2c-1ab913292b8c)|

|Pacientes del Veterinario: Romina Vanegas|
|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/b2c18ea6-fe37-46e1-bf64-b98ce51b63fb)|

### Mostrar Detalle del paciente
|Detalle de la Paciente: Sara|
|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/cb5dedf1-8017-4227-9483-ad2eda058b18)|

### Actualización de los Datos del Paciente
|Actualizar|Eliminar|
|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/3b2b46ab-4701-4c58-a241-17bc8685d771)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/b89286a4-902a-4810-9772-b204b2d28b0b)|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/04732c9b-0e61-4b5e-bc03-2352c474c0cd)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/fd9a5b2a-6169-4bc0-ab70-a5f6197b66f3)|

### Perfil Paciente
![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/552266d8-bf3a-4bcf-8b83-f2a058da3eba)

## Módulo Tratamiento
### Crear tratamiento
|Tratameientos Creados|
|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/b80fc1b1-73fe-4c50-b529-576c8e9d7a6f)|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/bd580b12-8343-4119-8f49-0c847494dc79)|

### Detalle del tratamiento
|Visualización del Detalle|
|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/3caff28e-67e9-4f5a-b157-d4e305eff146)
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/5b897fe7-7a09-4a46-9adc-fb756fc02875)|

### Actualizar Tratamiento
|Tratamiento a actualizar|Actualización|Tratamiento Actualizado|
|-|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/80cb315d-6de4-4c9e-ba44-fd6d6e3f9f89)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/ed3e83c7-6c68-4c5a-978b-42c4aa6f50f9)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/f6763f67-98fb-471b-803b-6e6ae9688b04)|

### Eliminar Tratamiento
|Tratamiento a Eliminar|Tratamiento Eliminado|
|-|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/353b0e3f-ce2b-4933-a766-25dae26cf61c)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/4c23a9fc-c6ca-4061-9a91-88546765359d)|

### Cambiar estado 
|Dar por finalizado un tratamiento|
|-|
|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/f31373c2-30b9-49f1-aa91-a5090c6e835f)|![image](https://github.com/brittanypallasco2003/api-veterinaria/assets/117743650/353b0e3f-ce2b-4933-a766-25dae26cf61c)|



