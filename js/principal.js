function showSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'flex'
}

function hideSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function(){
   const bookingButtons = document.querySelectorAll('.booking-btn'); // Selecciona todos los botones con la clase 'booking-btn'
    
   bookingButtons.forEach(function(button) {
       button.addEventListener('click', function() {
           window.location.href = 'datos.html'; // Cambia la URL a 'datos.html'
       });
   });

   const loginA = document.querySelector('a[href="login.html"]');
   const iconLi = document.getElementById('iconLi');
   const faceIcon = document.getElementById('faceIcon');

   if(iconLi && faceIcon) {
      iconLi.addEventListener('mouseenter', function() {
         faceIcon.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNERUI4ODciIGQ9Ik0xMiAxMXEuODI1IDAgMS40MTMtLjU4OFExNCA5LjgyNSAxNCA5dC0uNTg3LTEuNDEzUTEyLjgyNSA3IDEyIDdxLS44MjUgMC0xLjQxMi41ODdRMTAgOC4xNzUgMTAgOXEwIC44MjUuNTg4IDEuNDEyUTExLjE3NSAxMSAxMiAxMVptMCAycS0xLjY1IDAtMi44MjUtMS4xNzVROCAxMC42NSA4IDlxMC0xLjY1IDEuMTc1LTIuODI1UTEwLjM1IDUgMTIgNXExLjY1IDAgMi44MjUgMS4xNzVRMTYgNy4zNSAxNiA5cTAgMS42NS0xLjE3NSAyLjgyNVExMy42NSAxMyAxMiAxM1ptMCAxMXEtMi40NzUgMC00LjY2Mi0uOTM4cS0yLjE4OC0uOTM3LTMuODI1LTIuNTc0UTEuODc1IDE4Ljg1LjkzOCAxNi42NjNRMCAxNC40NzUgMCAxMnQuOTM4LTQuNjYzcS45MzctMi4xODcgMi41NzUtMy44MjVRNS4xNSAxLjg3NSA3LjMzOC45MzhROS41MjUgMCAxMiAwdDQuNjYzLjkzOHEyLjE4Ny45MzcgMy44MjUgMi41NzRxMS42MzcgMS42MzggMi41NzQgMy44MjVRMjQgOS41MjUgMjQgMTJ0LS45MzggNC42NjNxLS45MzcgMi4xODctMi41NzQgMy44MjVxLTEuNjM4IDEuNjM3LTMuODI1IDIuNTc0UTE0LjQ3NSAyNCAxMiAyNFptMC0ycTEuOCAwIDMuMzc1LS41NzVUMTguMjUgMTkuOHEtLjgyNS0uOTI1LTIuNDI1LTEuNjEycS0xLjYtLjY4OC0zLjgyNS0uNjg4dC0zLjgyNS42ODhxLTEuNi42ODctMi40MjUgMS42MTJxMS4zIDEuMDUgMi44NzUgMS42MjVUMTIgMjJabS03LjctMy42cTEuMi0xLjMgMy4yMjUtMi4xcTIuMDI1LS44IDQuNDc1LS44cTIuNDUgMCA0LjQ2My44cTIuMDEyLjggMy4yMTIgMi4xcTEuMS0xLjMyNSAxLjcxMy0yLjk1UTIyIDEzLjgyNSAyMiAxMnEwLTIuMDc1LS43ODgtMy44ODdxLS43ODctMS44MTMtMi4xNS0zLjE3NXEtMS4zNjItMS4zNjMtMy4xNzUtMi4xNTFRMTQuMDc1IDIgMTIgMnEtMi4wNSAwLTMuODc1Ljc4N3EtMS44MjUuNzg4LTMuMTg3IDIuMTUxUTMuNTc1IDYuMyAyLjc4OCA4LjExM1EyIDkuOTI1IDIgMTJxMCAxLjgyNS42IDMuNDYzcS42IDEuNjM3IDEuNyAyLjkzN1oiLz48L3N2Zz4=';
      });

      iconLi.addEventListener('mouseleave', function() {
         faceIcon.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMiAxMXEuODI1IDAgMS40MTMtLjU4OFExNCA5LjgyNSAxNCA5dC0uNTg3LTEuNDEzUTEyLjgyNSA3IDEyIDdxLS44MjUgMC0xLjQxMi41ODdRMTAgOC4xNzUgMTAgOXEwIC44MjUuNTg4IDEuNDEyUTExLjE3NSAxMSAxMiAxMVptMCAycS0xLjY1IDAtMi44MjUtMS4xNzVROCAxMC42NSA4IDlxMC0xLjY1IDEuMTc1LTIuODI1UTEwLjM1IDUgMTIgNXExLjY1IDAgMi44MjUgMS4xNzVRMTYgNy4zNSAxNiA5cTAgMS42NS0xLjE3NSAyLjgyNVExMy42NSAxMyAxMiAxM1ptMCAxMXEtMi40NzUgMC00LjY2Mi0uOTM4cS0yLjE4OC0uOTM3LTMuODI1LTIuNTc0UTEuODc1IDE4Ljg1LjkzOCAxNi42NjNRMCAxNC40NzUgMCAxMnQuOTM4LTQuNjYzcS45MzctMi4xODcgMi41NzUtMy44MjVRNS4xNSAxLjg3NSA3LjMzOC45MzhROS41MjUgMCAxMiAwdDQuNjYzLjkzOHEyLjE4Ny45MzcgMy44MjUgMi41NzRxMS42MzcgMS42MzggMi41NzQgMy44MjVRMjQgOS41MjUgMjQgMTJ0LS45MzggNC42NjNxLS45MzcgMi4xODctMi41NzQgMy44MjVxLTEuNjM4IDEuNjM3LTMuODI1IDIuNTc0UTE0LjQ3NSAyNCAxMiAyNFptMC0ycTEuOCAwIDMuMzc1LS41NzVUMTguMjUgMTkuOHEtLjgyNS0uOTI1LTIuNDI1LTEuNjEycS0xLjYtLjY4OC0zLjgyNS0uNjg4dC0zLjgyNS42ODhxLTEuNi42ODctMi40MjUgMS42MTJxMS4zIDEuMDUgMi44NzUgMS42MjVUMTIgMjJabS03LjctMy42cTEuMi0xLjMgMy4yMjUtMi4xcTIuMDI1LS44IDQuNDc1LS44cTIuNDUgMCA0LjQ2My44cTIuMDEyLjggMy4yMTIgMi4xcTEuMS0xLjMyNSAxLjcxMy0yLjk1UTIyIDEzLjgyNSAyMiAxMnEwLTIuMDc1LS43ODgtMy44ODdxLS43ODctMS44MTMtMi4xNS0zLjE3NXEtMS4zNjItMS4zNjMtMy4xNzUtMi4xNTFRMTQuMDc1IDIgMTIgMnEtMi4wNSAwLTMuODc1Ljc4N3EtMS44MjUuNzg4LTMuMTg3IDIuMTUxUTMuNTc1IDYuMyAyLjc4OCA4LjExM1EyIDkuOTI1IDIgMTJxMCAxLjgyNS42IDMuNDYzcS42IDEuNjM3IDEuNyAyLjkzN1oiLz48L3N2Zz4=';
      });
   }

   // Seleccionar todos los elementos que activan los menús desplegables
   const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

   dropdownToggles.forEach(toggle => {
       const dropdownMenu = toggle.nextElementSibling; // Asumiendo que el menú desplegable es el hermano inmediatamente siguiente

       toggle.addEventListener('click', function(event) {
           event.preventDefault(); // Previene la navegación estándar del enlace
           // Alternar la visibilidad del menú desplegable asociado
           if (dropdownMenu.style.display === 'block') {
               dropdownMenu.style.display = 'none';
           } else {
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