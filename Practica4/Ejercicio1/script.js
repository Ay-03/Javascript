/*1. Conversor de euros a dólares. Define una función que transforme euros a dólares.*/ 

function convertir(euros, tasaCambio = 1.01){
    return euros * tasaCambio;
}

let euros = prompt("Introduce la cantidad de euros:");

let dolares  = prompt("Introduce la tasa de cambio (Por defecto 1.01):");

if(dolares === ""){
    console.log(`La cantidad de ${euros} euros equivale a ${convertir(euros)} dolares.`);
}else{
    console.log(`La cantidad de ${euros} euros equivale a 
        ${convertir(euros, dolares).toFixed(2)} dolares.`);
}
    