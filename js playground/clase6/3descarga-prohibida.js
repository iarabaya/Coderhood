//crear una funcion pedirUsuario que retorne un usuario al azar 
let lista = [
    { id: '19310', nombre:"Bautista"},
    { id: '90010', nombre:"Ema"},
    { id: '00519', nombre:"Lucas"},
    { id: '00000', nombre:"Meison"}
]

function pedirUsuario(array){
    let userIndex = Math.floor(Math.random() * array.length);
    // console.log(userIndex);
    let user = array[userIndex];

    if(user.id == '00000'){
        throw new Error('ForbiddenInformation');
    }
    return user;
}

function pedirInformacion(arreglo){
    try {
        let usuario = pedirUsuario(arreglo);
        return usuario;
    } catch (error) {
        throw new Error (error.message);
    }finally{
        let posibilidad = Math.random();
        if(posibilidad <= 0.10){
            //10% de posibilidad de disparar
            throw new Error('AlienError');
        }else if(posibilidad > 0.10 && posibilidad <= 0.20){
            //18% de posibilidad de disparar
            throw new Error('InternalError');
        }else if(posibilidad > 0.20 && posibilidad <= 0.30){
            //25% de posibilidad de disparar
            throw new Error('NetworkError');
        }  
    }   
}

try {
    let resultado = pedirInformacion(lista);
    console.log(resultado);

} catch (error) {
    console.log(`Error: ${error.message}`);
}

