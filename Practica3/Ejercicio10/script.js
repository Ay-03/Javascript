/* 10. El adivino: genera un número aleatorio entre 1 y 10 y pide al 
usuario que lo adivine. Repite la pregunta hasta que acierte e 
indica si cada intento es menor o mayor que el número secreto.*/

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento = parseInt(prompt("Introduce un número entre 1 y 10:"));

while (intento !== numeroSecreto) {
    if (intento < numeroSecreto) {
        intento = parseInt(prompt("El número es mayor. Inténtalo de nuevo:"));
    } else {
        intento = parseInt(prompt("El número es menor. Inténtalo de nuevo:"));
    }
}

alert("¡Correcto! El número era " + numeroSecreto);