<<<<<<< HEAD
// Modifique a função showPix
function showPix(pixKey) {
    const modal = document.createElement('div');
    modal.className = 'pix-modal active';
    modal.innerHTML = `
        <div class="pix-content">
            <h3>Chave PIX:</h3>
            <p>${pixKey}</p>
            <button onclick="this.parentElement.parentElement.remove()">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Inicialização do mapa
var map = L.map('map').setView([-25.4284, -49.2633], 17); // Coordenadas do restaurante

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var marker = L.marker([-25.4284, -49.2633]).addTo(map);
marker.bindPopup('<strong>Chez Margot</strong><br>R. Dona Alice Tibiriçá, 286<br>Bigorrilho, Curitiba - PR').openPopup();
=======
// Modifique a função showPix
function showPix(pixKey) {
    const modal = document.createElement('div');
    modal.className = 'pix-modal active';
    modal.innerHTML = `
        <div class="pix-content">
            <h3>Chave PIX:</h3>
            <p>${pixKey}</p>
            <button onclick="this.parentElement.parentElement.remove()">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
}
>>>>>>> 66fe610b2e80307d41fbf8bc08432db4106713fd
