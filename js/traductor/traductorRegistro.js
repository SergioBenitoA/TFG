import {cambiarIdiomaNavFooter} from './traductor.js'

window.onload = () => {
    const lenguaje = localStorage.getItem("lenguaje");
    establecerIdioma(lenguaje);
}

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const correo = document.getElementById('correo');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const contrasena = document.getElementById('contrasena');
const registroTitulo = document.getElementById('registroTitulo');

// Toggle lista idiomas
idiomaActual.addEventListener('click', () => {
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent;
        establecerIdioma(idioma);
        localStorage.setItem("lenguaje", idioma);
    });
})

function establecerIdioma(idioma) {
    cambiarIdiomaNavFooter(idioma);
    document.getElementById('idioma').textContent = idioma;
    switch (idioma) {
        case 'EN':
            /* REGISTRO */
            correo.textContent = 'Email';
            nombre.textContent = 'Name';
            telefono.textContent = 'Phone';
            contrasena.textContent = 'Password';
            registroTitulo.textContent = 'Please, sign up';
            btnRegistrar.textContent = 'Continue';
            break;

        case 'ES':
            /* REGISTRO */
            correo.textContent = 'Dirección de correo electrónico';
            nombre.textContent = 'Nombre completo';
            telefono.textContent = 'Teléfono';
            contrasena.textContent = 'Contraseña';
            registroTitulo.textContent = 'Por favor, regístrese';
            btnRegistrar.textContent = 'Continuar';
            break;
    
        default:
            break;
    }
}