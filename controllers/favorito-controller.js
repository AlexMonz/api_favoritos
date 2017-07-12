'use strict'

var Favorito = require('../models/model-favorito');

function prueba(req, res){ // funcion de call-back

	//recogemos el parametro por url.

	if(req.params.nombre){
		var nombre = req.params.nombre;
	}else{
		var nombre = "Sin parametro nombre en url";
	}

	// devolvemos algo usnado res.send y tambien se le puede añadir para que devuelva un status.
	res.status(200).send({data: [1,2,3,4] , texto: "Hola Mundo con Nodejs y express - "+nombre});

}


function getFavorito(req, res){

	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, function(err, favorito){

		if(err){
			res.status(500).send({message: 'Error al devolver el marcador'});
		}else{
			if(!favorito){
			res.status(404).send({message: 'No hay marcadores'});
		
		}else{

			res.status(200).send({favorito});

			}

		}
	});

	

}

function getFavoritos(req, res){

	Favorito.find({}).sort('-_id').exec((err, favoritos)=>{

		if(err){

			res.status(500).send({message: 'Error al devolver los marcadores'});
			// status 500 error en el servidor al procesar algo.
		}else{
			if(!favoritos){
			res.status(404).send({messange: 'No hay marcadores'});

			}else{

			res.status(200).send({favoritos});
		}

		}

	});


}

function saveFavorito(req, res){

	var favorito = new Favorito();

	var params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored) =>{

		if(err){

			res.status(500).send({message: 'Error al guardar el marcador'});
			// status 500 error en el servidor al procesar algo.
		}else{

			res.status(200).send({favorito: favoritoStored});

		}

	});

}

function updateFavorito(req, res){

	var favoritoId = req.params.id;
	var update = req.body;


	Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdate) =>{

			if(err){

				res.status(500).send({message: 'Error al actualizar el marcador'});
				// status 500 error en el servidor al procesar algo.
			}else{

				res.status(200).send({favorito: favoritoUpdate});

			}

	});



	

}

function deleteFavorito(req, res){

		var favoritoId = req.params.id;

		Favorito.findById(favoritoId, function(err, favorito){

		if(err){
			res.status(500).send({message: 'Error al devolver el marcador'});
		}if(!favorito){
			res.status(404).send({message: 'No hay marcadores'});
		}else{

			favorito.remove(err => {

				if(err){
					res.status(500).send({message: 'Error al eliminar el marcador'});
				}else{
					res.status(200).send({messaje: 'El marcador se ha eliminado'});
				}

			});
			
		}

			
	});

}

module.exports = {
	prueba,
	getFavorito,
	saveFavorito,
	getFavoritos,
	updateFavorito,
	deleteFavorito
}