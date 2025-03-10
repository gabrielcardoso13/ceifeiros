// script.js
let index = 0;

function mover(direction) {
    const carrossel = document.querySelector('.carrossel');
    const imagens = carrossel.querySelectorAll('img');
    const totalImagens = imagens.length;

    index = (index + direction + totalImagens) % totalImagens;
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}
