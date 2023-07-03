import { getWeather, processData } from "./App/app.js";

getWeather("rotterdam")
    .then((weatherData) => {
        const Weather = processData(weatherData);
    })
    .catch((error) => {
        console.log(error);
    });
