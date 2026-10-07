/*6.Presupuesto de un viaje por carretera. Pide la distancia del viaje en kilómetros, 
el consumo del vehículo en litros cada 100 km, el precio del litro de combustible y 
el número de viajeros.*/

function calLitros(distancia, consumo) {
    return (distancia * consumo) / 100;
}

function costeTotal(litros, precioCombustible ) {
    return litros * precioCombustible;
}

function costePorViajero(costeTotal, viajeros) {
    if (viajeros === 0) {
        return 0;
    }
    return costeTotal / viajeros;
}

function mostrarInforme(funcionCalculo, datoPrincipal, variableAdicional) {
    let resultado = funcionCalculo(datoPrincipal, variableAdicional);
    return resultado.toFixed(2);
}

let distancia, consumo, precioCombustible, viajeros;

while (true) {
    let entrada = prompt("distancia en kilometros");
    distancia = parseFloat(entrada);
    if (!isNaN(distancia) && distancia > 0) {
        break;
    }
    alert("La distancia debe ser un numero mayor que cero");
}

while (true) {
    let entrada = prompt("Consumo del vehiculo (litros cada 100 km)");
    consumo = parseFloat(entrada);
    if (!isNaN(consumo) && consumo > 0) {
        break;
    }
    alert("Error: El consumo debe ser un numero mayor que cero");
}

while (true) {
    let entrada = prompt("Precio del litro de combustible (deja vacio para usar 1.60 por defecto):");
    if (entrada === null || entrada.trim() === "") {
        precioCombustible = 1.60;
        break;
    }
    precioCombustible = parseFloat(entrada);
    if (!isNaN(precioCombustible) && precioCombustible >= 0) {
        break;
    }
    alert("Error: El precio debe ser un numero valido mayor o igual a cero");
}

while (true) {
    let entrada = prompt("Numero de viajeros");
    viajeros = parseInt(entrada);
    if (!isNaN(viajeros) && viajeros >= 0) {
        break;
    }
    alert("Error: El numero de viajeros debe ser un numero entero mayor o igual a cero");
}

let litrosNecesarios = calLitros(distancia, consumo);

let costeTotalTexto = mostrarInforme(costeTotal, litrosNecesarios, precioCombustible);

let costeTotalNumero = parseFloat(costeTotalTexto);
let costePorViajeroTexto = mostrarInforme(costePorViajero, costeTotalNumero, viajeros);

console.log("Combustible estimado: " + litrosNecesarios.toFixed(2) + " litros");
console.log("Coste total del viaje: " + costeTotalTexto + " €");

if (viajeros === 0) {
    console.log("Coste por viajero: No se puede calcular porque hay 0 viajeros.");
} else {
    console.log("Coste por viajero: " + costePorViajeroTexto + " €");
}


