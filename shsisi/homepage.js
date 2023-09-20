// Function to fade in elements
function fadeIn(elements, duration) {
    elements.forEach((element) => {
        element.style.opacity = 0;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.opacity = Math.min(1, progress / duration);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    });
}

// Function to slide in elements from the right
function slideIn(elements, duration) {
    elements.forEach((element) => {
        element.style.transform = 'translateX(100%)';
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.transform = `translateX(${Math.min(0, (progress / duration - 1) * 100)}%)`;

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    });
}

// Animate elements
document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');

    fadeIn(fadeInElements, 2000); // 2 seconds
    slideIn(slideInElements, 5000); // 2 seconds
});

// Duplicate the images to create the endless effect
const scrollContent = document.querySelector(".scroll-content");
const images = document.querySelectorAll(".scroll-content img");

images.forEach((image) => {
    const clone = image.cloneNode(true);
    scrollContent.appendChild(clone);
});

// JavaScript for Automatic Horizontal Scroll
const slideshowContainer = document.querySelector('.slideshow-container');

function scrollImages() {
    if (slideshowContainer.scrollLeft >= (slideshowContainer.scrollWidth - slideshowContainer.clientWidth)) {
        slideshowContainer.scrollLeft = 0;
    } else {
        slideshowContainer.scrollLeft += 1; // Adjust the scroll speed here
    }
}

setInterval(scrollImages, 50); // Adjust the interval for scrolling speed

// Function to handle the image slideshow
function startSlideshow() {
    const images = document.querySelectorAll('.image-container img');
    let currentImage = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    }

    // Show the first image
    showImage(currentImage);

    // Automatically advance to the next image every 4 seconds
    setInterval(nextImage, 4000); // 4000 milliseconds = 4 seconds
}

// Start the slideshow when the page loads
window.addEventListener('load', startSlideshow);
