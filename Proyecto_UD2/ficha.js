const URL_DETALLE = "https://pokeapi.co/api/v2/pokemon/";

const estado = document.querySelector("#estado-ficha");
const ficha = document.querySelector("#ficha-pokemon");

// Obtiene los datos de la API
async function obtenerDatos(url) {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw  new Error("Error al obtener los datos");
  }

  return respuesta.json();
}

// Muestra un mensaje
function mostrarEstado(texto, esError) {
  estado.textContent = texto;

  if (esError) {
    estado.className = "estado error";
  } else {
    estado.className = "estado";
  }
}



// Crea una fila con un dato
function crearFila(titulo, valor) {
  const fila = document.createElement("div");
  fila.className = "fila";

  const titulo1 = document.createElement("dt");
  titulo1.textContent = titulo;

  const valor1 = document.createElement("dd");
  valor1.textContent = valor;

  fila.append(titulo1, valor1);

  return fila;
}

// Crea la ficha del Pokmon
function mostrarFicha(pokemon) {
  const numero = document.createElement("p");
  numero.textContent = pokemon.id;

  const nombre = document.createElement("h2");
  nombre.textContent = pokemon.name;

  const encabezado = document.createElement("header");
  encabezado.className = "ficha-encabezado";
  encabezado.append(numero, nombre);

  const imagen = document.createElement("img");
  imagen.src = pokemon.sprites.other["official-artwork"].front_default;

  let tipos = "";

  for (const tipo of pokemon.types) {
    if (tipos !== "") {
      tipos = tipos + ", ";
    }

    tipos = tipos + tipo.type.name;
  }

 
  let habilidades = "";

  for (const habilidad of pokemon.abilities) {
    if (habilidades !== "") {
      habilidades = habilidades + ", ";
    }

    habilidades = habilidades + habilidad.ability.name;
  }

  const datos = document.createElement("dl");
  datos.append(
    crearFila("Tipo", tipos),
    crearFila("Altura", pokemon.height ),
    crearFila("Peso", pokemon.weight ),
    crearFila("Habilidades", habilidades)
  );

  const cuerpo = document.createElement("div");
  cuerpo.className = "ficha-cuerpo";
  cuerpo.append(imagen, datos);

  ficha.className = "ficha";
  ficha.replaceChildren(encabezado, cuerpo);
}

// Carga la ficha del Pokemon
async function cargarFicha() {
  const parametros = new URLSearchParams(window.location.search);
  const nombre = parametros.get("pokemon");

  if (nombre === null || nombre.trim() === "") {
    mostrarEstado("No se ha indicado ningun Pokemon", true);
    return;
  }

  mostrarEstado("Cargando ficha...", false);

  try {
    const pokemon = await obtenerDatos(URL_DETALLE + encodeURIComponent(nombre.trim().toLowerCase()));
    mostrarFicha(pokemon);
    mostrarEstado("", false);
  } catch (error) {
      console.error("Error al cargar la ficha:", error);
      mostrarEstado("Comprueba tu conexion o No existe ningún Pokemon con ese nombre", true);
  }
}

// Comprueba que existen los elementos del HTML
if (estado && ficha) {
  cargarFicha();
} else {
  console.error("No se han encontrado los elementos de la ficha.");
}
