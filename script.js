const carousel = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

// Function to update the carousel display
function updateCarousel() {
    const width = items[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Auto-roll functionality
function autoRoll() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

// Previous button functionality
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

// Next button functionality
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

// Auto-roll timer to change the banner every 3 seconds
setInterval(autoRoll, 5000);

// Maintain responsive behavior on window resize
window.addEventListener('resize', updateCarousel);