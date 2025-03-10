// script.js
let index = 0;

function mover(direction) {
    const carrossel = document.querySelector('.carrossel');
    const imagens = carrossel.querySelectorAll('img');
    const totalImagens = imagens.length;

    index = (index + direction + totalImagens) % totalImagens;
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

// Função para mover automaticamente
function autoMover() {
    mover(1);  // Move para a próxima imagem
}

// Chama a função autoMover a cada 3 segundos (3000ms)
setInterval(autoMover, 5000);

// script.js

// script.js
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}
