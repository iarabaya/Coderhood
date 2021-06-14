//crear una funcion que no recibe parametros que devuelve el objeto
// que corresponde a los datos de usuario
const persona = {
    id: 19310,
    nombre: "Bautista",
    apellido: "Di Santo"
}

const NetworkError = 'NetworkError: Hubo un problema en la conexion de internet';
const InternalError = 'InternalError: Hubo un error interno en el servidor';
const AlienError = 'AlienError: Una anomalia intercepto la informacion';

function pedirInformacion() {
    let posibilidad = Math.random();
    if(posibilidad <= 0.10){
        //10% de posibilidad de disparar
        throw new Error(AlienError);
    }else if(posibilidad > 0.10 && posibilidad <= 0.28){
        //18% de posibilidad de disparar
        throw new Error(InternalError);
    }else if(posibilidad > 0.28 && posibilidad <= 0.53){
        //25% de posibilidad de disparar
        throw new Error(NetworkError);
    }

    return console.log(persona);
}

try {
    pedirInformacion();
} catch (error) {
    console.log(error.message);
}