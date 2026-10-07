/*2. Parámetros rest. Define una función que reciba 3 parámetros y procese el resto de 
parámetros recibidos con rest. La función mostrará los parámetros recibidos.*/ 

function procesarParametros(param1, param2, param3, ...rest) {
    console.log("Parámetro 1:", param1);
    console.log("Parámetro 2:", param2);
    console.log("Parámetro 3:", param3);
    console.log("Resto de parámetros:", rest);
}

procesarParametros("valor1", "valor2", "valor3", "valor4", "valor5", "valor6");