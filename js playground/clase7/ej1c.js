//Reescribir la función programa del ejercicio 1b anterior para que use async y await
function dividirNumeros(dividendo, divisor){
    return new Promise ((resolve,reject)=>{
            if(divisor > 0){
                setTimeout(()=>{
                    resolve(dividendo/divisor);
                }, 3000);
            }else{
                reject("no se puede dividir por 0");
            }
    });
}

async function programa(){
    try{
        const resultado = await dividirNumeros(10,0);
        console.log(resultado);
    }catch(error){
        console.log("lo que salio mal fue: "+ error);
    }
    
}

programa();