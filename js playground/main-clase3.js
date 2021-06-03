function isEven(number){
    return number%2 == 0? true : false;
}

function invertirFrase(n){
    let frase = "";
    
    for (let i = n.length - 1; i >= 0; i--) {
        frase += n[i];
        }
        return frase;
}

function reversePhrase(text){
  let phrase = text.split(""); 
    phrase = phrase.reverse();
    console.log(phrase.join(""));
}

function sortNumbers(num1, num2, num3){
    let mayor;
    let min;

    if(num1 > num2 && num1 > num2){
        mayor = num1
    }else{
        if(num2 > num1 && num2 > num3){
            mayor = num2;
        }else{
            mayor = num3;
        }
    }

    if(num1 < num2 && num1 < num3){
        min = num1
    }else{
        if(num2 < num1 && num2 < num3){
            min = num2;
        }else{
            min = num3;
        }
    }
    let mid = num1 + num2 + num3 - mayor - min;

    return `${mayor} , ${mid} , ${min}`;
}

function minNum(num_1, num_2, num_3) {
    let min = 0;
    if (num_1 > num_2) {
        if (num_3 > num_2) {
            min = num_2;
        } else {
            min = num_3;
        }
    } else {
        if (num_3 > num_1) {
            min = num_1;
        } else {
            min = num_3;
        }
    }
    return min;
}

function maxNum(num_1, num_2, num_3) {
    let max = 0;
    if (num_1 < num_2) {
        if (num_3 < num_2) {
            max = num_2;
        } else {
            max = num_3;
        }
    } else {
        if (num_3 < num_1) {
            max = num_1;
        } else {
            max = num_3;
        }
    }
    return max;
}

function ordenar(num_1, num_2, num_3) {
    let max = maxNum(num_1, num_2, num_3);
    let min = minNum(num_1, num_2, num_3);
    let medio = num_1 + num_2 + num_3 - max - min;
    return max + " " + medio + " " + min;
}