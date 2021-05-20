
//las galletitas de Ema
var huevos = 3;
var barraChoco = 1;
var harina = 500; //por gramos
var azucar = 5; //por cucharadas

if(huevos >= 3){

    if(barraChoco >=1){

        if(harina >= 500){
            
            if(azucar >= 5){
                console.log("tienes todos los ingredientes necesarios para cocinar las galletitas!");
            }else{
                console.log("te falta azucar!")
            }

        }else{
            console.log("no tienes suficiente harina")
        }

    }else{
        console.log("no tienes suficiente chocolate")
    }

}else{
    console.log("No tienes suficientes huevos para cocinar galletitas")
}
    
//La tienda de Ropa, ---------------------------------------------
//para calcular los aumentos de prendas

var precioDePrenda = 2000; // ronda entre los 1500 y 3000 pesos
var porcentajeDeAumento = 0.25; //ronda entre 25-100%
var valorAumento;
var precioFinal; // precioDePrenda con el aumento agregado

valorAumento = precioDePrenda * porcentajeDeAumento;
precioFinal = precioDePrenda + valorAumento;

if(precioFinal > 4000){
    console.log("Precio excedido");
}

//---------Dia de Paga, ------------------------------------------
//calcular cobro neto de los repartidores al final del dia 
//(todos cobran igual)

var repartidores = 10; //cantidad de repartidores, numero entero
var esFeriado = false; // true si es feriado, false si no
var gananciaDelDia = 250000; //cuanto recaudo la pizzeria para distribuir
var porcentajeParaSueldos; //porcentaje de gananciaDelDia
var sueldoNetoDeRepartidor; //cuanto gana el repartidor
var gananciaDelComercioFinal; // cuanto gana el comercio luego de pagados los sueldos

//en feriados el porcentajeParaSueldos es del 80% de gananciaDelDia
//mientras que en dias normales es del 65%

if(esFeriado){
    porcentajeParaSueldos = 0.8; 
    
    console.log(`el sueldo para cara repartidor es de ${calculoSueldos(porcentajeParaSueldos)}`);

}else{

    porcentajeParaSueldos = 0.65;
    console.log(`el sueldo para cara repartidor es de ${calculoSueldos(porcentajeParaSueldos)}`);

}

function calculoSueldos(porcentaje){
    let pagoSueldos = gananciaDelDia * porcentaje;
    console.log(`la cantidad de plata para pagar los sueldos es de ${pagoSueldos}`);
    
    sueldoNetoDeRepartidor = pagoSueldos / repartidores;

    gananciaDelComercioFinal = gananciaDelDia - pagoSueldos;
    console.log(`la ganancia final del comercio es de ${gananciaDelComercioFinal}`);

    return sueldoNetoDeRepartidor;
}