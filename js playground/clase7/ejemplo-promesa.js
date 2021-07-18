function sleep(milisegundos){
    return new Promise((resolve, reject)=>{
        if(milisegundos < 5000){
            setTimeout(()=>{
                resolve();
            },milisegundos)
        }else{
            reject("Tanto tiempo no, dormilón.")
        }
    })
}

async function programa(){
    try{
        console.log("Hola");
        await sleep(1000);
        console.log("Chau");
        await sleep(3000);
        console.log("Ya me fui")
    }catch(error){
        console.log ("Lo sentimos ocurrió un error: " + error);
    }
}

programa();