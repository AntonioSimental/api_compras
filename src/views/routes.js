const express = require('express');
const router = express.Router();
const db = require('../database/conexion.js');
const ComprasController = require('../controllers/comprasController.js');

router.post('/', ComprasController.comprar);
router.delete('/delete/:id', ComprasController.borrarCompra);
router.get('/', ComprasController.mostrarCompras);
router.patch('/actualizar/:id', ComprasController.actualizarCompra);

module.exports = router;