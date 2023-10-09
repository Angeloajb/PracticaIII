const express = require('express')

//ejecutamos express y nos retorna funcionalidades
const server = express()

//indicamos un puerto de comunicacion
server.set('port',3000)

//busca el puerto indicado anterior mente
server.listen( server.get('port') )

console.log('servidor corriendo en el puerto: ',server.get('port') )

