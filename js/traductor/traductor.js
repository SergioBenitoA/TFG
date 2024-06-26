export function cambiarIdiomaNavFooter(idioma) {
    switch (idioma) {
        case 'EN':
            /* NAV */
            document.getElementById('idioma').textContent = 'EN';
            document.getElementById('idiomaMobile').textContent = 'EN';
            document.getElementById('alojamientosMobile').textContent = 'ACCOMMODATIONS';
            document.getElementById('instalacionesMobile').textContent = 'FACILITIES';
            document.getElementById('reservasMobile').textContent = 'BOOKINGS';
            document.getElementById('contactoMobile').textContent = 'CONTACT';
            document.getElementById('alojamientosPC').textContent = 'ACCOMMODATIONS';
            document.getElementById('instalacionesPC').textContent = 'FACILITIES';
            document.getElementById('reservasPC').textContent = 'BOOKINGS';
            if (localStorage.getItem("correo") == "") {
                document.getElementById('span1').textContent = 'LOG IN';
                document.getElementById('span2').textContent = 'SIGN IN';
                document.getElementById('span3').textContent = 'LOG IN';
                document.getElementById('span4').textContent = 'SIGN IN';
            } else{
                document.getElementById('span1').textContent = 'UPDATE PASSWORD';
                document.getElementById('span2').textContent = 'LOG OUT';
                document.getElementById('span3').textContent = 'UPDATE PASSWORD';
                document.getElementById('span4').textContent = 'LOG OUT';
            }

            /* FOOTER */
            document.getElementById('contactoPC').textContent = 'CONTACT';
            document.getElementById('sobreNosotros').textContent = 'ABOUT US';
            document.getElementById('horario').textContent = 'Monday to Sunday 10:00 - 22:00';
            document.getElementById('siguenos').textContent = 'FOLLOW US';
            break;

        case 'ES':
            /* NAV */
            document.getElementById('idioma').textContent = 'ES';
            document.getElementById('idiomaMobile').textContent = 'ES';
            document.getElementById('alojamientosMobile').textContent = 'ALOJAMIENTOS';
            document.getElementById('instalacionesMobile').textContent = 'INSTALACIONES';
            document.getElementById('reservasMobile').textContent = 'RESERVAS';
            document.getElementById('contactoMobile').textContent = 'CONTACTO';
            document.getElementById('alojamientosPC').textContent = 'ALOJAMIENTOS';
            document.getElementById('instalacionesPC').textContent = 'INSTALACIONES';
            document.getElementById('reservasPC').textContent = 'RESERVAS';
            if (localStorage.getItem("correo") == "") {
                document.getElementById('span1').textContent = 'INICIAR SESIÓN';
                document.getElementById('span2').textContent = 'REGISTRARSE';
            } else{
                document.getElementById('span1').textContent = 'ACTUALIZAR CONTRASEÑA';
                document.getElementById('span2').textContent = 'CERRAR SESIÓN';
            }

            /* FOOTER */
            document.getElementById('contactoPC').textContent = 'CONTACTO';
            document.getElementById('sobreNosotros').textContent = 'SOBRE NOSOTROS';
            document.getElementById('horario').textContent = 'Lunes a Domingo 10:00 - 22:00';
            document.getElementById('siguenos').textContent = 'SIGUENOS';
            break;
    
        default:
            break;
    }
}

const n = '';
export default n;