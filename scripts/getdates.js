const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);

document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate.toLocaleString();
