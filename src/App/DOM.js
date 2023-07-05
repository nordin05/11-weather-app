const countryDiv = document.querySelector(".location .country");
const regionDiv = document.querySelector(".location .region");
const dateDiv = document.querySelector(".location .date");
const timeDiv = document.querySelector(".location .time");

const imgDiv = document.querySelector(".icon img");
const descriptionDiv = document.querySelector(".icon .description");

const tempDiv = document.querySelector(".temprature .temp");

const humidSpan = document.querySelector(".info .humidity span");
const precipSpan = document.querySelector(".info .precipitation span");
const windDirection = document.querySelector(".info .wind .direction");
const windSpeedSpan = document.querySelector(".info .wind .speed");

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
        Weather[units].wind_speed,
        units
    );
}

export function toggleDOM(err, mode) {
    if (mode == "error") {
        setDisplays("none", "none", err);
    } else {
        setDisplays("grid", "flex", "");
    }
}

function setDisplays(grid, flex, error_msg) {
    const location = document.querySelector(".location");
    const icon = document.querySelector(".icon");
    const temprature = document.querySelector(".temprature");
    const info = document.querySelector(".info");
    const error = document.querySelector(".error h1");

    location.style.display = grid;
    icon.style.display = flex;
    temprature.style.display = flex;
    info.style.display = flex;

    error.innerHTML = error_msg;
}

function setLocation(country, city, region, time) {
    countryDiv.innerHTML = country;
    regionDiv.innerHTML = city;

    time = time.split(" ");
    dateDiv.innerHTML = time[0].replaceAll("-", "/");
    timeDiv.innerHTML = time[1];
}

function setIcon(src, desc) {
    imgDiv.src = src;
    descriptionDiv.innerHTML = desc;
}

function setTemprature(temprature) {
    tempDiv.innerHTML = Math.round(temprature);
}

function setInfo(humidity, precipitation, windDir, windSpeed, units) {
    humidSpan.innerHTML = humidity + " %";

    const newWindDir = windDir + 90;
    windDirection.style.transform = `rotate(${newWindDir}deg)`;

    if (units == "metric") {
        precipSpan.innerHTML = precipitation + " mm";
        windSpeedSpan.innerHTML = windSpeed + " km/h";
    } else {
        precipSpan.innerHTML = precipitation + " in";
        windSpeedSpan.innerHTML = windSpeed + " mp/h";
    }
}
