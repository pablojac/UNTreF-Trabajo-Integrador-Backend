const { Producto } = require("../models/productos.js");

// Obtener todos los productos
const getTodoslosproductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
};

// Obtener un producto por su código
const getProductoPorCodigo = async (req, res) => {
  try {
    const producto = await Producto.findOne({ codigo: req.params.codigo });
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener producto" });
  }
};

// Crear un nuevo producto
const postCrearProducto= async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: "Error al crear producto", detalle: error.message });
  }
};

// Modificar un producto existente
const putModificarProducto= async (req, res) => {
  try {
    const producto = await Producto.findOneAndUpdate(
      { codigo: req.params.codigo },
      req.body,
      { new: true }
    );
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json({ error: "Error al modificar producto", detalle: error.message });
  }
};

// Eliminar un producto
const deleteEliminarProducto= async (req, res) => {
  try {
    const producto = await Producto.findOneAndDelete({ codigo: req.params.codigo });
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};

// Buscar productos por término en el nombre
const BuscarProductoPorNombre = async (req, res) => {
  try {
    const q = req.query.q || "";
    const productos = await Producto.find({ nombre: { $regex: q, $options: "i" } });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar productos" });
  }
};

// Filtrar productos por categoría
const FiltrarPorCategoria = async (req, res) => {
  try {
    const productos = await Producto.find({ categoria: req.params.categoria });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar productos por categoría" });
  }
};

// Filtrar productos por rango de precio
const FiltrarPorRangoPrecios= async (req, res) => {
  try {
    const min = parseFloat(req.params.min);
    const max = parseFloat(req.params.max);
    const productos = await Producto.find({ precio: { $gte: min, $lte: max } });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar productos por precio" });
  }
};

// Carga masiva de productos
const CargarMasiva = async (req, res) => {
  try {
    const productos = await Producto.insertMany(req.body);
    res.status(201).json(productos);
  } catch (error) {
    res.status(400).json({ error: "Error en carga masiva", detalle: error.message });
  }
};

// Exportar las funciones
module.exports = {getTodoslosproductos, 
  getProductoPorCodigo,
  postCrearProducto,
  putModificarProducto, 
  deleteEliminarProducto,
  BuscarProductoPorNombre,
  FiltrarPorCategoria,
  FiltrarPorRangoPrecios,
  CargarMasiva};