import { getWeather, processData } from "./App/app.js";
import { initDom } from "./App/DOM.js";

getWeather("rotterdam")
    .then((weatherData) => {
        const Weather = processData(weatherData);

        initDom(Weather, "metric");
    })
    .catch((error) => {
        console.log(error);
    });
