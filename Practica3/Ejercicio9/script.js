/* 9.Guarda una contraseña en una variable y pide al usuario que la 
introduzca hasta que acierte.*/

let contraseña = "123456";
let intento = prompt("Introduce la contraseña:");

while (intento !== contraseña) {
    intento = prompt("Contraseña incorrecta. Inténtalo de nuevo:");
}

alert("Contraseña correcta. Bienvenido.");