/*2. Robot en un pasillo. El pasillo es una secuencia lineal de posiciones: S indica el 
punto de inicio, . una posición libre y # un obstáculo. E*/

let ordenes = ["derecha", "derecha", "izquierda", "izquierda"];
let pasillo = ["S", ".", "#", ".", ".", "."];
let pasilloFinal = [];
let ordenesRechazadas = [];
let posicion = 0;

function calcularDestino(posicionActual,orden) {
    if(orden === "derecha"){
        return posicionActual +1;
    }else {
        return posicionActual -1;
    }
}

for(let i = 0;i< ordenes.length; i++){
     let destino = calcularDestino(posicion,ordenes[i])

     if(destino < 0 || destino >=pasillo.length){
        ordenesRechazadas.push(ordenes[i]);
        document.body.innerHTML += "<p>"+ordenes[i]+" rechazado; el destino queda fuera del pasillo.</p>";
     }else if(pasillo[destino] === "#"){
        ordenesRechazadas.push(ordenes[i]);
        document.body.innerHTML += "<p>"+ordenes[i]+" rechazado; hay un obstáculo en la posición "+destino+"</p>";
     }else {
        posicion = destino;
        document.body.innerHTML += "<p>"+ordenes[i]+" aceptado; posición "+posicion+" </p>";
     }
}

document.body.innerHTML += "<p> Órdenes rechazadas: [" + ordenesRechazadas.join(", ") +"] </p>"


for(let i = 0;i< pasillo.length; i++){
    if(i === posicion){
        pasilloFinal.push("R");
    }else{
        pasilloFinal.push(pasillo[i]);
    }
}

document.body.innerHTML += "<p> Pasillo final: [" + pasilloFinal.join(", ") +"] </p>"







