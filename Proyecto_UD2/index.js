
const URL_LISTADO = "https://pokeapi.co/api/v2/pokemon?limit=20";
const URL_DETALLE = "https://pokeapi.co/api/v2/pokemon/";
const URL_IMAGENES = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";


const formulario = document.querySelector("#formulario-busqueda");
const campoBusqueda = document.querySelector("#nombre-pokemon");
const estado = document.querySelector("#estado-busqueda");
const listado = document.querySelector("#listado-pokemon");

// Obtiene los datos de la API
async function obtenerDatos(url) {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw  new Error("Error al obtener los datos");
  }

  return respuesta.json();
}


function mostrarEstado(texto, esError) {
  estado.textContent = texto;

  if (esError) {
    estado.className = "estado error";
  } else {
    estado.className = "estado";
  }
}


function irAFicha(nombre) {
  window.location.href = "ficha.html?pokemon=" + encodeURIComponent(nombre);
}

// Crea una tarjeta
function crearTarjeta(pokemon) {
  const numero = pokemon.url.split("/")[6];

  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  const etiquetaNumero = document.createElement("p");
  etiquetaNumero.textContent = numero;

  const imagen = document.createElement("img");
  imagen.src = URL_IMAGENES + numero + ".png";
  imagen.alt = "Imagen de " + pokemon.name;
  imagen.loading = "lazy";

  const nombre = document.createElement("h3");
  nombre.textContent = pokemon.name;

  const boton = document.createElement("button");
  boton.type = "button";
  boton.setAttribute("data-nombre", pokemon.name);
  boton.textContent = "Ficha completa";

  tarjeta.append(etiquetaNumero, imagen, nombre, boton);

  boton.addEventListener("click", () => {
    irAFicha(pokemon.name);
  });

  return tarjeta;
}

async function cargarListado() {
  mostrarEstado("Cargando Pokemon..", false);

  try {
    const datos = await obtenerDatos(URL_LISTADO);

    for (const pokemon of datos.results) {
      listado.append(crearTarjeta(pokemon));
    }

    mostrarEstado("Listado cargado.", false);
  } catch (error) {
    console.error("Error al cargar el listado:", error);
    mostrarEstado("No se ha podido cargar el listado. Comprueba tu conexion.", true);
  }
}

// Comprueba que existen los elementos del HTML
if (formulario && campoBusqueda && estado && listado) {
  
  // buscar un Pokemon
  formulario.addEventListener("submit", async function(evento) {
    evento.preventDefault();

    const nombre = campoBusqueda.value.trim().toLowerCase();

    if (nombre === "") {
      mostrarEstado("Escribe el nombre o número de un Pokemon.", true);
      return;
    }

    mostrarEstado("Buscando...", false);

    try {
      const pokemon = await obtenerDatos(URL_DETALLE + encodeURIComponent(nombre));
      irAFicha(pokemon.name);
    } catch (error) {
        console.error("Error en la busqueda:", error);
        mostrarEstado("No se ha encontrado ese Pokemon o no hay conexion", true);
    }
  });

  cargarListado();

} else {
  console.error("No se han encontrado todos los elementos del HTML.");
}
