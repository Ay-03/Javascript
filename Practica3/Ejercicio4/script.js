/* 4. Muestra los números pares del 1 al 20.*/

let numero = [];

for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        numero.push(i);
    }
}
alert(numero);