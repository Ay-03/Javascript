// Ejercicio 2

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const btnStart = document.getElementById('btnStart');
const estado = document.getElementById('statusText');
const comando = document.getElementById('commandText');
const respuesta = document.getElementById('responseText');
const campoProducto = document.getElementById('campoProducto');
const lista = document.getElementById('lista');

let productos = JSON.parse(localStorage.getItem('listaCompra')) || [];

function guardarYMostrar() {
  localStorage.setItem('listaCompra', JSON.stringify(productos));
  lista.innerHTML = '';
  productos.forEach((producto) => {
    const li = document.createElement('li');
    li.textContent = producto;
    lista.appendChild(li);
  });
}

function responder(mensaje) {
  respuesta.textContent = mensaje;
  const respuesta = new SpeechSynthesisUtterance(mensaje);
  respuesta.lang = "es-ES";
  window.speechSynthesis.speak(respuesta);
}

// -- Ejercicio 2: acciones sobre la lista
function anadir(producto) {
  if (producto === '') {
    responder('No hay producto para añadir');
    return;
  }
  productos.push(producto);
  guardarYMostrar();
  responder('He añadido ' + producto);
}

function quitar(producto) {
  const posicion = productos.indexOf(producto);
  if (posicion === -1) {
    responder(producto + ' no esta en la lista');
    return;
  }
  productos.splice(posicion, 1);
  guardarYMostrar();
  responder('He quitado ' + producto);
}

function vaciar() {
  productos = [];
  guardarYMostrar();
  responder('He vaciado la lista');
}

function interpretar(texto) {
  if (texto.includes('vacía') || texto.includes('vaciar')) {
    vaciar();
  } else if (texto.startsWith('añade ')) {
    anadir(texto.replace('añade ', '').trim());
  } else if (texto.startsWith('quita ')) {
    quitar(texto.replace('quita ', '').trim());
  } else {
    responder('No he entendido la frase');
  }
}

document.getElementById('btnAnadir').addEventListener('click', () => {
  anadir(campoProducto.value.trim().toLowerCase());
  campoProducto.value = '';
});
document.getElementById('btnQuitar').addEventListener('click', () => {
  quitar(campoProducto.value.trim().toLowerCase());
  campoProducto.value = '';
});
document.getElementById('btnVaciar').addEventListener('click', vaciar);

guardarYMostrar();

if (!SpeechRecognition) {
  estado.textContent = "Estado: Error - tu navegador no soporta la Web Speech API (usa el campo de texto)";
  btnStart.disabled = true;
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.continuous = true;
  recognition.interimResults = false;

  let isListening = false;

  btnStart.addEventListener('click', () => {
    if (!isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });

  recognition.onstart = () => {
    isListening = true;
    estado.textContent = "Estado: Escuchando...";
    btnStart.textContent = "Detener Micrófono";
  };

  recognition.onend = () => {
    isListening = false;
    estado.textContent = "Estado: Inactivo";
    btnStart.textContent = "Activar Micrófono";
  };

  recognition.onresult = (event) => {
    const lastIndex = event.results.length - 1;
    const transcript = event.results[lastIndex][0].transcript.trim().toLowerCase();
    comando.textContent = transcript;
    interpretar(transcript);
  };

  recognition.onerror = (event) => {
    if (event.error === 'not-allowed') {
      estado.textContent = "Error: permiso de microfono denegado usa botones";
    } else if (event.error === 'no-speech') {
      estado.textContent = "Error: no se ha hablado";
    } else {
      estado.textContent = "Error: " + event.error;
    }
  };
}
