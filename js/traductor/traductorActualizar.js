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
const contrasenaLabel1 = document.getElementById('contrasenaLabel1');
const contrasenaLabel2 = document.getElementById('contrasenaLabel2');
const contrasenaLabel3 = document.getElementById('contrasenaLabel3');
const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');
const eliminarCuenta = document.getElementById('eliminarCuenta');
const eliminar = document.getElementById('eliminar');
const tituloModal = document.getElementById('tituloModal');
const textoModal = document.getElementById('textoModal');
const cancelarModal = document.getElementById('cancelarModal');

// Toggle lista idiomas
idiomaActual.addEventListener('click', () => {
    listaIdiomas.classList.toggle('toggle');
});

// Convertir los idiomas a un Array
const opcionesArray = Array.from(idiomas);
// Recorrer las opciones del traductor
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
            contrasenaLabel1.textContent = 'Current password';
            contrasenaLabel2.textContent = 'New password';
            contrasenaLabel3.textContent = 'New password';
            btnActualizarContrasena.textContent = 'Update password';
            eliminarCuenta.textContent = 'Delete account';
            eliminar.textContent = 'Delete account';
            tituloModal.textContent = 'Delete account';
            textoModal.textContent = 'Are you sure you want to delete the account?';
            cancelarModal.textContent = 'Cancel';
            break;
        case 'ES':
            actualizar.textContent = 'Por favor, actualice la contraseña';
            contrasenaLabel1.textContent = 'Contraseña actual';
            contrasenaLabel2.textContent = 'Nueva contraseña';
            contrasenaLabel3.textContent = 'Nueva contraseña';
            btnActualizarContrasena.textContent = 'Actualizar contraseña';
            eliminarCuenta.textContent = 'Eliminar cuenta';
            eliminar.textContent = 'Eliminar cuenta';
            tituloModal.textContent = 'Eliminar cuenta';
            textoModal.textContent = '¿Estas seguro de que quieres eliminar la cuenta?';
            cancelarModal.textContent = 'Cancelar';
            break;
    
        default:
            break;
    }
}