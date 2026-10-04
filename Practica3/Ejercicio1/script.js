/* 1. Pide al usuario dos números. Comprueba si son iguales, si el primero 
es mayor que el segundo o si el segundo es mayor que el primero. 
Muestra un mensaje de alerta con el resultado.*/

let primero = parseInt(prompt("Introduce el primer número:"));
let segundo = parseInt(prompt("Introduce el segundo número:"));

if(primero > segundo){
    alert("El primer número es mayor que el segundo.");
}else if(primero < segundo){
    alert("El segundo número es mayor que el primero.");
}else{
    alert("Los dos números son iguales.");
}