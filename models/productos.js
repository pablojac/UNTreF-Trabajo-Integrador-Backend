const mongoose = require("mongoose");// Importar el modelo de granjas si es necesario

// Definición del esquema para el modelo Producto
const productoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: [String]
});
const Producto = mongoose.model("Producto", productoSchema);
module.exports = {Producto};