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