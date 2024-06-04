let indicePreguntaActual = 0;

const preguntasMusicales = [
    {
        pregunta: "¿Quién es guitarrista de Queen?",
        opciones: ["Brian May", "George Harrison", "Eric Clapton", "Roger Waters"],
        respuestaCorrecta: "Brian May"
    },
    {
        pregunta: "¿Qué banda es oriunda de Liverpool'?",
        opciones: ["The Rolling Stones", "The Beatles", "The Who", "Pink Floyd"],
        respuestaCorrecta: "The Beatles"
    },
    {
        pregunta: "¿Qué canción de Luis Alberto Spinetta contiene la frase 'mañana es mejor'?",
        opciones: ["Bajan", "Cantata de Puentes Amarillos", "Fuji", "Rezo por vos",],
        respuestaCorrecta: "Cantata de Puentes Amarillos"
    },
    {
        pregunta: "¿En qué año nació Gustavo Cerati?",
        opciones: ["1959", "1970", "1951", "1952"],
        respuestaCorrecta: "1959"
    }
];
const nuevaPregunta = {
    pregunta: "¿Cuál es el nombre completo de Paul McCartney?",
    opciones: ["Jason Paul McCartney", "James Paul McCartney", "Paul Harold McCartney", "John Paul McCartney"],
    respuestaCorrecta: "James Paul McCartney"
};
preguntasMusicales.push(nuevaPregunta);
function mostrarPregunta() {
    const preguntaActual = preguntasMusicales[indicePreguntaActual];
    let mensaje = preguntaActual.pregunta + "\n";
    preguntaActual.opciones.forEach((opcion, index) => {
        mensaje += `${index + 1}. ${opcion}\n`;
    });
    return mensaje;
}

function obtenerRespuestaUsuario() {
    return prompt(mostrarPregunta() + "\nIngrese su respuesta:");
}

function verificarRespuesta(respuestaUsuario) {
    const preguntaActual = preguntasMusicales[indicePreguntaActual];
    if (respuestaUsuario === preguntaActual.respuestaCorrecta) {
        console.log("¡Respuesta correcta!");
    } else {
        console.log(`Respuesta incorrecta. La respuesta correcta es: ${preguntaActual.respuestaCorrecta}`);
    }
}

while (indicePreguntaActual < preguntasMusicales.length) {
    const respuestaUsuario = obtenerRespuestaUsuario();
    verificarRespuesta(respuestaUsuario);
    indicePreguntaActual++;
}

function todasLasPreguntasRespondidas() {
    return indicePreguntaActual === preguntasMusicales.length;
}

