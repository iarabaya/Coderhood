const alumnos = [
    { numAlumno: "1234/0", nombre: "maria", nota: 7 },
    { numAlumno: "4459/2", nombre: "juan", nota: 3 },
    { numAlumno: "5877/1", nombre: "pepe", nota: 5 },
    { numAlumno: "5512/0", nombre: "josefina", nota: 9 },
    { numAlumno: "9874/0", nombre: "jaime", nota: 7 },
   ]
//obtener el numero de alumnos aprobados (nota > 6) en un array: ["1234/0", "5512/0", "9874/0"]
function numAprobados(alumnos){
    const aprobados = alumnos.filter(alumno => alumno.nota > 6).map(alumno => alumno.numAlumno);
    console.log(aprobados);
   }
   
numAprobados(alumnos);

   const productos = [
    { id: "1", nombre: "lapiceras", stock: 164 },
    { id: "2", nombre: "marcadores", stock: 0 },
    { id: "3", nombre: "cartulinas", stock: 25 },
    { id: "4", nombre: "cartucheras", stock: 0 },
    { id: "5", nombre: "mochilas", stock: 4 }
   ]
//agregar propiedad agotado a cada objeto con el valor true si el stock es 0 o false si no lo es
   function checkStock(prod){
        prod = prod.map( product => {
            product.stock == 0? product["agotado"] = true : product["agotado"]= false;
            return product;
    } );
       console.log(prod);
   }

checkStock(productos);

const jugadores = [
    { 
        ID: "1", 
        clase: "mago", 
        nivel: 35, 
        inventario: ["Manzana", "Poción de maná", "Vara mágica"] 
    },
    { 
        ID: "2", 
        clase: "ladron", 
        nivel: 65, 
        inventario: ["Daga", "Katana de fuego", "Poción de vida"] 
    },
    { 
        ID: "4", 
        clase: "curandero", 
        nivel: 73, 
        inventario: ["Vara mágica", "Armadura ligera"] 
    },
    { 
        ID: "3", 
        clase: "espadachin", 
        nivel: 36, 
        inventario: ["Casco de hierro", "Katana de fuego", "Pocíón de velocidad"] 
    },
    { 
        ID: "5", 
        clase: "mago", 
        nivel: 26, 
        inventario: ["Carta de PecoPeco", "Oridecon", "Poción de concentración"] },
   ]

//obtener lista de IDs de usuarios que tengan el objeto prohibido "Katana de fuego": ["2", "3"]

function usersWithProhibitedObject(listUsers, prohibitedObject){
    listUsers = listUsers.filter(user => user.inventario.some(e => e == prohibitedObject)).map(user => user.ID);
    console.log(listUsers)
}

usersWithProhibitedObject(jugadores, "Katana de fuego");

const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do ", "bien? ", "Me ", "a", "le", "gro."]
//obtener un string con la frase corrida : "¡Hola, mundo! ¿Todo bien? Me alegro."

function completePhrase(arr){
    arr = arr.join('');
    console.log(arr);
}

completePhrase(silabas);
