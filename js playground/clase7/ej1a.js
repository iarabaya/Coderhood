//Reescribir la siguiente función tal que retorne una promesa que se cumpla luego de 3 segundos (usar setTimeout), 
//devolviendo el mismo resultado que la función dada.
function dividirNumeros(dividendo, divisor){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(dividendo/divisor);
        }, 3000);
    });
}
console.log("hola");
dividirNumeros(10,2).then(resultado => console.log(resultado));