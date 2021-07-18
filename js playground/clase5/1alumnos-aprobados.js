//crear una funcion para obtener les alumnes aprobados (nota > 6) en un array que
//tiene que devolver solo los ids, el resultado deberia ser ["1234/0", "5512/0", "9874/0"]

const alumnos = [
    { idAlumno: "1234/0", nombre: "maria", nota: 7 },
    { idAlumno: "4459/2", nombre: "juan", nota: 3 },
    { idAlumno: "5877/1", nombre: "pepe", nota: 5 },
    { idAlumno: "5512/0", nombre: "josefina", nota: 9 },
    { idAlumno: "9874/0", nombre: "jaime", nota: 7 },
   ]

function idAprobados(alumnos){
    const aprobados = alumnos.filter(alumno => alumno.nota > 6).map(alumno => alumno.idAlumno);
    console.log(aprobados);
   }
   
idAprobados(alumnos);