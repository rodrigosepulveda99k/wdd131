document.getElementById("currentyear").innerHTML = new Date().getFullYear();

const moddate = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
    },
    {
        templeName: "Montevideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/400x250/montevideo-uruguay-temple-lds-83476-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-2012-1021302-wallpaper.jpg"
    }

];

function createAndAppendTemple(temple) {

    const templeDiv = document.createElement('div');
    templeDiv.className = "temple";

    const heading = document.createElement('h2');
    heading.textContent = temple.templeName;

    const div1 = document.createElement('div');
    div1.className = "temple-details";
    const pLabel1 = document.createElement('p');
    pLabel1.textContent = "Location:"
    pLabel1.className = "label";
    const pValue1 = document.createElement('p');
    pValue1.textContent = temple.location;
    div1.appendChild(pLabel1);
    div1.appendChild(pValue1);

    const div2 = document.createElement('div');
    div2.className = "temple-details";
    const pLabel2 = document.createElement('p');
    pLabel2.textContent = "Dedicated:";
    pLabel2.className = "label";
    const pValue2 = document.createElement('p');
    pValue2.textContent = temple.dedicated;
    div2.appendChild(pLabel2);
    div2.appendChild(pValue2);

    const div3 = document.createElement('div');
    div3.className = "temple-details";
    const pLabel3 = document.createElement('p');
    pLabel3.textContent = "Size:";
    pLabel3.className = "label";
    const pValue3 = document.createElement('p');
    pValue3.textContent = `${temple.area} sq ft`;
    div3.appendChild(pLabel3);
    div3.appendChild(pValue3);

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.width = "400";
    img.height = "250";
    img.loading = "lazy";

    templeDiv.appendChild(heading);
    templeDiv.appendChild(div1);
    templeDiv.appendChild(div2);
    templeDiv.appendChild(div3);
    templeDiv.appendChild(img);

    document.querySelector('.temple-display').appendChild(templeDiv);
}

function displayTemples(displaySelection) {

    console.log(`displaying temples: ${displaySelection}`)

    document.querySelector('.temple-display').innerHTML = "";

    for (let i = 0; i < temples.length; i++) {
        switch (displaySelection) {
            case 'old':
                if (parseInt(temples[i].dedicated.substring(0, 4)) < 1900) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'new':
                if (parseInt(temples[i].dedicated.substring(0, 4)) > 2000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'large':
                if (temples[i].area > 90000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'small':
                if (temples[i].area < 10000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            default:
                createAndAppendTemple(temples[i]);
                break;
        }
    }
}

displayTemples("home");