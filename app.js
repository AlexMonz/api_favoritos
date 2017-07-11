// confifuracion de express

'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito-routes');

app.use(bodyParser.urlencoded({extended:false})); // antes de recibir la peticion http se va a lanzar lo que le indiquemos aqui.
app.use(bodyParser.json());
app.use('/api', api);


module.exports = app; // para que se pueda importar express desde otros ficheros.