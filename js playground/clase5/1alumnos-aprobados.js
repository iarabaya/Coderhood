//obtener el numero de alumnos aprobados (nota > 6) en un array: ["1234/0", "5512/0", "9874/0"]

const alumnos = [
    { numAlumno: "1234/0", nombre: "maria", nota: 7 },
    { numAlumno: "4459/2", nombre: "juan", nota: 3 },
    { numAlumno: "5877/1", nombre: "pepe", nota: 5 },
    { numAlumno: "5512/0", nombre: "josefina", nota: 9 },
    { numAlumno: "9874/0", nombre: "jaime", nota: 7 },
   ]

function numAprobados(alumnos){
    const aprobados = alumnos.filter(alumno => alumno.nota > 6).map(alumno => alumno.numAlumno);
    console.log(aprobados);
   }
   
numAprobados(alumnos);