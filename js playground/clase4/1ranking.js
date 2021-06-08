//Dado un array de alumnos de Coderhood Academy,
//indicar quien es el que lidera el ranking de paricipacion en Discord

let alumnos = [
    { user: "miafate", ranking: 4 },
    { user: "argentum", ranking: 2 },
    { user: "lucas", ranking: 6 },
    { user: "ema", ranking: 3 },
  ];
  
  let lider = alumnos[0];
  for (let index = 0; index < alumnos.length; index++) {
      if(alumnos[index].ranking < lider.ranking){
         lider = alumnos[index];
      }
  }
  console.log(`${lider.user} lidera el ranking de participación`);