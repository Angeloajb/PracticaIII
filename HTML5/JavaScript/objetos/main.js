const empleado = {
    nombre: 'Angelo',
    apellido: 'Briceño',
    dni: 18864239,
    correos:{
        gmail: 'ab@gmail.com',
        outlook: 'ab@outlook'
    }
}


//Forma 1

const nombre = empleado.nombre
//const gmail = empleado.correos.gmail

//Forma 2 - Destructuring Objet
/**
 * En primer lugar Se accede a las propiedad "gmail" y "outlook"
 * Posteriormente se inicializan las constantes utilidando el mismo nombre que las propiedadades.
 * Y por ultimo se asignan los datos a las constantes mencionadas. 
 */
const { gmail, outlook } = empleado.correos
const { apellido } = empleado


document.write(gmail)