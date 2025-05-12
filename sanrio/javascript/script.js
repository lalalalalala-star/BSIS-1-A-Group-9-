let index = 0;
const characters = document.querySelector(".characters");
const totalCharacters = document.querySelectorAll(".character").length;
const visibleCharacters = 3; // Show 3 at a time

function updateCarousel() {
    const characterWidth = document.querySelector(".character").offsetWidth;
    characters.style.transform = `translateX(-${index * characterWidth}px)`;
}

function nextCharacters() {
    if (index + visibleCharacters < totalCharacters) {
        index += visibleCharacters;
    } else {
        index = 0; // Loop back to the start
    }
    updateCarousel();
}

function prevCharacters() {
    if (index - visibleCharacters >= 0) {
        index -= visibleCharacters;
    } else {
        index = totalCharacters - visibleCharacters; // Go to last set
    }
    updateCarousel();
}

// Adjust on window resize
window.addEventListener("resize", updateCarousel);
