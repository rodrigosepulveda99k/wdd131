document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // convertir cm a metros

    let bmi = weight / (height * height);

    let resultText = '';

    if (bmi < 18.5) {
        resultText = `Tu IMC es ${bmi.toFixed(2)}. Estás bajo de peso.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = `Tu IMC es ${bmi.toFixed(2)}. Tienes un peso normal.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = `Tu IMC es ${bmi.toFixed(2)}. Tienes sobrepeso.`;
    } else {
        resultText = `Tu IMC es ${bmi.toFixed(2)}. Tienes obesidad.`;
    }

    document.getElementById('result').innerText = resultText;
});
