// Importar express
import express from 'express';

// Importando http-status
import httpStatus from 'http-status';

// Importando el enrutador 
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

// importando root dir , primer middleware en ser registrado deber ser el servidor de estaticos
import { ROOT_DIR } from './helpers/paths.js';

// importando path
import path from 'path';

// Crear una instancia de express
const app = express(); // (req,res) => {UN MONTON DE CÓDIGO}

// Middleware del parseo de datos del cliente
app.use(express.urlencoded({ extended: true }));

// se registra el middleware para servidor archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));




// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega la ruta shop 
app.use(shopRouter);

// registrando middleware para el error 404
app.use((req, res) => [
    res.status(httpStatus.NOT_FOUND).sendFile(path.resolve('views', '404.html'))
])

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el servidor 
app.listen(port, ip, (error) => {
    console.log(`📢 Sirviendo en http://localhost:${port}`);
});