import {cambiarIdiomaNavFooter} from './traductor.js'

window.onload = () => {
    const lenguaje = localStorage.getItem("lenguaje");
    establecerIdioma(lenguaje);
}

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const actualizar = document.getElementById('actualizar');
const contrasenaLabel2 = document.getElementById('contrasenaLabel2');
const contrasenaLabel3 = document.getElementById('contrasenaLabel3');
const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');

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
            actualizar.textContent = 'Please, update the password';
            contrasenaLabel2.textContent = 'New password';
            contrasenaLabel3.textContent = 'New password';
            btnActualizarContrasena.textContent = 'Update password';
            break;
        case 'ES':
            actualizar.textContent = 'Por favor, actualice la contraseña';
            contrasenaLabel2.textContent = 'Nueva contraseña';
            contrasenaLabel3.textContent = 'Nueva contraseña';
            btnActualizarContrasena.textContent = 'Actualizar contraseña';
            break;
    
        default:
            break;
    }
}