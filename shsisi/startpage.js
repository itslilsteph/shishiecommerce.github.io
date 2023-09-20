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












// Function to toggle the navigation menu for smaller screens
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Add click event listener to the navigation menu icon
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleNav);

// Close the navigation menu when a menu item is clicked (for smaller screens)
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        nav.classList.remove('show');
    });
});

// Function to display a message when the "Order Now" button is clicked
function orderNow() {
    alert('Thank you for choosing Shishi Delivery Services! Your order will be on its way.');
}

// Add click event listener to the "Order Now" button
const orderButton = document.querySelector('.hero a');
orderButton.addEventListener('click', orderNow);

// JavaScript for Search Bar functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm !== "") {
            // Replace this with your search logic, e.g., redirect to search results page
            alert("Searching for: " + searchTerm);
        }
    });

    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const searchTerm = searchInput.value.trim();

            if (searchTerm !== "") {
                // Replace this with your search logic, e.g., redirect to search results page
                alert("Searching for: " + searchTerm);
            }
        }
    });
});
