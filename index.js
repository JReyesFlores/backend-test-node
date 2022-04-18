const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');

// Creamos el servidor
const app = express();

// conectamos a la base de datos
conectarBD();

// habilitando los cors (previamente "npm install cors")
app.use(cors());

// habilitamos las solicitudes json
app.use(express.json());

// Habilitando las rutas a traves de un controlador
app.use('/api/productos', require('./routes/producto'));

// Definimos ruta principal
/*
app.get('/', (request, response) => {
  response.send('hola mundo');
});
*/
app.listen(4000, () => {
  console.log('El servidor esta corriendo perfectamente!');
});
