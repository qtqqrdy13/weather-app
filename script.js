const weatherData = {
    "Kyiv": {
        temp: 11,
        condition: "rainy"
    },
    "Dnepr": {
        temp: 8,
        condition: "windy"
    },
    "Odessa": {
        temp: 10,
        condition: "sunny"
    }
}

const select = document.getElementById("global");
const result = document.getElementById("resultWeather");
select.onchange = () => {
    const city = select.value;
    if (city && weatherData[city]) {
        const {temp, condition} = weatherData[city];
        result.textContent = `temperature:${temp},condition:${condition}`;
    }
    else {
        select.textContent = "";
    }
}