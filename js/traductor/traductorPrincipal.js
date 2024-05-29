import {cambiarIdiomaNavFooter} from './traductor.js'

window.onload = () => {
    const lenguaje = localStorage.getItem("lenguaje");
    establecerIdioma(lenguaje);
}

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const descuento = document.getElementById('descuento');
const experiencia = document.getElementById('experiencia');
const btnReservaYa = document.getElementById('btnReservaYa');
const tituloAlojamientos = document.getElementById('tituloAlojamientos');
const tituloParcelas = document.getElementById('tituloParcelas');
const descripcionParcelas = document.getElementById('descripcionParcelas');
const btnReservarParcelas = document.getElementById('btnReservarParcelas');
const tituloGlamping = document.getElementById('tituloGlamping');
const descripcionGlamping = document.getElementById('descripcionGlamping');
const btnReservarGlamping = document.getElementById('btnReservarGlamping');
const tituloBungalows = document.getElementById('tituloBungalows');
const descripcionBungalows = document.getElementById('descripcionBungalows');
const btnReservarBungalows = document.getElementById('btnReservarBungalows');
const tituloInstalaciones = document.getElementById('tituloInstalaciones');
const tituloPiscina = document.getElementById('tituloPiscina');
const descripcionPiscina = document.getElementById('descripcionPiscina');
const tituloBBQ = document.getElementById('tituloBBQ');
const descripcionBBQ = document.getElementById('descripcionBBQ');
const tituloParque = document.getElementById('tituloParque');
const descripcionParque = document.getElementById('descripcionParque');
const tituloOpiniones = document.getElementById('tituloOpiniones');
const nombreLaura = document.getElementById('nombreLaura');
const opinionLaura = document.getElementById('opinionLaura');
const nombreCarlos = document.getElementById('nombreCarlos');
const opinionCarlos = document.getElementById('opinionCarlos');
const nombreSofia = document.getElementById('nombreSofia');
const opinionSofia = document.getElementById('opinionSofia');

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
            descuento.textContent = '15% discount on your first booking';
            experiencia.innerHTML = `
                Dive into the ultimate experience for surf and outdoor enthusiasts. 
                At El Oasis, we offer a unique combination of perfect waves, a relaxed beachfront atmosphere, 
                and unforgettable moments of fun. From our surf lessons to our karaoke nights under the stars, 
                we have everything you need for a memorable vacation. Welcome to your new favorite destination!
            `;
            btnReservaYa.textContent = 'BOOK NOW!';
            tituloAlojamientos.textContent = 'ACCOMMODATIONS';
            tituloParcelas.textContent = 'Pitches';
            descripcionParcelas.textContent = 'Accommodations like a hotel. Arrive and enjoy. But with nature and the surfing experience.';
            btnReservarParcelas.textContent = 'Book';
            tituloGlamping.textContent = 'Glamping';
            descripcionGlamping.textContent = 'Accommodations like a hotel. Arrive and enjoy. But with nature and the surfing experience.';
            btnReservarGlamping.textContent = 'Book';
            tituloBungalows.textContent = 'Bungalows';
            descripcionBungalows.textContent = 'Accommodations like a hotel. Arrive and enjoy. But with nature and the surfing experience.';
            btnReservarBungalows.textContent = 'Book';
            tituloInstalaciones.textContent = 'FACILITIES';
            tituloPiscina.textContent = 'Swimming Pool';
            descripcionPiscina.textContent = 'Enjoy the freshness of our outdoor pool, perfect for relaxing or having fun with family. Surrounded by natural views, it is the perfect place for a sunny day of rest and recreation.';
            tituloBBQ.textContent = 'BBQ Area';
            descripcionBBQ.textContent = 'Gather with friends and family in our BBQ area, fully equipped to prepare delicious outdoor meals. A cozy space perfect for sharing special moments while enjoying the natural surroundings.';
            tituloParque.textContent = 'Playground';
            descripcionParque.textContent = 'A safe and fun space for the little ones, our playground is designed to stimulate imagination and physical activity in an outdoor setting. It is the ideal place for children to play, explore, and make new friends during their stay.';
            tituloOpiniones.textContent = 'REVIEWS';
            nombreLaura.textContent = 'Laura Gómez';
            opinionLaura.textContent = '"Our stay at the campsite was wonderful. The kids really enjoyed the playground, and the BBQ area was perfect for summer nights. We will definitely come back!"';
            nombreCarlos.textContent = 'Carlos Martín';
            opinionCarlos.textContent = '"Excellent campsite with clean and well-maintained facilities. The pool is large and always in perfect condition. The atmosphere is very family-friendly and peaceful, ideal for disconnecting."';
            nombreSofia.textContent = 'Sofía Ramírez';
            opinionSofia.textContent = '"I loved the relaxed atmosphere of the campsite and the proximity to nature. The facilities are modern, and the staff is always willing to help. The BBQ nights were a great hit."';
            break;

        case 'ES':
            descuento.textContent = '15% de descuento en tu primer registro';
            experiencia.innerHTML = `
                Sumérgete en la experiencia definitiva para los amantes del surf y
                la vida al aire libre. En El Oasis, te ofrecemos una combinación única
                de olas perfectas, un ambiente relajado a pie de playa, y 
                momentos inolvidables de diversión. Desde
                nuestras clases de surf hasta nuestras noches de karaoke bajo las
                estrellas, tenemos todo lo que necesitas para unas vacaciones
                memorables. ¡Bienvenido a tu nuevo destino favorito!
            `;
            btnReservaYa.textContent = '¡RESERVA YA!';
            tituloAlojamientos.textContent = 'ALOJAMIENTOS';
            tituloParcelas.textContent = 'Parcelas';
            descripcionParcelas.textContent = 'Alojamientos como un hotel. Llegar y disfrutar. Pero contando con la naturaleza y la experiencia surfista.';
            btnReservarParcelas.textContent = 'Reservar';
            tituloGlamping.textContent = 'Glamping';
            descripcionGlamping.textContent = 'Alojamientos como un hotel. Llegar y disfrutar. Pero contando con la naturaleza y la experiencia surfista.';
            btnReservarGlamping.textContent = 'Reservar';
            tituloBungalows.textContent = 'Bungalows';
            descripcionBungalows.textContent = 'Alojamientos como un hotel. Llegar y disfrutar. Pero contando con la naturaleza y la experiencia surfista.';
            btnReservarBungalows.textContent = 'Reservar';
            tituloInstalaciones.textContent = 'INSTALACIONES';
            tituloPiscina.textContent = 'Piscina';
            descripcionPiscina.textContent = 'Disfruta del frescor de nuestra piscina al aire libre, ideal para relajarse o divertirse en familia. Rodeada de vistas naturales, es el lugar perfecto para un día soleado de descanso y esparcimiento.';
            tituloBBQ.textContent = 'Zona de barbacoas';
            descripcionBBQ.textContent = 'Reúnete con amigos y familia en nuestra zona de barbacoas, completamente equipada para que prepares deliciosas comidas al aire libre. Un espacio acogedor y perfecto para compartir momentos especiales mientras disfrutas del entorno natural.';
            tituloParque.textContent = 'Parque Infantil';
            descripcionParque.textContent = 'Un espacio seguro y divertido para los más pequeños, nuestro parque infantil está diseñado para estimular la imaginación y la actividad física en un entorno al aire libre. Es el lugar ideal para que los niños jueguen, exploren y hagan nuevos amigos durante su estancia.';
            tituloOpiniones.textContent = 'OPINIONES';
            nombreLaura.textContent = 'Laura Gómez';
            opinionLaura.textContent = '"Nuestra estancia en el camping fue maravillosa. Los niños disfrutaron mucho del parque infantil y la zona de barbacoas fue perfecta para las noches de verano. ¡Definitivamente volveremos!"';
            nombreCarlos.textContent = 'Carlos Martín';
            opinionCarlos.textContent = '"Excelente camping con instalaciones limpias y bien mantenidas. La piscina es amplia y siempre en perfectas condiciones. El ambiente es muy familiar y tranquilo, ideal para desconectar."';
            nombreSofia.textContent = 'Sofía Ramírez';
            opinionSofia.textContent = '"Me encantó el ambiente relajado del camping y la cercanía a la naturaleza. Las instalaciones son modernas y el personal siempre dispuesto a ayudar. Las noches de barbacoa fueron un gran acierto."';
            break;
    
        default:
            break;
    }
}