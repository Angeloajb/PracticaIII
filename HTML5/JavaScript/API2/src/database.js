const mariadb = require('mariadb')

const parametros = mariadb.createPool({
    host: 'localhost',
    port:3306,
    user:'root',
    password:'admin',
    database:'apidb'
})

async function obtener_conexion(){
    
    //obtenemos la istancia de conexion
    const conexion = await parametros.getConnection()
    return conexion
}

module.exports = { obtener_conexion }