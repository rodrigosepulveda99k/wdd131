document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Rodrigo Sepulveda. All rights reserved.`;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});
