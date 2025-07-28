# Trabajo Integrador: API REST de Productos 🛍️

## Descripción

Este proyecto es una **API RESTful** desarrollada con **Node.js**, **Express.js** y **MongoDB** (Mongoose) para la gestión de un catálogo de productos. Permite realizar operaciones CRUD y consultas avanzadas sobre los productos.

## Características

- CRUD completo de productos
- Búsqueda por nombre
- Filtrado por categoría
- Filtrado por rango de precios
- Carga masiva de productos
- Uso de variables de entorno con `.env`
- Conexión a MongoDB local o Atlas

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/pablojac.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env` siguiendo el ejemplo de `.env.example`.
4. Inicia el servidor:
   ```bash
   npm start
   ```
5. Accede a la API en `http://localhost:3000`.

## Uso

La API cuenta con las siguientes rutas:

- `GET /api/productos`: Obtiene todos los productos.
- `GET /api/productos/:id`: Obtiene un producto por su ID.
- `POST /api/productos`: Crea un nuevo producto.
- `PUT /api/productos/:id`: Actualiza un producto existente.
- `DELETE /api/productos/:id`: Elimina un producto.

### Ejemplos

#### Obtener todos los productos

```http
GET /api/productos
```

#### Crear un nuevo producto

```http
POST /api/productos
Content-Type: application/json

{
  "nombre": "Producto Ejemplo",
  "categoria": "Categoria Ejemplo",
  "precio": 100,
  "descripcion": "Descripcion del producto ejemplo",
  "imagen": "url_de_la_imagen"
}
```

## Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica o arreglo de bug (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -m 'Agrega nueva caracteristica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por usar nuestra API REST de Productos! Para más información, consulta la documentación o contacta al soporte.

