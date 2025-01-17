import express from 'express';
const app = express();
const  PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//API REST 

app.get('/', (req, res) => {
    res.send("test")
})
//endponts de users
const users = []
//listar usuarios
app.get('/api/users', (req, res) => {
    res.send(users)
})
//crear users
app.post('/api/users', (req, res) => {
    let user = req.body
    //generar ID unico
    const numRamdon = Math.floor(Math.random()*100 + 1);
    user.id = numRamdon + users.length;
    users.push(user); //agregamos user con el id nuevo
    res.send(user); 
})
// actualizar 
app.put('/api/users:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    let userUpdate = req.body
    // buscamos por ID
    let userPosition = users.findIndex(u => u.id === userId)
    if(userPosition < 0) {
        return res.status(404).send('User not found')
    }
    //actulizamos el user 
    users[userPosition] = userUpdate
    res.send(userUpdate)
})

//borrar
app.delete('/api/users:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    const userPosition = users.findIndex((u=>u.id === userId))
    if(userPosition < 0) {
        return res.status(404).send('User not found')
    }
    //eliminamos el user
    users.splice(userPosition, 1)
    res.send("usuario eliminado");
})

//ESCUCHA
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})
