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

mongoose.connect(
    "mongodb+srv://Charly:Pac26116@cluster0.gyjue.mongodb.net/BookCrossing?retryWrites=true&w=majority"
);

mongoose.set("debug", true);

//MODELOS
require("./models/Usuario");
require("./models/Libro")
require("./models/Intercambio");



/*********************** Mongoose Configuration *******************************/

// Agregamos el código de nuestro router (routes/index.js)
var swaggerUi = require('swagger-ui-express')
var swaggerDocument = require('./swagger.json')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/v1', require('./routes'));


require('./config/passport');



app.use(function(req,res,next){
    var err = new Error('Not Found')
    err.status = 404;
    next(err)
});

//Iniciando el Servidor
var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Escuchando en el puerto ' + server.address().port);
});