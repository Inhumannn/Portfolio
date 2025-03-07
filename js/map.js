const map = L.map('map').setView([43.4074020, 6.0582326], 14);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">Carto</a>'
}).addTo(map);
map.scrollWheelZoom.disable();
L.marker([43.4071912, 6.0552326]).addTo(map)
    .bindPopup("<b>La Plateforme Brignoles</b>");