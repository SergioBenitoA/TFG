document.getElementById("learn-more-button").addEventListener("click", function() {
   window.location.href = "principal.html";
});

// Función para inicializar el mapa
function initMap() {
   // Coordenadas del centro del mapa
   var myLatLng = {lat: -25.363, lng: 131.044};

   // Opciones del mapa
   var mapOptions = {
       zoom: 4,            // Nivel de zoom
       center: myLatLng    // Coordenadas del centro del mapa
   };

   // Crear el mapa
   var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}