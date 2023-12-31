import { getWeather, processWeatherData, Weather } from "./app.js";
import { initDOM } from "./DOM.js";

const searchBtn = document.querySelector(".search button");
const inputBar = document.querySelector(".search input");
const fahrenheitDiv = document.querySelector(".temprature .fahrenheit");
const celciusDiv = document.querySelector(".temprature .celcius");

export function initListeners() {
    searchBtn.addEventListener("click", function () {
        const location = inputBar.value;
        searchLocation(location);
    });
}

export function searchLocation(location) {
    if (location != "") {
        getWeather(location).then((weatherData) => {
            processWeatherData(weatherData, "metric");
        });

        fahrenheitDiv.addEventListener("click", function () {
            initDOM(Weather, "imperial");
            fahrenheitDiv.style.fontWeight = "600";
            celciusDiv.style.fontWeight = "500";
        });

        celciusDiv.addEventListener("click", function () {
            initDOM(Weather, "metric");
            fahrenheitDiv.style.fontWeight = "500";
            celciusDiv.style.fontWeight = "600";
        });
    }
}
