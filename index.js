let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to change slide
function changeSlide() {
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Go back to the first slide
    }

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide
    }

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next slide function
function nextSlide() {
    currentIndex++;
    changeSlide();
}

// Previous slide function
function prevSlide() {
    currentIndex--;
    changeSlide();
}

// Automatic slide change every 3 seconds
setInterval(nextSlide, 3000);

// Add event listeners for manual navigation (optional)
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

