// Initialize the map
const map = L.map('map').setView([0, 0], 2);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Fetch and display locations from the server
fetch('/api/locations')
  .then(response => response.json())
  .then(data => {
    data.forEach(location => {
      L.marker([location.latitude, location.longitude])
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`);
    });
  })
  .catch(error => console.error('Error fetching locations:', error));
