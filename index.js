
'use strict'

var app = require('./app'); // importamos expres al index desde app.js
var port = process.env.PORT || 3678;

app.listen(port, function(){
	console.log('API REST FAVORITOS funcionando en http://localhost:'+port);
});