const URL = 'https://pokeapi.co/api/v2/pokemon?limit=5';

// Paso 5. Crear funciones reutilizables

function obtenerDatos(url){
    return fetch(url)
        .then(respuesta =>{
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status}`);
            }
            return respuesta.json();
        })
}

function mostrarPokemon(pokemon){
    
    const nombre = pokemon.name;
    const numero = pokemon.id;
    const primerTipo = pokemon.types[0].type.name;
    const urlImagen = pokemon.sprites.front_default;

    console.log("Nombre: "+ nombre);
    console.log("Numero: "+ numero);
    console.log("Primer Tipo: "+ primerTipo);
    console.log("Imagen: " + urlImagen);

    document.body.innerHTML += `
    <div>
        <img src="${urlImagen}" alt="${nombre}" style="width: 200px; height: auto;" />
        <h2>${nombre.toUpperCase()}</h2>
        <p>Numero: ${numero}</p>
        <p>Tipo: ${primerTipo}</p>
    </div>
    `;
}

// Paso 8. Reescribirlo con async y await

async function paso8(url) {
    document.body.innerHTML += "<h2>Cargando…</h2>";
    try {
        const datosListado = await obtenerDatos(url);
        const urlPrimerPokemon = datosListado.results[0].url;
        const datosPokemon = await obtenerDatos(urlPrimerPokemon);
        mostrarPokemon(datosPokemon);

    } catch (error) {
        console.error("Detalles error : " + error);
            document.body.innerHTML += `
            <div style="color: red; border: 1px solid red; max-width: 300px;">
                <h3>Ocurrio un problema</h3>
                <p>No se pudo cargar el Pokemon comprueba tu red y que el nombre sea correcto</p>
                <p>${error}</p>
            </div>
            `;
    } finally {
            console.log("La peticion ha terminado ");
    }
}

paso8(URL);