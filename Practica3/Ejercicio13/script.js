/* 13.Pide un número al usuario y muestra todos sus divisores.*/

let numero = parseInt(prompt("Introduce un número:"));
let divisores = [];

for(let i = 1; i <= numero; i++){
    if(numero % i === 0){
        divisores.push(i);
    }
}
alert("Los divisores de " + numero + " son: " + divisores.join(", "));
    
