/*5. Informe de notas de una clase. Crea un programa que solicite notas de 0 a 10 
hasta que se introduzca -1, que será la señal de fin y no se incluirá en los cálculos.*/

function esNotaValida(entrada) {
    switch (true) {
        case (entrada === null || entrada.trim() === ""):
            return false;
        case (isNaN(entrada)):
            return false;
        case (entrada == -1):
            return false;
        case (entrada >= 0 && entrada <= 10):
            return true;
        default:
            return false;
    }
}

function clasificarNota(nota) {
    switch (true) {
        case (nota >= 0 && nota < 5):
            return "Suspenso";
        case (nota >= 5 && nota < 7):
            return "Aprobado";
        case (nota >= 7 && nota < 9):
            return "Notable";
        case (nota >= 9 && nota <= 10):
            return "Sobresaliente";
    }
}

function calcularMedia(listaNotas) {
    let suma = 0;
    for (let i = 0; i < listaNotas.length; i++) {
        suma += listaNotas[i];
    }
    return suma ;
}

let notas = [];
let continuar = true;

while (continuar) {
    let nota = prompt("Introduce una nota de 0 a 10 (o -1 para terminar):");

    if (esNotaValida(nota)) {
        notas.push(nota);
    } else if (nota == -1) {
        continuar = false;
    }
    else {
        alert("Nota no valida. Intentalo de nuevo.");
    }
}

if (notas.length === 0) {
    console.log("No se introdujo ninguna nota valida.");
} else {
    let totalNotas = notas.length;
    let media = calcularMedia(notas);
    
    let max = notas[0];
    let min = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > max) {
            max = notas[i];
        }
        if (notas[i] < min) {
            min = notas[i];
        }
    }
    
    console.log("Notas validas introducidas: " + totalNotas);
    console.log("Media de la clase: " + media);
    console.log("Nota maxima: " + max);
    console.log("Nota minima: " + min);
}