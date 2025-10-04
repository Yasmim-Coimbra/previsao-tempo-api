const API_KEY = "5901ceae457d4a20abc23008240711";
const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");

searchBtn.addEventListener("click", async () => {
    const city = document.querySelector("#search-input").value;

    if (!city) return;

    const data = await searchWeatherCondition(city);
    showDataOnScreen(data, city);
});

searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

async function searchWeatherCondition(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=pt`;

    const response = await fetch(apiUrl);

    if (response.status !== 200) return;

    const data = await response.json();
    return data;
}

function showDataOnScreen(data, city) {
    const temperature = Math.round(data.current.temp_c);
    const condition = data.current.condition.text;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;
    const conditionIcon = data.current.condition.icon;

    document.querySelector("#description").classList.add("hide");

    document.querySelector("#city").textContent = city;
    document.querySelector("#temperature").textContent = `${temperature} ºC`;
    document.querySelector("#condition").textContent = condition;
    document.querySelector("#humidity").textContent = `${humidity}%`;
    document.querySelector("#wind-speed").textContent = `${windSpeed} km/h`;
    document.querySelector("#condition-icon").setAttribute("src", conditionIcon);
}