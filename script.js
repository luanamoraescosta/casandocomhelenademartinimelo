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
var map = L.map('map').setView([-25.437172436541392, -49.3003412915796], 15); // Coordenadas do restaurante

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var marker = L.marker([-25.437172436541392, -49.3003412915796]).addTo(map);
marker.bindPopup('<strong>Chez Margot</strong><br>R. Dona Alice Tibiriçá, 286<br>Bigorrilho, Curitiba - PR').openPopup();
