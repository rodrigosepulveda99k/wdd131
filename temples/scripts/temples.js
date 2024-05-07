document.addEventListener('DOMContentLoaded', function() {
    // Get current year for copyright
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('#copyright');
    copyrightElement.textContent = currentYear;

    // Get last modified date for last modified date output
    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedElement = document.querySelector('#lastModified');
    lastModifiedElement.textContent = lastModifiedDate.toDateString();
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('#menuButton');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});
