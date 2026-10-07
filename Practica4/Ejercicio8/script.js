/*8. Analizador de una secuencia de números. Implementa analizar(...numeros)
para recibir una cantidad variable de números y devolver un informe con la suma, 
la media, el mínimo y el máximo.*/

function analizar(...numeros) {
    if (numeros.length === 0) {
        return "No hay datos ";
    }

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i];
        if (isNaN(n) || !isFinite(n)) {
            return "Valor invalido: " + n;
        }
    }

    let suma = 0;
    let min = Math.min(...numeros);
    let max = Math.max(...numeros);

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    let media = suma / numeros.length;
    let total = numeros.length;

    return [total,suma,media,min,max];
}

function presentarInforme(...numeros) {
    let resultado = analizar(...numeros);

    if (typeof resultado === "string") {
        console.log(resultado);
        return;
    }

    if (typeof resultado === "string") {
        console.log(resultado);
        return;
    }

    console.log("--- INFORME DE LA SECUENCIA ---");
    console.log("Numeros analizados: " + resultado[0]);
    console.log("Suma total: " + resultado[1]);
    console.log("Media: " + resultado[2].toFixed(2));
    console.log("Minimo: " + resultado[3]);
    console.log("Maximo: " + resultado[4]);
    console.log("-------------------------------");
}

// Pruebas 
presentarInforme(); 
presentarInforme(7); 
presentarInforme(5, -2, 10, -8, 3); 
presentarInforme(4, 4, 4, 4); 
presentarInforme(10, "hola", 5); 

// Pruebas spread
let misNumeros = [12, 45, -3, 22, 8];
presentarInforme(...misNumeros); 


