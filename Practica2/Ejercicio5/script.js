
let edad = parseInt(prompt("Introduce tu edad:"));
let nota = parseFloat(prompt("Introduce tu nota media (con 3 decimales):"));

// d. Crea una variable booleana con valor true.
let valorB = true;

// f. Comprobación de seguridad (Validación)
let edadValida = !isNaN(edad) && edad >= 0;
let notaValida = !isNaN(nota) && nota >= 0 && nota <= 10;
let divisionSegura = edad !== 0; // Evitamos dividir entre cero si la edad fuera el divisor

if (edadValida && notaValida && divisionSegura) {

    // a. Muestra la nota con dos decimales.
    console.log("a. Nota con dos decimales:", nota.toFixed(2));

    // b. Calcula y muestra las operaciones básicas.
    let suma = edad + nota;
    let resta = edad - nota;
    let multiplicacion = edad * nota;
    let division = nota / edad; 

    console.log("b. Suma:", suma);
    console.log("b. Resta:", resta);
    console.log("b. Multiplicación:", multiplicacion);
    console.log("b. División:", division);

    // c. Convierte el resultado de la división a string y muéstralo.
    let divisionString = division.toString();
    console.log("c. División como string:", divisionString);

    // e. Usa typeof para mostrar el tipo de las variables utilizadas.
    console.log("e. Tipo de 'edad':", typeof edad);
    console.log("e. Tipo de 'nota':", typeof nota);
    console.log("e. Tipo de 'esEstudiante':", typeof valorB);
    console.log("e. Tipo de 'suma':", typeof suma);
    console.log("e. Tipo de 'divisionString':", typeof divisionString);

} else {
    console.log("Error en los datos:");
    if (!edadValida) console.log("La edad debe ser un número válido y positivo.");
    if (!notaValida) console.log("La nota debe ser un número entre 0 y 10. con tres decimales ");
    if (!divisionSegura) console.log("No se puede calcular la división porque la edad es 0.");
}
