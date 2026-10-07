/* 5. Usa un bucle para pedir números y calcular su suma y su media. 
Cuando el usuario introduzca un número negativo, muestra los 
resultados; no incluyas ese número en los cálculos.*/

let suma = 0;
let contador = 0;
let numero;

do {
    numero = parseInt(prompt("Introduce un número (introduce un número negativo para terminar):"));
    if (numero >= 0) {
        suma += numero;
        contador++;
    }
} while (numero >= 0);

if (contador > 0) {
    let media = suma / contador;
    alert("La suma es: " + suma + "\nLa media es: " + media);
} else {
    alert("No se introdujeron números válidos.");
}