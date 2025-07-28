const router = require("express").Router();

const {getTodoslosproductos, getProductoPorCodigo, postCrearProducto, putModificarProducto, deleteEliminarProducto, BuscarProductoPorNombre, FiltrarPorCategoria, FiltrarPorRangoPrecios, CargarMasiva} = require("../controllers/productController.js");

router.get("/api/productos", getTodoslosproductos);
router.get("/api/productos/:codigo", getProductoPorCodigo);
router.get("/api/productos/buscar/:buscar", BuscarProductoPorNombre);
router.get("/api/productos/categoria/:categoria", FiltrarPorCategoria);
router.get("/api/productos/precio/0-1", FiltrarPorRangoPrecios);
router.put("/api/productos/:codigo", putModificarProducto);
router.delete("/api/productos/:codigo", deleteEliminarProducto);
router.post("/api/productos", postCrearProducto);
router.post("/api/productos/masivo", CargarMasiva);

module.exports = {router};
