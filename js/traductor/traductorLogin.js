import {cambiarIdiomaNavFooter} from './traductor.js'

window.onload = () => {
    const lenguaje = localStorage.getItem("lenguaje");
    establecerIdioma(lenguaje);
}

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const loginTitulo = document.getElementById('loginTitulo');
const correoLabel = document.getElementById('correoLabel');
const contrasenaLabel = document.getElementById('contrasenaLabel');
const btnIniciarSesion = document.getElementById('btnIniciarSesion');
const btnRegistrarse = document.getElementById('btnRegistrarse');

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
            loginTitulo.textContent = 'Please, log in';
            correoLabel.textContent = 'Email address';
            contrasenaLabel.textContent = 'Password';
            btnIniciarSesion.textContent = 'Continue';
            btnRegistrarse.textContent = 'Sign up';
            break;
        case 'ES':
            loginTitulo.textContent = 'Por favor, inicie sesión';
            correoLabel.textContent = 'Dirección de correo electrónico';
            contrasenaLabel.textContent = 'Contraseña';
            btnIniciarSesion.textContent = 'Continuar';
            btnRegistrarse.textContent = 'Registrarse';
            break;
    
        default:
            break;
    }
}