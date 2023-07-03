const countryDiv = document.querySelector(".location .country");
const regionDiv = document.querySelector(".location .region");
const dateDiv = document.querySelector(".location .date");
const timeDiv = document.querySelector(".location .time");

const imgDiv = document.querySelector(".icon img");
const descriptionDiv = document.querySelector(".icon .description");

const tempDiv = document.querySelector(".temprature .temp");

const humidSpan = document.querySelector(".info .humidity span");
const precipSpan = document.querySelector(".info .precipitation span");
const windSpan = document.querySelector(".info .wind .speed");

export function initDOM(Weather, units) {
    setLocation(
        Weather.location.country,
        Weather.location.name,
        Weather.location.region,
        Weather.location.time
    );
    setIcon(Weather.condition.icon, Weather.condition.text);
    setTemprature(Weather[units].temprature);
    setInfo(
        Weather[units].humidity,
        Weather[units].precipitation,
        Weather[units].wind_dir,
        Weather[units].wind_speed
    );
}

function setLocation(country, city, region, time) {
    countryDiv.innerHTML = country;
    regionDiv.innerHTML = region + ", " + city;

    time = time.split(" ");
    dateDiv.innerHTML = time[0];
    timeDiv.innerHTML = time[1];
}

function setIcon(src, desc) {
    imgDiv.src = src;
    descriptionDiv.innerHTML = desc;
}

function setTemprature(temprature) {
    tempDiv.innerHTML = temprature;
}

function setInfo(humidity, precipitation, windDir, windSpeed) {
    humidSpan.innerHTML = humidity;
    precipSpan.innerHTML = precipitation;
    windSpan.innerHTML = windSpeed;
}
