// Variables iniciales
let radio = 3.5;
const PI = Number(Math.PI.toFixed(5)); // 3.14159

// g. Comprueba con Number.isFinite()
if (Number.isFinite(radio) && radio > 0) {
    
    // Cálculo del área (A = π × r²)
    let area = PI * Math.pow(radio, 2);

    // a. Muestra el área por consola.
    console.log("a. Area:", area);

    // b. Convierte el resultado a string y muéstralo.
    let areaString = area.toString();
    console.log("b. String:", areaString);

    // c. Muéstralo como string con tres decimales.
    let areaTresDecimales = area.toFixed(3);
    console.log("c. String de 3 decimales:", areaTresDecimales);

    // d. Convierte el área en un entero y muéstralo.
    let areaEntero = Math.trunc(area); // o parseInt(area)
    console.log("d. Entero truncado:", areaEntero);

    // e. Redondea el área al entero más cercano con Math.
    let areaRedondeado = Math.round(area);
    console.log("e. Redondeado mas cercano:", areaRedondeado);

    // f. Multiplica el área por un entero aleatorio entre 1 y 20.
    let aleatorio = Math.floor(Math.random() * 20) + 1;
    let areaMultiplicada = area * aleatorio;
    console.log("f. Multiplicado por " + aleatorio + ":", areaMultiplicada);

} else {
    console.log("El radio no es valido.");
}
