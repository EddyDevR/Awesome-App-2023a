// Importando el enrutador de express
import { Router } from 'express';

// Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// Importando productos
import { products } from './admin.routes.js';

// GET /
router.get('/', (req, res) => {
    // Mostrando productos en memoria
    console.log(products);
    console.log("📢 Sirviendo la ruta '/'");
<<<<<<< HEAD
    // Se contesta al server
    res.render('shop');
    // res.render('shop', { layout: false });
=======
    res.sendFile(path.resolve('views', 'shop.html'));
>>>>>>> bcd0e74097f0449ba7c1802262e829ab400dc5b0
});

// GET /about
router.get('/about', (req, res) => {
    console.log("📢 Sirviendo la ruta '/about'");
    // Se contesta al server
    res.send(`
    <h1 style="color: teal">📃 About </h1>
    <p style="color: #555">App for Fullstack Web Dev Course I!</p>
    `);
});

export default router;