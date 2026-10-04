/* 6. Pide dos números al usuario y muestra todos los números 
comprendidos entre ellos, incluidos los extremos.*/

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

if (num1 < num2) {
    let numeros = [];
    for (let i = num1; i <= num2; i++) {
        numeros.push(i);
    }
    alert("Los números comprendidos entre " + num1 + " y " + num2 + " son: " + numeros.join(", "));

}else if (num1 === num2) {
    alert("Los números son iguales. No hay números comprendidos entre ellos.");
} else {
    alert("El primer número debe ser menor que el segundo. Por favor, inténtalo de nuevo.");
}