/* 12. Muestra el mensaje de confirmación ¿Deseas continuar?. Según el 
usuario acepte o rechace, muestra un mensaje distinto.*/

let confirmacion = confirm("¿Deseas continuar?");

while(confirmacion === true){
   alert("Has aceptado continuar.");
   confirmacion = confirm("¿Deseas continuar?");
}
if(confirmacion === false){
   alert("Has rechazado continuar.");
}