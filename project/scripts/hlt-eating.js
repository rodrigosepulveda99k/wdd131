const fruit = [
    {
        Name: "Apple",
        description: "They are very low in calories and have high doses of fiber, both soluble and insoluble.",
        imageSrc: "images/apple.webp",
        imgWidth: "400",
        imgHeight: "300",
    },
    {
        Name: "Avocado",
        description: "It is considered the most nutritious fruit in the world, as it contains 25 of the most essential nutrients.",
        imageSrc: "images/avocado.webp",
        imgWidth: "400",
        imgHeight: "300",
    },
    {
        Name: "Banana",
        description: "Fat free and full of energy.",
        imageSrc: "images/banana.webp",
        imgWidth: "400",
        imgHeight: "300",
    },
    {
        Name: "Citrus",
        description: "They provide a large amount of vitamin C, essential to combat inflammatory processes.",
        imageSrc: "images/citrus.webp",
        imgWidth: "400",
        imgHeight: "300",
    },
    {
        Name: "Grapes",
        description: "They contain essential elements, such as tannins, flavonoids and anthocyanins.",
        imageSrc: "images/grapes.webp",
        imgWidth: "400",
        imgHeight: "300",
    },
    {
        Name: "Pineapple",
        description: "They are loaded with vitamins and minerals including vitamin A, vitamin C, calcium, phosphorus and potassium.",
        imageSrc: "images/pineapple.webp",
        imgWidth: "400",
        imgHeight: "300",
    },
    {
        Name: "Strawberries",
        description: "They have vitamin C and are full of vitamins B2, B5, B6 and K, copper and magnesium.",
        imageSrc: "images/Strawberries.webp",
        imgWidth: "400",
        imgHeight: "300",
    },
    {
        Name: "Watermelon",
        description: "Packed with some of the most important antioxidants found in nature, it is an excellent source of vitamin C and A.",
        imageSrc: "images/watermelon.webp",
        imgWidth: "400",
        imgHeight: "300",
    },
  
]

function createFruits(fruit) {

    const fruitDiv = document.createElement('div');
    fruitDiv.className = "fruit";

    const heading = document.createElement('h2');
    heading.textContent = fruit.Name;

    const div1 = document.createElement('div');
    div1.className = "fruit-details";
    const pLabel1 = document.createElement('p');
    pLabel1.textContent = "Description:"
    pLabel1.className = "label";
    const pValue1 = document.createElement('p');
    pValue1.textContent = fruit.description;
    div1.appendChild(pLabel1);
    div1.appendChild(pValue1);

    const img = document.createElement('img');
    img.src = fruit.imageSrc;
    img.alt = fruit.fruitName;
    img.width = "400";
    img.height = "300";
    img.loading = "lazy";

    fruitDiv.appendChild(heading);
    fruitDiv.appendChild(div1);
    fruitDiv.appendChild(img);

    document.querySelector('.fruit-display').appendChild(fruitDiv);
}

function displayfruit(displaySelection) {

    console.log(`displaying fruit: ${displaySelection}`)

    document.querySelector('.fruit-display').innerHTML = "";

    for (let i = 0; i < fruit.length; i++) {
        switch (displaySelection) {
            case 'old':
                if (parseInt(fruit[i].dedicated.substring(0, 4)) < 1900) {
                    createFruits(fruit[i]);
                }
                break;
            case 'new':
                if (parseInt(fruit[i].dedicated.substring(0, 4)) > 2000) {
                    createFruits(fruit[i]);
                }
                break;
            case 'large':
                if (fruit[i].area > 90000) {
                    createFruits(fruit[i]);
                }
                break;
            case 'small':
                if (fruit[i].area < 10000) {
                    createFruits(fruit[i]);
                }
                break;
            default:
                createFruits(fruit[i]);
                break;
        }
    }
}

displayfruit("Fruit");
