import {cambiarIdiomaNavFooter} from './traductor.js'

window.onload = () => {
    const lenguaje = localStorage.getItem("lenguaje");
    establecerIdioma(lenguaje);
}

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const headerTitulo = document.getElementById('headerTitulo');
const headerDescripcion = document.getElementById('headerDescripcion');
const parcelasTitulo = document.getElementById('parcelasTitulo');
const glampingTitulo = document.getElementById('glampingTitulo');
const bungalowsTitulo = document.getElementById('bungalowsTitulo');
const parcelasAcceso = document.getElementById('parcelasAcceso');
const parcelasEspacio = document.getElementById('parcelasEspacio');
const parcelasBanos = document.getElementById('parcelasBanos');
const parcelasPicnic = document.getElementById('parcelasPicnic');
const glampingTienda = document.getElementById('glampingTienda');
const glampingElectricidad = document.getElementById('glampingElectricidad');
const glampingTerraza = document.getElementById('glampingTerraza');
const glampingServicios = document.getElementById('glampingServicios');
const bungalowsCabanas = document.getElementById('bungalowsCabanas');
const bungalowsCocina = document.getElementById('bungalowsCocina');
const bungalowsAire = document.getElementById('bungalowsAire');
const bungalowsTerraza = document.getElementById('bungalowsTerraza');
const btnReservarParcelas = document.getElementById('btnReservarParcelas');
const btnReservarGlamping = document.getElementById('btnReservarGlamping');
const btnReservarBungalows = document.getElementById('btnReservarBungalows');
const compararTitulo = document.getElementById('compararTitulo');
const tablaParcelas = document.getElementById('tablaParcelas');
const tablaGlamping = document.getElementById('tablaGlamping');
const tablaBungalows = document.getElementById('tablaBungalows');
const compararAcceso = document.getElementById('compararAcceso');
const compararPrivado = document.getElementById('compararPrivado');
const compararBanos = document.getElementById('compararBanos');
const compararMobiliario = document.getElementById('compararMobiliario');
const compararAire = document.getElementById('compararAire');
const compararServicios = document.getElementById('compararServicios');
const compararCocina = document.getElementById('compararCocina');
const compararPicnic = document.getElementById('compararPicnic');
const parcelasPrecio = document.getElementById('parcelasPrecio');
const glampingPrecio = document.getElementById('glampingPrecio');
const bungalowsPrecio = document.getElementById('bungalowsPrecio');

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
            headerTitulo.textContent = 'Explore Our Accommodation Options';
            headerDescripcion.textContent = 'Choose the perfect accommodation for your outdoor getaway, from comfortable pitches to luxurious bungalows. Book today and enjoy an unparalleled experience in nature at affordable prices.';
            parcelasTitulo.textContent = 'Pitches';
            glampingTitulo.textContent = 'Glamping';
            bungalowsTitulo.textContent = 'Bungalows';
            parcelasAcceso.textContent = 'Access to electricity and water';
            parcelasEspacio.textContent = 'Space for tent and vehicle';
            parcelasBanos.textContent = 'Shared bathrooms and showers';
            parcelasPicnic.textContent = 'Picnic area with grill';
            glampingTienda.textContent = 'Tent already set up with real beds';
            glampingElectricidad.textContent = 'Electricity and indoor heating';
            glampingTerraza.textContent = 'Private terrace with furniture';
            glampingServicios.textContent = 'Access to exclusive services';
            bungalowsCabanas.textContent = 'Fully equipped cabins';
            bungalowsCocina.textContent = 'Private kitchen and bathroom';
            bungalowsAire.textContent = 'Air conditioning and heating';
            bungalowsTerraza.textContent = 'Private terrace with sea views';
            btnReservarParcelas.textContent = 'Book';
            btnReservarGlamping.textContent = 'Book';
            btnReservarBungalows.textContent = 'Book';
            compararTitulo.textContent = 'Compare options';
            tablaParcelas.textContent = 'Pitches';
            tablaGlamping.textContent = 'Glamping';
            tablaBungalows.textContent = 'Bungalows';
            compararAcceso.textContent = 'Access to electricity and water';
            compararPrivado.textContent = 'Private space';
            compararBanos.textContent = 'Private bathrooms';
            compararMobiliario.textContent = 'Furniture included';
            compararAire.textContent = 'Air conditioning and heating';
            compararServicios.textContent = 'Exclusive services';
            compararCocina.textContent = 'Private kitchen';
            compararPicnic.textContent = 'Picnic area with grill';
            parcelasPrecio.textContent = '/night';
            glampingPrecio.textContent = '/night';
            bungalowsPrecio.textContent = '/night';
            break;

        case 'ES':
            headerTitulo.textContent = 'Explora Nuestras Opciones de Alojamiento';
            headerDescripcion.textContent = 'Elige el alojamiento perfecto para tu escapada al aire libre, desde cómodas parcelas hasta lujosos bungalows. Reserva hoy y disfruta de una experiencia inigualable en la naturaleza a precios accesibles.';
            parcelasTitulo.textContent = 'Parcelas';
            glampingTitulo.textContent = 'Glamping';
            bungalowsTitulo.textContent = 'Bungalows';
            parcelasAcceso.textContent = 'Acceso a electricidad y agua';
            parcelasEspacio.textContent = 'Espacio para carpa y vehículo';
            parcelasBanos.textContent = 'Baños y duchas compartidos';
            parcelasPicnic.textContent = 'Área de picnic con parrilla';
            glampingTienda.textContent = 'Tienda ya montada con camas reales';
            glampingElectricidad.textContent = 'Electricidad y calefacción interior';
            glampingTerraza.textContent = 'Terraza privada con mobiliario';
            glampingServicios.textContent = 'Acceso a servicios exclusivos';
            bungalowsCabanas.textContent = 'Cabañas completamente equipadas';
            bungalowsCocina.textContent = 'Cocina y baño completamente privados';
            bungalowsAire.textContent = 'Aire acondicionado y calefacción';
            bungalowsTerraza.textContent = 'Terraza privada con vistas al mar';
            btnReservarParcelas.textContent = 'Reservar';
            btnReservarGlamping.textContent = 'Reservar';
            btnReservarBungalows.textContent = 'Reservar';
            compararTitulo.textContent = 'Comparar opciones';
            tablaParcelas.textContent = 'Parcelas';
            tablaGlamping.textContent = 'Glamping';
            tablaBungalows.textContent = 'Bungalows';
            compararAcceso.textContent = 'Acceso a electricidad y agua';
            compararPrivado.textContent = 'Espacio privado';
            compararBanos.textContent = 'Baños privados';
            compararMobiliario.textContent = 'Mobiliario incluido';
            compararAire.textContent = 'Aire acondicionado y calefacción';
            compararServicios.textContent = 'Servicios exclusivos';
            compararCocina.textContent = 'Cocina privada';
            compararPicnic.textContent = 'Área de picnic con parrilla';
            parcelasPrecio.textContent = '/noche';
            glampingPrecio.textContent = '/noche';
            bungalowsPrecio.textContent = '/noche';
            break;
    
        default:
            break;
    }
}