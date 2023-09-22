// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve and apply saved colors on page load
    const savedNavbarColor = localStorage.getItem('navbarColor');
    const savedBackgroundColor = localStorage.getItem('backgroundColor');

    if (savedNavbarColor) {
        document.querySelector('.navbar').style.background = savedNavbarColor;
        document.getElementById('navbarColor').value = savedNavbarColor;
    }

    if (savedBackgroundColor) {
        document.body.style.background = savedBackgroundColor;
        document.getElementById('backgroundColor').value = savedBackgroundColor;
    }

    // JavaScript to handle color changes and save to local storage
    document.getElementById('navbarColor').addEventListener('input', function () {
        document.querySelector('.navbar').style.background = this.value;
        localStorage.setItem('navbarColor', this.value);
    });

    document.getElementById('backgroundColor').addEventListener('input', function () {
        document.body.style.background = this.value;
        localStorage.setItem('backgroundColor', this.value);
    });
});
