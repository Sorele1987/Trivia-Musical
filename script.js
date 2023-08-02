function checkRespuesta(boton, pregunta, respuestaSeleccionada) {
  var respuestasCorrectas = {
    "Pregunta 1": "Idiófono",
    "Pregunta 2": "La Menor",
    "Pregunta 3": "Charango",
    "Pregunta 4": "Flauta",
    "Pregunta 5": "Barroco",
    "Pregunta 6": "Siglo XVIII",
  };

  var respuestaCorrecta = respuestasCorrectas[pregunta];

  if (respuestaSeleccionada === respuestaCorrecta) {
    document.getElementById(
      "resultado-" + pregunta.toLowerCase().replace(/ /g, "-")
    ).textContent = "¡Bien hecho! :)";
  } else {
    document.getElementById(
      "resultado-" + pregunta.toLowerCase().replace(/ /g, "-")
    ).textContent = "Inténtalo nuevamente :(";
  }
}

function mostrarMensajeBienvenida() {
  var nombreArtistico = document.getElementById("nombreArtistico").value;
  localStorage.setItem("nombreArtista", nombreArtistico);
  window.location.href = "preguntas.html";
}

function mostrarMensajeEnPaginaPreguntas() {
  var nombreArtista = localStorage.getItem("nombreArtista");
  document.getElementById("nombreArtista").textContent = nombreArtista;
}

function mostrarMensajeBienvenidab() {
  var nombre = document.getElementById("nombre").value;
  localStorage.setItem("name", nombre);
  window.location.href = "preguntas2.html";
}

function mostrarMensajeEnPaginaPreguntasb() {
  var name = localStorage.getItem("name");
  document.getElementById("name").textContent = name;
}

if (window.location.pathname === "/preguntas.html") {
  mostrarMensajeEnPaginaPreguntas();
}

if (window.location.pathname === "/preguntas2.html") {
  mostrarMensajeEnPaginaPreguntasb();
}
