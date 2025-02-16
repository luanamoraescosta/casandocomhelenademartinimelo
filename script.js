document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const eventDate = new Date("December 25, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days + "<br><small>Dias</small>";
        document.getElementById("hours").innerHTML = hours + "<br><small>Horas</small>";
        document.getElementById("minutes").innerHTML = minutes + "<br><small>Minutos</small>";
        document.getElementById("seconds").innerHTML = seconds + "<br><small>Segundos</small>";
    }
    setInterval(updateCountdown, 1000);

    function showPix(pixKey) {
        document.getElementById("pix-display").textContent = "Chave Pix: " + pixKey;
    }
    window.showPix = showPix;

    var map = L.map('map').setView([-25.436607, -49.278315], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([-25.436607, -49.278315]).addTo(map)
        .bindPopup('Restaurante Chez Margot - Local da Cerimônia')
        .openPopup();
});
