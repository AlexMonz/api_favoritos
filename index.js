
'use strict'
var mongoose = require('mongoose');
var app = require('./app'); // importamos expres al index desde app.js
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://localhost:27017/favoritos', (err, res) =>{

	if(err){

		throw err;

	}else{

		console.log('conexion a mongodb correcta');
		app.listen(port, function(){
			console.log('API REST FAVORITOS funcionando en http://localhost:'+port);
		});

	}

});

