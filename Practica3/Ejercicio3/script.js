/* 3. Muestra una sola vez el siguiente menú y, según la opción elegida, 
indica el nivel del usuario. Usa switch.*/

let  opcion = parseInt(prompt(
    "1. Usuario principiante\n"
    + "2. Usuario intermedio\n"
    + "3. Usuario avanzado\n"
    + "4. Salir\n"
    + "Introduce una opción (1-4):")
);

switch (opcion) {
    case 1:
        alert("Tu nivel es: Usuario principiante");
        break;
    case 2:
        alert("Tu nivel es: Usuario intermedio");
        break;
    case 3:
        alert("Tu nivel es: Usuario avanzado");
        break;
    case 4:
        alert("Has seleccionado: Salir. ¡Hasta luego!");
        break;
    default:
        alert("Opción no válida. Por favor, elige un número del 1 al 4.");
        break;
}
 