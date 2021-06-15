import axios from "axios";


function programa(){
    axios.get("inserte api").then((resultado)=>{
        console.log("el resultado es: " + JSON.stringify(resultado.data));
    }).catch((error) => {
        console.log("Lo sentimos ocurrió un error: "+ error.message);
    })
}

async function programa2(){
    const resultado = await axios.get("inserte api");
    console.log("el resultado es: " + JSON.stringify(resultado.data));
}