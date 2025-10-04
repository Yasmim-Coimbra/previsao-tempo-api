const API_KEY = "5901ceae457d4a20abc23008240711";

async function searchWeatherCondition(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=pt`;

    const response = await fetch(apiUrl);

    if (response.status !== 200) return;

    const data = await response.json();
    return data;
}