import express from 'express';

const app = express();

const  PORT = 8080;
// responses o endpoints
app.get("/ping", (req, res) => {
  res.send("Hola mundo!")
  })

const users = [
    {id: 1, nombre: "juan", apellido: "torres", edad: "x", genero: "M"},
    {id: 2, nombre: "olvia", apellido: "jijij", edad: "4", genero: "M"},
    {id: 3, nombre: "pedro", apellido: "est", edad: "56", genero: "M"},
    {id: 4, nombre: "candela", apellido: "fgh", edad: "7", genero: "M"},
    {id: 5, nombre: "roberto", apellido: "jk", edad: "4", genero: "M"}
]
// req.params
app.get("/unparametro/:nombre", (req, res) => {

  console.log(req.params.nombre);
  res.send(`el nombre es ${req.params.nombre}`)
  
})

 
  app.get("/usersFind/:userId", (req, res) => {
    console.log(req.params.userId);

  const userFind = users.find(u => u.id === parseInt(req.params.userId))
  console.log(userFind);
    res.send(`hola el usuario es: `)
  })
//req.query 
app.use(express.urlencoded({extended: true}))

app.get("/ejemploQuery/", (req, res) => {

})
//pongo a escuchar al server
app.listen(PORT, ()=>{
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})
