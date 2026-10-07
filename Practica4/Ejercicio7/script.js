/*7.Menú de conversión con funciones. Construye un menú que se repita hasta elegir «Salir». 
Incluye conversiones entre Celsius y Fahrenheit, kilómetros y millas, y euros y dólares..*/

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function kilometrosAMillas(km) {
    return km * 0.621371;
}

function millasAKilometros(millas) {
    return millas / 0.621371;
}

function eurosADolares(euros, tasaCambio = 1.01) {
    return euros * tasaCambio;
}

function procesarYMostrar(funcionConversion, valor, unidadOrigen, unidadDestino, tasaCambio) {
    let resultado;
    if (tasaCambio !== undefined) {
        resultado = funcionConversion(valor, tasaCambio);
    } else {
        resultado = funcionConversion(valor);
    }
    console.log(valor + " " + unidadOrigen + " equivalen a " + resultado.toFixed(2) + " " + unidadDestino);
}

function pedirNumero(mensaje) {
    while (true) {
        let entrada = prompt(mensaje);
        let numero = parseFloat(entrada);
        if (!isNaN(numero)) {
            return numero;
        }
        alert("Error: Debes introducir un numero valido.");
    }
}

let opcion;

do {
    let menu = "--- MENU DE CONVERSIONES ---\n" +
               "1. Celsius a Fahrenheit\n" +
               "2. Fahrenheit a Celsius\n" +
               "3. Kilometros a Millas\n" +
               "4. Millas a Kilometros\n" +
               "5. Euros a Dolares\n" +
               "6. Salir\n" +
               "Elige una opcion (1-6):";
               
    let entradaOpcion = prompt(menu);
    opcion = parseInt(entradaOpcion);

    switch (opcion) {
        case 1:
            let c = pedirNumero("Introduce los grados Celsius:");
            procesarYMostrar(celsiusAFahrenheit, c, "°C", "°F");
            break;
            
        case 2:
            let f = pedirNumero("Introduce los grados Fahrenheit:");
            procesarYMostrar(fahrenheitACelsius, f, "°F", "°C");
            break;
            
        case 3:
            let km = pedirNumero("Introduce los kilometros:");
            procesarYMostrar(kilometrosAMillas, km, "km", "millas");
            break;
            
        case 4:
            let mi = pedirNumero("Introduce las millas:");
            procesarYMostrar(millasAKilometros, mi, "millas", "km");
            break;
            
        case 5:
            let eur = pedirNumero("Introduce los euros:");
            let tasaInput = prompt("Introduce la tasa de cambio (deja vacio para usar 1.01 por defecto):");
            
            if (tasaInput === null || tasaInput.trim() === "") {
                procesarYMostrar(eurosADolares, eur, "€", "$", undefined);
            } else {
                let tasa = parseFloat(tasaInput);
                if (!isNaN(tasa) && tasa > 0) {
                    procesarYMostrar(eurosADolares, eur, "€", "$", tasa);
                } else {
                    alert("Tasa no valida. Se usara el valor por defecto de 1.01.");
                    procesarYMostrar(eurosADolares, eur, "€", "$", undefined);
                }
            }
            break;
            
        case 6:
            console.log("Saliendo del programa...");
            break;
            
        default:
            alert("Opcion invalida. Por favor, elige un numero del 1 al 6.");
            break;
    }

} while (opcion !== 6);
