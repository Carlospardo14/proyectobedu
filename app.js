// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la APP
var app = express();

//Configuración Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");
var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
  process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

mongoose.set("debug", true);

//MODELOS
require("./models/Usuario");
require("./models/Libro")
require("./models/Intercambio");
require('./config/passport');
//CONFIGURACION DE SWAGGER
var swaggerUi = require('swagger-ui-express')
var swaggerDocument = require('./swagger.json')
/*********************** Mongoose Configuration *******************************/


//Ruta del Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));


//Error 404
app.use(function(req,res,next){
    var err = new Error('Not Found')
    err.status = 404;
    next(err)
});

//Iniciando el Servidor
var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Escuchando en el puerto ' + server.address().port);
});