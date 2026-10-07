/*3. Operador spread. Define una función que reciba 4 parámetros independientes 
(por ejemplo, cuatro nombres o cuatro valores).*/ 

function procesarParametros(param1, param2, param3, param4) {
    console.log("Parámetro 1:", param1);
    console.log("Parámetro 2:", param2);
    console.log("Parámetro 3:", param3);
    console.log("Parámetro 4:", param4);
}

let parametros = ["valor1", "valor2", "valor3", "valor4"];
procesarParametros(...parametros);