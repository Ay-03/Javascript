const URL = "https://pokeapi.co/api/v2/pokemon?limit=5";
const URLPikachu = "https://pokeapi.co/api/v2/pokemon/pikachu";


// Paso 2. Mostrar los nombres
const listado = fetch(URL)
    .then( respuesta => {
        return respuesta.json();
    })
    .then(datos =>{
        console.log(listado);
        console.log(datos);
        console.log("Tipo Objeto : "+ datos.typeof );
        console.log(datos.results);
        document.body.innerHTML += `
        <ul>
            ${datos.results.map(pokemon => `<li>${pokemon.name}</li>`).join('')}                    
        </ul>`; 
    })

// Paso 3. Pedir el detalle de un Pokémon
const pikachu = fetch(URLPikachu)
    .then( respuesta =>{
        return respuesta.json();
    })
    .then(pokemon =>{
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

    });

// Paso 4. Encadenar dos peticiones
fetch(URL)
    .then(respuesta =>{ return respuesta.json();})
    .then(datos =>{
        const urlprimero = datos.results[0].url;
        return fetch(urlprimero);
    })
    .then(respuesta =>{ return respuesta.json();})
    .then(pokemon =>{
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

    });

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


// Paso 6. Gestionar la carga y los errores
const noexite = "https://pokeapi.co/api/v2/pokemon/noexite"

document.body.innerHTML += "<h2>Cargando…</h2>";

obtenerDatos(noexite)
    .then(datos => {
        mostrarPokemon(datos);
    })
    .catch(error => {
        console.error("Detalles error : " +error);
        document.body.innerHTML += `
        <div style="color: red; border: 1px solid red; max-width: 300px;">
            <h3>Ocurrio un problema</h3>
            <p>No se pudo cargar el Pokemon comprueba tu red y que el nombre sea correcto</p>
            <p>${error}</p>
        </div>
        `;
    })
    .finally(() => {
        console.log("La peticion ha terminado ");
    });

// Paso 7. Añadir una espera propia

function esperar(ms){
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

document.body.innerHTML += "<h2>Cargando…</h2>";
esperar(5000)
    obtenerDatos(URLPikachu)
    .then(datos => {
        console.log('Han pasado los 5 segundos. Iniciando petición a la API...');
        mostrarPokemon(datos);
    })
    .catch(error => {
        console.error("Detalles error : " +error);
    })
    .finally(() => {
        console.log("La peticion ha terminado ");
    });

