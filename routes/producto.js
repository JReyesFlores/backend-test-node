const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
router.post('/', productoController.crearProducto);

// api/productos
router.get('/', productoController.obtenerProductos);

// api/productos
router.get('/:id', productoController.obtenerProductosById);

// api/productos
router.put('/:id', productoController.actualizarProducto);

// api/productos
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;
