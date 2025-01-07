// ejercico de encrpitacion
const crypto = require('crypto')
const fs = require('fs')
class userManager {
    static usuarios = []
    constructor() {
        if (fs.existsSync('usuario.json')) {
            const data = fs.readFileSync('usuarios.json', 'utf8')
            userManager.usuarios = JSON.parse(data)
        } 
    }
    crearUsuario(nombre, apellido, nombreUsuario, contrasena){
        const  hash = crypto.createHash('sha256'.update(contrasena).digest('hex'))
        
        const newUser = {
            nombre, 
            apellido,
            nombreUsuario,
            password: hash
        }
        userManager.usuarios.push(newUser)
        //fs.writeFileSync('usuarios.json', JSON.stringify(userManager.usuarios))
    }
    mostrarUsuarios(){
        console.log("lista de usuarios");
        userManager.usuarios.forEach(user=>{
            console.log();
        })
        
    }

}

const userManager = new userManager()

userManager.crearUsuario ({
    nombre: 'juan',
    apellido: 'perez',
    nombreUsuario: 'juan p',
    contrasena: '1234'
})
userManager.mostrarUsuarios()

userManager.validarUsuario('juan p', "1234")
userManager.validarUsuario('juan p', 'sddf234')