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