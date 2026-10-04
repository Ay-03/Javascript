/* 2. Amplía el ejercicio anterior: comprueba que ambos valores sean 
números válidos y distintos de cero antes de compararlos. Si algún 
valor no es válido, muestra un mensaje de error.*/

let primero = parseInt(prompt("Introduce el primer número:"));
let segundo = parseInt(prompt("Introduce el segundo número:")); 

if(isNaN(primero) || isNaN(segundo) || primero === 0 || segundo === 0){
    alert("Error: Debes introducir numeros validos y distintos de cero");
}else{
    if(primero > segundo){
        alert("El primer numero es mayor que el segundo");
    }else if(primero < segundo){
        alert("El segundo numero es mayor que el primero");
    }else{
        alert("Los dos numeros son iguales");
    }
}
