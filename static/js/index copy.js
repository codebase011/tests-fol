/*************************************************************************************************************************************************************************************************************
 * DEFINICION DE LAS UNIDADES DEL TEMARIO
 * Array de unidades con un campo "nombre" que contiene otro array con las preguntas, posibles Respuestas
 * y el num. de respuesta correcta.
 * @param {*} numUnidad 
 *************************************************************************************************************************************************************************************************************/
const unidades = [
    // UNIDAD 1
    {
        idUnidad: 1,
        titulo: "Los derechos del trabajo",
        preguntas: [
            {
                enunciado: "Señala cuáles de los siguientes derechos están considerados derechos fundamentales por la Constitución española de 1978:",
                posiblesRespuestas: [
                    "Derecho al trabajo y a un salario",
                    "Derecho a la huelga y a la libertad sindical",
                    "Derecho a la ocupación efectiva",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Indica cuál de las siguientes situaciones está excluida del derecho laboral",
                posiblesRespuestas: [
                    "Una joven que trabaja en una compañia de seguros con un contrato mercantil y cobra comisión por cada póliza que realiza",
                    "Un empleado al servicio del hogar familiar.",
                    "Un auxiliar de farmacia",
                    "Una deportista profesional",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Enunciado 3",
                posiblesRespuestas: [
                    "Respuesta 1",
                    "Respuesta 2",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Enunciado 4",
                posiblesRespuestas: [
                    "Respuesta 1",
                    "Respuesta 2",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Enunciado 5",
                posiblesRespuestas: [
                    "Respuesta 1",
                    "Respuesta 2",
                    "Respuesta 3",
                    "Respuesta 4",
                ],
                numRespuestaCorrecta: 4,
            },
        ],
    },
    // UNIDAD 2
    {
        titulo: "Nombre Unidad 2",
        preguntas: [
            {
                enunciado: "Enunciado 1",
                posiblesRespuestas: [
                    "Respuesta 1",
                    "Respuesta 2",
                    "Respuesta 3",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Enunciado 2",
                posiblesRespuestas: [
                    "Respuesta 1",
                    "Respuesta 2",
                    "Respuesta 3",
                ],
                numRespuestaCorrecta: 1,
            },
        ],
    },
    /*    {
           titulo: "Nombre Unidad 3",
           preguntas: [
               {
                   enunciado: "Enunciado 1",
                   posiblesRespuestas: [
                       "Respuesta 1",
                       "Respuesta 2",
                       "Respuesta 3",
                   ],
                   numRespuestaCorrecta: 2,
               },
               {
                   enunciado: "Enunciado 2",
                   posiblesRespuestas: [
                       "Respuesta 1",
                       "Respuesta 2",
                       "Respuesta 3",
                   ],
                   numRespuestaCorrecta: 1,
               },
           ],
       } */
];

let unidadPreguntasAleatorias = [];

/*************************************************************************************************************************************************************************************************************
 * INICIO DE LA APLICACIÓN
 *************************************************************************************************************************************************************************************************************/

/*************************************************************************************************************************************************************************************************************
 * CREAR MENU
 * Función que genera los enlaces a las dieferentes secciones
 * @param {*} numUnidad 
 *************************************************************************************************************************************************************************************************************/
const crearMenu = () => {
    let htmlOpcionesPredefinidas = `
        <li><a href="#/" class="nav__link" onClick="menuOnClick()">Inicio</a></li>
        <li><a href="#/acerca" class="nav__link" onClick="menuOnClick()">Acerca</a></li>
        <li><a href="#/contacto" class="nav__link" onClick="menuOnClick()">Contacto</a></li>
    `;
    let htmlOpcionesTests = "";

    for (let numUnidad = 0; numUnidad < unidades.length; numUnidad++) {
        htmlOpcionesTests += `
            <li>
                <a href="#/test/${numUnidad + 1}" class="nav__link" onClick="menuOnClick()">
                    Unidad ${numUnidad + 1}
                </a>
            </li>
        `;
    }

    let htmlOpcionesMenu = `
        <nav class="menu-bg">
            <ul>
                ${htmlOpcionesPredefinidas}
                ${htmlOpcionesTests}
            </ul>
        </nav>
    `;

    let $header = document.querySelector("header");
    if ($header != null) {
        $header.innerHTML += htmlOpcionesMenu;
    }
}

// Función para cambiar el contenido de la página
function cambiarContenido(contenido) {
    document.getElementById('content').innerHTML = contenido;
}

/*************************************************************************************************************************************************************************************************************
 * MANEJAR NAVEGACIÓN
 * Función para manejar la navegación y cargar la página correspondiente
 * @param {*} numUnidad 
 *************************************************************************************************************************************************************************************************************/
function manejarNavegacion() {
    const hash = window.location.hash;
    console.log(window.location.hash);
    const parametros = hash.split('/').slice(2); // Obtener los parámetros de la URL
    console.log(parametros);

    switch (true) {
        case hash === '#/':
            cambiarContenido('<h1>¡Bienvenido a la página de inicio!</h1>');
            break;
        case hash === '#/acerca':
            cambiarContenido('<h1>Conoce más sobre nosotros.</h1>');
            break;
        case hash === '#/contacto':
            cambiarContenido('<h1>¡Contáctanos para obtener más información!</h1>');
            break;
        //case /^#\/test\/\d+(\/\w+)?$/.test(hash):
        // Pueder ser /test/1 -> "Test Unidad 1"
        // o /test/aleatorio/20 -> "Test aleatorio de 20 preguntas"
        case /^#\/test\/(aleatorio|(\d+))(\/(\d+))?$/.test(hash):
            const [parametro1, parametro2] = parametros;
            //const titulo = parametro2 ? `Test Unidad ${numUnidad} - ${unidad.nombre } - parametro2` : `Test Unidad ${numUnidad}`;
            // console.log(unidad);
            if (parametro1 === "aleatorio") {
                console.log("aleatorio");
            }
            else {
                const numUnidad = Number(parametro1);
                if (numUnidad > unidades.length) {
                    cambiarContenido(`<h1>No existe el test de la Unidad ${numUnidad}</h1>`);
                }
                else {
                    crearTest(numUnidad, 0);
                }
            }
            // else {
            //     cambiarContenido(`<h1>Error en los parámetros</h1>`);               
            // }
            break;
        default:
            cambiarContenido('<h1>404 - Página no encontrada</h1>');
    }
}

/*************************************************************************************************************************************************************************************************************
 * RESETEAR TEST
 * @param {*} numUnidad 
 *************************************************************************************************************************************************************************************************************/
const resetearTest = (numUnidad) => {
    document.querySelector('#botonComprobar').disabled = false;

    for (let $radio of document.querySelectorAll('input[type="radio"]')) {
        $radio.checked = false;
    }
    for (let $label of document.querySelectorAll('label')) {
        $label.style.color = "black";
    }
    // Crear el test de nuevo y hacer scroll hasta el principio de la pagina
    crearTest(numUnidad, 0);
    window.scrollTo(0, 0);
}

/*************************************************************************************************************************************************************************************************************
 * CREAR UNIDAD ALEATORIO
 * Crea una "Unidad" con preguntas aleatorias
 * @param {*} numUnidad 
 *************************************************************************************************************************************************************************************************************/
const crearUnidadAleatoria = (numPreguntas) => {
    let bloquesDePreguntas = "";

    // Vaciar el array de preguntas aleatorias
    unidadPreguntasAleatorias = {
        idUnidad: 0,
        titulo: "Unidad aleatoria",
        preguntas: [],
    };

    for (let numPregunta = 0; numPregunta < numPreguntas; numPregunta++) {
        // Generar num. aleatorio entre 0 y el total de unidades
        let unidadAleatoria = randomIntFromInterval(0, unidades.length-1);
        // Generar num. aleatorio entre 0 y el num. de preguntas total de la unidad
        let preguntaAleatoria = randomIntFromInterval(0, unidades[unidadAleatoria].preguntas.length-1);
        // Añadir la pregunta aleatoria al array de preguntas aleatorias
        unidadPreguntasAleatorias.preguntas.push(unidades[unidadAleatoria].preguntas[preguntaAleatoria])
    }
    console.log(unidadPreguntasAleatorias);
    return unidadPreguntasAleatorias;
}

/*************************************************************************************************************************************************************************************************************
 * CREAR TEST
 * @param {*} numUnidad 
 *************************************************************************************************************************************************************************************************************/
const crearTest = (numUnidad, numPreguntas) => {
    let bloquesDePreguntas = "";
    let unidad = null;

    // Si se pasa un 0 como parametro entonces generar unidad aleatoria
    if (numUnidad == 0) {
        unidad = crearUnidadAleatoria(10);
    }
    // Si no, leer la unidad elegida
    else {
        unidad = unidades[numUnidad - 1];
    }

    for (let numPregunta = 0; numPregunta < unidad.preguntas.length; numPregunta++) {
        let pregunta = unidad.preguntas[numPregunta];
        let posiblesRespuestas = "";

        for (let i = 0; i < pregunta.posiblesRespuestas.length; i++) {
            let radio = `<input type="radio" id="pregunta${numPregunta + 1}-respuesta${i + 1}" name=pregunta${numPregunta + 1}>`
            posiblesRespuestas += `
                 ${radio}<label id="label_pregunta${numPregunta + 1}-respuesta${i + 1}" for="pregunta${numPregunta + 1}-respuesta${i + 1}">${pregunta.posiblesRespuestas[i]}</label><br>
            `;
        }
        bloquesDePreguntas += `
            <div id="bloque-${numPregunta + 1}" class="bloque_enunciado_respuestas">
                <h3>${numPregunta + 1}. ${pregunta.enunciado}</h3>
                <div>${posiblesRespuestas}</div>
            </div>
        `;
    }

    let onClickComprobarTest = numUnidad == 0 ? `comprobarTest(0)` : `comprobarTest(${numUnidad - 1})`;

    let botonComprobar = `
        <button id="botonComprobar" onClick="comprobarTest(${numUnidad - 1})">
            Comprobar
        </button>
    `;

    let botonResetear = `
        <button id="botonResetearTest" onClick="resetearTest(${numUnidad})">
            Resetear Test
        </button>
    `;

    cambiarContenido(`
        <h1>Unidad ${numUnidad}</h1>
        <h2>${unidad.titulo}</h2>
        <div class="bloquedepreguntas">
            <div>${bloquesDePreguntas}</div>
            <div id="resultado"></div>
            <div id="botonesComprobar">${botonComprobar}${botonResetear}</div>
        </div>
    `);
}

/*************************************************************************************************************************************************************************************************************
 * COMPROBAR TEST
 * Es llamada con el OnClick del boton "botonComprobar"
 * Si numUnidad == 0 entonces comprobar Unidad Aleatoria
 * @param {*} numUnidad 
 *************************************************************************************************************************************************************************************************************/
const comprobarTest = (numUnidad) => {
    let $botonComprobar = document.querySelector('#botonComprobar');
    let preguntas = null;
    let numTotalAciertos = 0;

    if ($botonComprobar != null) {
        $botonComprobar.disabled = true;
    }

    preguntas = numUnidad == 0 ? unidadPreguntasAleatorias.preguntas : unidades[numUnidad].preguntas;
    

    for (let numPregunta = 0; numPregunta < preguntas.length; numPregunta++) {
        let posiblesRespuestas = preguntas[numPregunta].posiblesRespuestas;
        let numRespuestaSeleccionada;
        for (let numRespuesta = 0; numRespuesta < posiblesRespuestas.length; numRespuesta++) {
            console.log(posiblesRespuestas[numRespuesta]);
            let $radio = document.querySelector('#pregunta' + (numPregunta + 1) + '-respuesta' + (numRespuesta + 1));
            //console.log('#pregunta' + (numPregunta + 1) + '-respuesta' + (numRespuesta + 1));
            //console.log($radio);
            if ($radio.checked) {
                numRespuestaSeleccionada = numRespuesta + 1;
            }
        }
        console.log("Respuesta a la pregunta " + numPregunta, numRespuestaSeleccionada);
        console.log("Respuesta correcta a la pregunta " + numPregunta, preguntas[numPregunta].numRespuestaCorrecta);
        let $labelRespuestaSeleccionada = document.querySelector(`#label_pregunta${numPregunta + 1}-respuesta${numRespuestaSeleccionada}`);
        let $labelRespuestaCorrecta = document.querySelector(`#label_pregunta${numPregunta + 1}-respuesta${preguntas[numPregunta].numRespuestaCorrecta}`);

        // ACIERTO
        if (numRespuestaSeleccionada == preguntas[numPregunta].numRespuestaCorrecta) {
            if ($labelRespuestaSeleccionada != null) {
                $labelRespuestaSeleccionada.style.fontWeight = "600";
                $labelRespuestaSeleccionada.style.color = "green";
                $labelRespuestaSeleccionada.textContent += " ✅";
            }
            console.log("acierto");
            numTotalAciertos++;
        }
        // FALLO
        else {
            console.log("fallo");
            if ($labelRespuestaSeleccionada != null) {
                //$labelRespuestaSeleccionada.style.fontWeight = "600";
                $labelRespuestaSeleccionada.style.color = "red";
                $labelRespuestaSeleccionada.textContent += " ❌";
            }
            if ($labelRespuestaCorrecta != null) {
                $labelRespuestaCorrecta.style.fontWeight = "600";
                $labelRespuestaCorrecta.style.color = "green";
                //$labelRespuestaCorrecta.textContent += " ❌";
            }
        }
    }
    let numFallos = preguntas.length - numTotalAciertos;

    let $divResultado = document.querySelector("#resultado");

    if ($divResultado != null) {
        let mensaje = `
            Respuestas acertadas: ${numTotalAciertos} de ${preguntas.length} (${numFallos} fallos)
            <br>
        `;
        mensaje += numFallos > 0 ? `😿` : `😸`;
        $divResultado.innerHTML = `<p>${mensaje}</p>`;
    }

    console.log(`Respuestas acertadas: ${numTotalAciertos} de ${preguntas.length} (${numFallos} fallos)`)
}


/*************************************************************************************************************************************************************************************************************
 * FUNCIONES UTILES
 * Es llamada con el OnClick del boton "botonComprobar"
 * @param {*} numUnidad 
 *************************************************************************************************************************************************************************************************************/
function isNumber(value) {
    return typeof value === 'number';
}

function menuOnClick() {
    document.querySelector("#menu-bar").classList.toggle("change");
    document.querySelector("nav").classList.toggle("change");
    document.querySelector("#menu-bg").classList.toggle("change-bg");
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Manejar la navegación inicial
crearMenu();
manejarNavegacion();

// Escuchar cambios en el evento hash para manejar la navegación
window.addEventListener('hashchange', manejarNavegacion);
