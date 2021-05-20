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
var limite3 = 30;
var pares3 = 0;
var final3 = 2;
var multiplosDe3 = 0;
var suma = 0;

for (let index = 0; (index <= limite3) && (pares3 < final3); index++) {
    if(index%2 === 0){
        pares3++;
        console.log(`${index} es numero par`);
    }
    if(index%3 === 0){
        multiplosDe3 ++;
        console.log(`${index} es multiplo de 3`);
    }

    suma = suma + index; 
}
 
console.log(`hay ${pares3} numeros pares`);
console.log(`hay ${multiplosDe3} multiplos de 3`);
console.log(`la suma de todos los numeros es de ${suma}`);

//-----La secuencia de Fibonacci
console.clear();

const limite4 = 6;
var num1 = 0;
var num2 = 0;
var suma4 = 0;

for (let index = 0; index < limite4; index++) {
    

    suma4 = num1 + num2;
    
    console.log(num2);

    if(num2 === 0){
        num2 = 1;
        
    }else{
        num1 = num2;
        num2 = suma4;
    }

}