let nombre = "Ayoub";
let apellido = "Chikhaoui";

// a. Muestra la concatenación de ambas variables.
let nombreCompleto = nombre + " " + apellido;
console.log("a. Concatenacion: ", nombreCompleto);

// b. Muestra la longitud de la cadena resultante.
console.log("b. Longitud: ", nombreCompleto.length);

// c. Extrae los caracteres de las posiciones 7 a 10. 
console.log("c. Caracteres de la posicion 7 a 10: ", nombreCompleto.slice(7, 11));

// d. Reemplaza tu segundo apellido por otro distinto.
let nombreCompletoModificado = nombreCompleto.replace(apellido, "Machache");
console.log("d. Reemplazado: ", nombreCompletoModificado);

// e. Convierte la cadena a mayúsculas.
console.log("e. Mayusculas: ", nombreCompleto.toUpperCase());

// f. Muestra el último carácter.
console.log("f. Ultimo caracter:", nombreCompleto[nombreCompleto.length - 1]);

// g. Convierte la cadena concatenada en un array, usando el espacio como separador.
let nombreArray = nombreCompleto.split(" ");
console.log("g. Array: ", nombreArray);

// h. Busca la posicion en la que comienza tu apellido.
let posicionApellido = nombreCompleto.indexOf(apellido);
console.log("h. Posicion del apellido: ", posicionApellido);

// i. Usa un template literal para mostrar un mensaje que concatene Bienvenido/a con la cadena creada.
console.log("i. Mensaje: Bienvenido/a " + nombreCompleto);

// j. Genera las iniciales del nombre y los apellidos en mayúsculas a partir del array
let iniciales = (nombreArray[0].substring(0,1)+nombreArray[1].substring(0,1)).toUpperCase();
console.log("j. Iniciales:", iniciales);