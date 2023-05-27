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
    res.sendFile(path.resolve('views', 'shop.html'));
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