document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const page = document.querySelector('main');
const heading = document.querySelector('#header-title');
const bottom = document.querySelector('footer');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
});

page.addEventListener('click', () => {
    hamButton.classList.remove('open');
    navigation.classList.remove('open');
});

heading.addEventListener('click', () => {
    hamButton.classList.remove('open');
    navigation.classList.remove('open');
});

bottom.addEventListener('click', () => {
    hamButton.classList.remove('open');
    navigation.classList.remove('open');
});