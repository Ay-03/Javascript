//Ejercicio 1

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const btnStart = document.getElementById('btnStart');
const estado = document.getElementById('statusText');
const comando = document.getElementById('commandText');
const respuesta = document.getElementById('responseText');
const textoPrincipal = document.getElementById('textoPrincipal');

let tamano = 16; 

function responder(mensaje) {
  respuesta.textContent = mensaje;
}

function ejecutarComando(texto) {
  if (texto.includes('más grande')) {
    tamano += 4;
    textoPrincipal.style.fontSize = tamano + 'px';
    responder('Texto más grande');
  } else if (texto.includes('más pequeño')) {
    tamano -= 4;
    textoPrincipal.style.fontSize = tamano + 'px';
    responder('Texto más pequeño');
  } else if (texto.includes('modo oscuro')) {
    document.body.classList.add('oscuro');
    responder('Modo oscuro activado');
  } else if (texto.includes('modo claro')) {
    document.body.classList.remove('oscuro');
    responder('Modo claro activado');
  } else if (texto.includes('rojo')) {
    document.body.style.backgroundColor = '#f8d7da';
    responder('Fondo rojo');
  } else if (texto.includes('verde')) {
    document.body.style.backgroundColor = '#d4edda';
    responder('Fondo verde');
  } else if (texto.includes('azul')) {
    document.body.style.backgroundColor = '#cce5ff';
    responder('Fondo azul');
  } else if (texto.includes('restablecer') || texto.includes('blanco')) {
    document.body.classList.remove('oscuro');
    tamano = 16;
    textoPrincipal.style.fontSize = tamano + 'px';
    responder('Todo restablecido');
  } else {
    responder('No he entendido el comando');
  }
}

document.getElementById('btnMas').addEventListener('click', () => ejecutarComando('más grande'));
document.getElementById('btnMenos').addEventListener('click', () => ejecutarComando('más pequeño'));
document.getElementById('btnOscuro').addEventListener('click', () => ejecutarComando('modo oscuro'));
document.getElementById('btnClaro').addEventListener('click', () => ejecutarComando('modo claro'));

if (!SpeechRecognition) {
  estado.textContent = "Estado: Tu navegador no soporta la Web Speech API. Prueba con Google Chrome u Edge.";
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
    ejecutarComando(transcript);
  };

  recognition.onerror = (event) => {
    if (event.error === 'not-allowed') {
      estado.textContent = "Error: permiso de microfono denegado usa lo botones";
    } else if (event.error === 'no-speech') {
      estado.textContent = "Error: no se ha hablado";
    } else {
      estado.textContent = "Error: " + event.error;
    }
  };
}
