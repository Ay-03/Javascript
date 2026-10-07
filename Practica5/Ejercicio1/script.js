const palabras = ["sol", "montaña", "río", "bosque", "mariposa", "luz", "montaña"];

function aparece(palabra){
    let veces = 0;
    for(let i = 0;i < palabras.length ; i++){
        if(palabra === palabras[i]){
            veces++;
        }
    }
    return veces;
}


function masDeCuatro(){
    let nuevo = [];

    for(let i = 0;i < palabras.length ; i++){
        if(palabras[i].length > 4 ){
            nuevo.push(palabras[i]);
        }
    }
    return nuevo;
}

function primeraPosicion(palabra){
    return palabras.indexOf(palabra);
}


console.log("Veces que aparece montaña :"+ aparece("montaña"));
console.log("Palabras con más de cuatro caracteres: " + masDeCuatro());
console.log("Primera posición de río: "+primeraPosicion("río"));
console.log("Primera posición de nube:"+primeraPosicion("nube"));

