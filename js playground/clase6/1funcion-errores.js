//crear funcion que recibe los parametros chance, mensaje y resultado
//chance es el porcentaje de posibilidades de disparar un error
//mensaje es el mensaje del error
//resultado es lo que retorna la funcion si no arrojo un error
let porcentaje = 20;
let mensaje = "404 not found";
let resultado = "todo bien"

function errores(chance, mensaje, resultado){
 if(Math.random() < (chance/100)){
    throw new Error(mensaje);
 }
 return resultado;
}

try{
    let prueba = errores(porcentaje,mensaje, resultado);
    console.log(prueba);
}catch(err){
    console.log(err.message);
}