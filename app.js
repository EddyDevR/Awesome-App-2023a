// importar el module http 

import http from 'http';

// import express
import express from 'express';

// crear una instancia de express
const app = express();

// crear el servidor 
const server = http.createServer(app);

//creando middleware esa una funcion 
app.use((req, res, next) => {
    console.log('😊 Todo bien');
    // invocando al siguiente middleware
    next();
});


app.use((req, res, next) => {
    console.log('✌ Registrando peticion');
    console.log(` ${req.method}  = ${req.url}`);
    next();
})

app.use((req, res) => {
    console.log('😒 Respondiendo al cliente');
    res.send(`
    <h1>Hello World </h1>
    <p>This is awesome app<p/>
    `);
})

// Definir puertos 
const port = 3000;
const ip = '0.0.0.0';

// arrancar el servidor 
server.listen(port, ip, (err) => {
    console.log('Funcionando en https://localhost:3000');
});






