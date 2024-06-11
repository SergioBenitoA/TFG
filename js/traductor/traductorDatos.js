import {cambiarIdiomaNavFooter} from './traductor.js'

window.onload = () => {
    const lenguaje = localStorage.getItem("lenguaje");
    establecerIdioma(lenguaje);
}

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const reservaTitulo = document.getElementById('reservaTitulo');
const labelDNI = document.getElementById('labelDNI');
const labelMatricula = document.getElementById('labelMatricula');
const labelPersonas = document.getElementById('labelPersonas');
const labelFechaEntrada = document.getElementById('labelFechaEntrada');
const labelFechaSalida = document.getElementById('labelFechaSalida');
const btnReservar = document.getElementById('btnReservar');
const tipoAlojamiento = document.getElementById('tipo-alojamiento');
const parcela = document.getElementById('parcela');

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
            reservaTitulo.textContent = 'Reservation Details';
            labelMatricula.textContent = 'Vehicle Registration';
            labelPersonas.textContent = 'Number of People';
            labelFechaEntrada.textContent = 'Check-in Date';
            labelFechaSalida.textContent = 'Check-out Date';
            btnReservar.textContent = 'Book';
            tipoAlojamiento.textContent = 'Type of accommodations';
            parcela.textContent = 'Pitches';
            break;

        case 'ES':
            reservaTitulo.textContent = 'Datos para la reserva';
            labelDNI.textContent = 'DNI/NIE';
            labelMatricula.textContent = 'Matrícula del vehículo';
            labelPersonas.textContent = 'Nº de personas';
            labelFechaEntrada.textContent = 'Fecha de entrada';
            labelFechaSalida.textContent = 'Fecha de salida';
            btnReservar.textContent = 'Reservar';
            tipoAlojamiento.textContent = 'Tipo de alojamiento';
            parcela.textContent = 'Parcelas';
            break;
    
        default:
            break;
    }
}