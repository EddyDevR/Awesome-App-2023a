// importar el module http 

import http from 'http';

// import express
import express from 'express';

// crear una instancia de express
const app = express();

// crear el servidor 
const server = http.createServer(app);

// Definir puertos 
const port = 3000;
const ip = '0.0.0.0';

// arrancar el servidor 
server.listen(port, ip, (err) => {
    console.log('Funcionando en https://localhost:3000');
    console.log(`Funcionando en https://${process.env.IP}:3000`);
});






