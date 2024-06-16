function showSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'flex'
}

function hideSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'none'
}

function iniciarSesion(){
    if (localStorage.getItem("correo") == "") {
        window.location.href = 'login.html';
    } else {
        window.location.href = 'actualizarContrasena.html'
    }
}

function registrarse(){
    const idioma = localStorage.getItem("lenguaje");
    if (localStorage.getItem("correo") == "") {
        window.location.href = 'registro.html';
    } else {
        localStorage.setItem("correo", "");
        switch (idioma) {
            case 'EN':
                localStorage.setItem('mensaje', '¡See you soon!');
                break;
            case 'ES':
                localStorage.setItem('mensaje', '¡Hasta pronto!');
                break;
            default:
                break;
        }
        localStorage.setItem('showToast', 'true');
                
        window.location.href = 'principal.html';
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const iconMenuMobile = document.getElementById('iconMenuMobile');
    const span1 = document.getElementById('span1');
    const span2 = document.getElementById('span2');

    if(localStorage.getItem("correo") === ""){
        iconMenuMobile.style.width = '160px';
        span1.textContent = 'Iniciar sesión';
        span2.textContent = 'Registrarse';
        span3.textContent = 'INICIAR SESIÓN';
        span4.textContent = 'REGISTRARSE';
    } else{
        iconMenuMobile.style.width = '228px';
        span1.textContent = 'Actualizar contraseña';
        span2.textContent = 'Cerrar sesión';
        span2.style.color = 'red';
        span3.textContent = 'ACTUALIZAR CONTRASEÑA';
        span4.textContent = 'CERRAR SESIÓN';
        span4.style.color = 'red';
    }

    span1.addEventListener('click', function(event) {
        if (localStorage.getItem("correo") == "") {
            window.location.href = 'login.html';
        } else {
            window.location.href = 'actualizarContrasena.html'
        }
    });

    span2.addEventListener('click', function(event) {
        if (localStorage.getItem("correo") == "") {
            window.location.href = 'registro.html';
        } else {
            localStorage.setItem("correo", "");
            localStorage.setItem('mensaje', '¡Hasta pronto!');
            localStorage.setItem('showToast', 'true');
                    
            window.location.href = 'principal.html';
        }
    });

   const bookingButtons = document.querySelectorAll('.booking-btn'); // Selecciona todos los botones con la clase 'booking-btn'
    
   bookingButtons.forEach(function(button) {
       button.addEventListener('click', function() {
           window.location.href = 'datos.html'; // Cambia la URL a 'datos.html'
       });
   });

   // Seleccionar todos los elementos que activan los menús desplegables
   const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

   dropdownToggles.forEach(toggle => {
       const dropdownMenu = toggle.nextElementSibling; // Asumiendo que el menú desplegable es el hermano inmediatamente siguiente

       toggle.addEventListener('click', function(event) {
           event.preventDefault(); // Previene la navegación estándar del enlace
          if (dropdownMenu.style.display === 'block') {
               dropdownMenu.style.display = 'none';
           } else {
             // Alternar la visibilidad del menú desplegable asociado
              // Asegúrate de que todos los otros menús desplegables estén cerrados antes de abrir uno nuevo
               closeAllDropdowns();
               dropdownMenu.style.display = 'block';
           }
       });
   });

   // Función para cerrar todos los menús desplegables
   function closeAllDropdowns() {
       const allDropdownMenus = document.querySelectorAll('.dropdown-menu');
       allDropdownMenus.forEach(menu => {
           menu.style.display = 'none';
       });
   }

   // Cerrar menús desplegables si se hace clic fuera de ellos
   document.addEventListener('click', function(event) {
       if (!event.target.matches('.dropdown-toggle')) {
           closeAllDropdowns();
       }
   }, true);
});

var map = L.map('map').setView([ 41.664899, -4.72382], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([ 41.664899,-4.72382]).addTo(map);