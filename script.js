document.addEventListener('DOMContentLoaded', function () {
    // Messages for each slide (you can extend this list)
    const loveMessages = [
        "I miss you so much...",
        "Your smile brightens my day",
        "Every moment with you is precious",
        "You are my everything",
        "Can't wait to see you again",
        "You make my heart skip a beat",
        "Forever and always yours",
        "You are the love of my life",
        "My heart belongs to you"
    ];

    // Get DOM elements
    const slides = document.querySelectorAll('.slide');
    const loveMessage = document.getElementById('love-message');
    const currentSlideElement = document.getElementById('current');
    const totalSlidesElement = document.getElementById('total');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slideshowContainer = document.querySelector('.slideshow-container');

    let currentSlide = 0;

    // Set total slides count
    totalSlidesElement.textContent = slides.length;

    // Function to change slide
    function changeSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');

        // Update message
        loveMessage.textContent = loveMessages[currentSlide % loveMessages.length];

        // Update counter
        currentSlideElement.textContent = currentSlide + 1;

        // Add fade animation for message
        loveMessage.classList.remove('animate__animated', 'animate__fadeIn');
        void loveMessage.offsetWidth; // trigger reflow
        loveMessage.classList.add('animate__animated', 'animate__fadeIn');
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));

    // Auto advance every 5 seconds
    let slideInterval = setInterval(() => changeSlide(1), 5000);

    // Pause on hover
    slideshowContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshowContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => changeSlide(1), 5000);
    });

    // Initialize
    slides[currentSlide].classList.add('active');
    loveMessage.textContent = loveMessages[0];
    currentSlideElement.textContent = 1;
});
