// Script para o Carrossel
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Troca automática de slides a cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}, 5000);
