const usuario1 = { id: "123", username: "pepe24" }
const usuario1perfil = { nombre: "pepe", edad: 27, profesion: "programador" }
//juntar la informacion del usuario que esta en ambos objetos

function infoUser(user, info){
    userInfo = {...user,... info}; //se puede hacer con Object.assign(user, info); también
    return userInfo;
}

console.log(infoUser(usuario1, usuario1perfil));