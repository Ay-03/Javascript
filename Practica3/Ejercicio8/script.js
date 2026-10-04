/* 8. Pide al usuario una palabra y calcula cuántas vocales contiene.*/

let palabra = prompt("Introduce una palabra:");

let vocales = "aeiouAEIOU";
let contador = 0;

for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
        contador++;
    }
}

alert("La palabra '" + palabra + "' contiene " + contador + " vocales.");
