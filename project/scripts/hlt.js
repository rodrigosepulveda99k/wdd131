document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
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