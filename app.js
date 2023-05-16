// Importando expressjs
import express from 'express';
// Crear una instancia de express
const app = express(); // (req, res)=>{ UN MONTO DE CODIGO }
// middleware de parsea de datos del cliente
app.use(express.urlencoded({ extended: true }));

// Registrar nuestro primer middleware
app.use((req, res, next) => {
  console.log("⭐ Ejecutando el Middleware 1");
  // Invocando al siguiente middleware
  next();
});
app.use((req, res, next) => {
  console.log(`🪄 ${req.method} - ${req.url}`);
  next();
});
app.use('/about', (req, res) => {
  res.send(`
  <h1 style="color: teal">About...</h1>
  <p style="color: #555"> Esta pagina creada para aprender 
  desarrollo web en Fullstack con JS</p>
  `);
});

// GET / adyd product  
app.get('/add-product', (req, res, next) => {
  console.log(`sirviendo el formulario`);
  // sirviendo el formlario
  res.send(`
    <form action='/add-product' method='POST'>
    <label for='title'>Title</label>
    <input type='text' name='title'>

    <label for='desc'>Descripcion</label>
    <input type='desc' name='desc'>

    <button type='submit'> Add Product </button>
    </form>
    `);


});

// POST /add-product
app.post('/add-product', (req, res) => {
  //  extraccion de los datos de la peticion 

  for (const prop in req.body) {
    console.log(`PROP: ${prop} : ${req.body[prop]} `);
  }
  res.redirect('/');
});

app.use((req, res) => {
  console.log("⭐ Respondiendo al cliente");
  res.send(`
  <h1>Bienvenido a express</h1>
  <p>Este es mi software</p>
  `);
});
// Creando el servidor
// const server = http.createServer(app);
// Definir puertos
const port = 3000;
const ip = "0.0.0.0";
// Arrancando el server
app.listen(port, ip, (err) => {
  console.log("📢 Sirviendo en http://localhost:3000");
  // console.log(`📢 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
});