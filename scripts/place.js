const tempElement = document.querySelector("#temp_value");
const conditionsElement = document.querySelector("#conditions_value");
const windElement = document.querySelector("#wind_value");
const windChillElement = document.querySelector("#wind_chill_value");

let temp = 30;
let windSpeed = 15;
let conditions = "Sunny";


const windChill = (T, V) => {
    if(T <= 10 && V > 4.8) {
        let windChillValue = 13.12 + 0.6215*T - 11.37 * V ** 0.16 + 0.3965 * T * V ** 0.16;
        return `${windChillValue.toFixed(2)}°C`
    } else {
        return "N/A"
    }
}

tempElement.textContent = `${temp}°C`;
conditionsElement.textContent = `${conditions}`;
windElement.textContent = `${windSpeed} km/h`;
windChillElement.textContent = windChill(temp, windSpeed);
