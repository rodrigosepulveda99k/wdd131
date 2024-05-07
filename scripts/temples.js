document.getElementById("currentyear").innerHTML = new Date().getFullYear();

const moddate = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});