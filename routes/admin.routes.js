// Importando el enrutador de express
import { Router } from 'express';
// import path 
import path from 'path';

// importado ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';

// Creando una instancia del enrutador de express
const router = Router();


// Creando datos en la memorian volatil
export const products = [];


// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");

  console.log(`ROOT_DIR: ${ROOT_DIR}`);
  // res.render('add-product', { layout: false });
  res.render('add-product');
});

// POST /admin/add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la desestructuracion de
  // "name" de la petición
  const { title } = req.body;
  // Agregamos el dato en la base de datos
  products.push(title);
  // Redireccionando
  res.redirect('/');
});

// Exportando el enrutador admin
export default router;