const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do ", "bien? ", "Me ", "a", "le", "gro."]
//obtener un string con la frase corrida : "¡Hola, mundo! ¿Todo bien? Me alegro."
//con join
function completePhrase(arr){
    arr = arr.join('');
    console.log(arr);
}
//con reduce
function completePhrase2(arr){
    return arr.reduce((acc,el)=> acc + el);
}

completePhrase(silabas);
console.log(completePhrase2(silabas));