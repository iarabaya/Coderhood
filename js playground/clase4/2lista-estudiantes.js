//Dado un array de estudiantes de una universidad,
//mostrar los nombres de los estudiantes de la carrera Ingenieria en computacion.

let alumnos = [
    { nombre: "Ema", carrera: "Ingenieria en computacion" },
    { nombre: "Luis", carrera: "Produccion audiovisual" },
    { nombre: "Pablo", carrera: "Licenciatura en sistemas" },
    { nombre: "Meison", carrera: "Ingenieria en computacion" },
  ];

let estudiantesIngenieria = "";
for (let index = 0; index < alumnos.length; index++) {
    if(alumnos[index].carrera == "Ingenieria en computacion"){
        if(estudiantesIngenieria == ""){
            estudiantesIngenieria += `${alumnos[index].nombre}`;
        }else{
            estudiantesIngenieria += ` y ${alumnos[index].nombre}`;
        }
        
    }
}
console.log(`${estudiantesIngenieria} son estudiantes de ingenieria en computacion`);