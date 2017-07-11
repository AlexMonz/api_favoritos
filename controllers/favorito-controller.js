

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

	res.status(200).send({data: favoritoId});

}

function getFavoritos(req, res){


}

function saveFavorito(req, res){

	var params = req.body;

	res.status(200).send({favorito: params});

}

function updateFavorito(req, res){

	var params = req.body;

	res.status(200).send({update: true, favorito: params});

}

function deleteFavorito(req, res){

	var favoritoId = req.params.id;

	res.status(200).send({delete: true, data: favoritoId});

}

module.exports = {
	prueba,
	getFavorito,
	saveFavorito,
	getFavoritos,
	updateFavorito,
	deleteFavorito
}