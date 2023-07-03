import { getWeather, processData } from "./App/app.js";
import { initDOM } from "./App/DOM.js";

const searchBtn = document.querySelector(".search button");
const inputBar = document.querySelector(".search input");

searchBtn.addEventListener("click", function () {
    const location = inputBar.value;
    getWeather(location).then((weatherData) => {
        processWeatherData(weatherData);
    });
});

function processWeatherData(weatherData) {
    if (!weatherData.error) {
        const Weather = processData(weatherData);
        initDOM(Weather, "metric");
    } else {
        console.log(weatherData.error.message);
    }
}
