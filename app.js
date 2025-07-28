const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database.js");
const {router} = require("./routes/productRoutes.js");

require("dotenv").config();

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // Para leer JSON en POST

// Conectar a la base de datos MongoDB
connectDB(process.env.MONGO_URI);

app.use(router); // Usar las rutas definidas en productRoutes.js

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});