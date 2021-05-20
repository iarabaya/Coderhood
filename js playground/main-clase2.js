//-----Pares
var limite1 = 10;
for (let index = 0; index < limite1; index++) {
    if(index%2 === 0){
        console.log(index);
    }
    
}

//-----Contador
var limite2 = 10;
var impares = 0;
var imparesMenores = 0;

for (let index = 0; index < limite2; index++) {
    
    if(index%2 !== 0){
        impares ++;
        if(index < (limite2/2)){
            imparesMenores ++;
        }
    }

}

console.log(`los numeros impares ${impares}`);
console.log(`los numeros impares menores a ${limite2/2} es ${imparesMenores}`);

//-----Contador2
var limite3 = 20;
for (let index = 0; index < limite3; index++) {
    
    
}

//-----La secuencia de Fibonacci