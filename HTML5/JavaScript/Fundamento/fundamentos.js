function mostrar () {
    alert('Probando mi función')
}



//FUNDAMENTOS:

//VARIABLES  (let y var)

//se declara variable y se asigna un valor
var edad = 10
var edad = 20
console.log('Edad: ', edad) //imprime un 20


//Declare una unica vez la variable usando LET
let edades = 15
edades = 20
console.log('Edades', edades)


var antiguedad = 10
if(antiguedad > 5){
    var antiguedad = 20   //esta linea esta de mas ya que tengo una variable global fuera del if 
    console.log("Antiguedad", antiguedad);
}
console.log("Antiguedad", antiguedad)



let numero = 10
if(numero > 5){
    let numero = 20    //Si quiero usar la variable global no declaro nuevamente let
    console.log("Numero: ", numero)
}
console.log("Numero: ", numero)





//CONSTANTES:
const dni = 18864239
//dni = 381234743       //no puedo modificar las constantes, largaria un error de sintaxis, es decir esta linea no iria

console.log("DNI: ", dni)


const age = 22
if(age > 21){
    const age = 35
    console.log("Age: ", age)
}
console.log("Age: ", age)



//ARREGLOS:
const miArreglo = [10,20,30]
miArreglo.push(40)
console.log("MiArreglo: ", miArreglo)




//OBJETOS:
const persona = {
    nombre:"Juanito", 
    edad: 20
}
console.log(nombre,edad)