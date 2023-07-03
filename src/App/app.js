import { initDOM } from "./DOM.js";

export let Weather;

export async function getWeather(location) {
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=f880993075f84db784693020230207&q=${location}`;
        const response = await fetch(url, { mode: "cors" });
        const weatherData = await response.json();
        return weatherData;
    } catch {
        console.error("Error fetching api");
    }
}

export function processWeatherData(weatherData, units) {
    if (!weatherData.error) {
        Weather = processData(weatherData);
        initDOM(Weather, units);
    } else {
        console.log(weatherData.error.message);
    }
}

function processData(weatherData) {
    console.log(weatherData);
    const Weather = {};

    Weather.location = {};
    Weather.condition = {};
    Weather.metric = {};
    Weather.imperial = {};

    Weather.location.country = weatherData.location.country;
    Weather.location.name = weatherData.location.name;
    Weather.location.region = weatherData.location.region;
    Weather.location.time = weatherData.location.localtime;

    Weather.condition.icon = weatherData.current.condition.icon;
    Weather.condition.text = weatherData.current.condition.text;

    Weather.metric.temprature = weatherData.current.temp_c;
    Weather.imperial.temprature = weatherData.current.temp_f;

    Weather.metric.humidity = weatherData.current.humidity;
    Weather.imperial.humidity = weatherData.current.humidity;

    Weather.metric.precipitation = weatherData.current.precip_mm;
    Weather.imperial.precipitation = weatherData.current.precip_in;

    Weather.metric.wind_dir = weatherData.current.wind_degree;
    Weather.imperial.wind_dir = weatherData.current.wind_degree;

    Weather.metric.wind_speed = weatherData.current.wind_kph;
    Weather.imperial.wind_speed = weatherData.current.wind_mph;

    console.log(Weather);
    return Weather;
}
