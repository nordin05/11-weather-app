import { getWeather, processWeatherData, Weather } from "./app.js";
import { initDOM } from "./DOM.js";

const searchBtn = document.querySelector(".search button");
const inputBar = document.querySelector(".search input");
const fahrenheitDiv = document.querySelector(".temprature .fahrenheit");
const celciusDiv = document.querySelector(".temprature .celcius");

export function initListeners() {
    searchBtn.addEventListener("click", function () {
        const location = inputBar.value;
        getWeather(location).then((weatherData) => {
            processWeatherData(weatherData, "metric");
        });

        fahrenheitDiv.addEventListener("click", function () {
            initDOM(Weather, "imperial");
        });

        celciusDiv.addEventListener("click", function () {
            initDOM(Weather, "metric");
        });
    });
}
