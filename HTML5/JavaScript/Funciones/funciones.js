function recolectar()
{
   const dato1 = document.getElementById("inp_d1").value
   const dato2 = document.getElementById("inp_d2").value

   const tipo_operacion = document.getElementById("slt_operacion").value

   const respuesta = calcular(dato1,dato2,tipo_operacion)

   document.getElementById("h_resultado").textContent = "Resultado: " + respuesta
  // console.log(respuesta)
}


function calcular(dato1,dato2,operacion)
{
    let resulado = null

    if(operacion == 0){
    //alert('Sumar')
       resultado = Number(dato1) + Number(dato2)
    }
    if(operacion == 1){
    //alert('Restar')
       resulado = dato1 - dato2
    }
    if(operacion == 2){
    //alert('multiplicar')
        resulado = dato1 * dato2
    }
    if(operacion == 3){
    //alert('Dividir')
        resulado = dato1 / dato2
    }
    //La Respuesta que retorna o entrega la funcion calcular
    return resulado
}

/*
     alert('multiplicar')

*/

function cambiar_label(){
    const operacion = document.getElementById("slt_operacion").value

    if(operacion ==0){
        document.getElementById("lb_1").textContent = "Corriente"
        document.getElementById("lb_2").textContent = "Resistencia"
    }

    if(operacion == 1){
        document.getElementById("lb_1").textContent = "Tension"
        document.getElementById("lb_2").textContent = "Corriente"
    }
    if(operacion == 2){
    document.getElementById("lb_1").textContent = "Tension"
    document.getElementById("lb_2").textContent = "Resistencia"
  }
  
}