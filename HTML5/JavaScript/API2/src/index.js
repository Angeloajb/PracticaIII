const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//accedemos a la funcionalidad de express
const server = express()

//nuestra api va a propocionar los datos en dicha notacion
server.use(express.json())

//permitirá comunicacion entre cliente y servidor
server.use(cors())

server.use(morgan('dev'))

//pongo en funcionamiento las rutas existentes dentro de cliente.route
server.use(require('./routes/cliente.route'))

server.set('port',process.env.PORT || 3001)

//ponemos en marcha el servidor
server.listen(server.get('port'))


console.log('servidor corriendo en puerto: ',server.get('port'))