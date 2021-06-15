// Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado
//o imprimir un mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.

function dividirNumeros(dividendo, divisor){
    return new Promise ((resolve,reject)=>{
            if(divisor > 0){
                setTimeout(()=>{
                    resolve(dividendo/divisor);
                }, 3000);
            }else{
                reject("error catastrofico");
            }
    });
}

function programa(){
    dividirNumeros(10,0).then(resultado => console.log(resultado)).catch(error => console.log("salio algo mal: "+ error));
}

programa();