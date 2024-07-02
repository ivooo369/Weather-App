import Icon from "./images/tab-icon.jpg";
import BackgroundDayImage from "./images/background-day-image.jpg";
import BackgroundNightImage from "./images/background-night-image.jpg";
import TemperatureIcon from "./images/temperature-icon.png";
import TemperatureFeelsLikeIcon from "./images/temperature-feels-like-icon.png";
import HumidityIcon from "./images/humidity-icon.png";
import WindDirectionIcon from "./images/wind-direction-icon.png";
import WindSpeedIcon from "./images/wind-speed-icon.png";
import GustSpeedIcon from "./images/gust-speed-icon.png";
import ChanceOfRainIcon from "./images/chance-of-rain-icon.png";
import CloudinessIcon from "./images/cloudiness-icon.png";
import SunriseIcon from "./images/sunrise-icon.png";
import SunsetIcon from "./images/sunset-icon.png";
import VisibilityIcon from "./images/visibility-icon.png";
import UvIndexIcon from "./images/uv-index-icon.png";
import { weatherData } from "./api";

const body = document.querySelector("body");
const retrievedLocation = document.querySelector(".retrieved-location");
const retrievedCurrentTime = document.querySelector(".retrieved-current-time");
const retrievedTemperature = document.querySelector(".retrieved-temperature");
const retrievedTemperatureFeelsLike = document.querySelector(
  ".retrieved-temperature-feels-like"
);
const retrievedHumidity = document.querySelector(".retrieved-humidity");
const retrievedVisibility = document.querySelector(".retrieved-visibility");
const retrievedWindSpeed = document.querySelector(".retrieved-wind-speed");
const retrievedGustSpeed = document.querySelector(".retrieved-gust-speed");
const retrievedCloudiness = document.querySelector(".retrieved-cloudiness");
const retrievedWindDirection = document.querySelector(
  ".retrieved-wind-direction"
);
const retrievedUvIndex = document.querySelector(".retrieved-uv-index");
const retrievedSunrise = document.querySelector(".retrieved-sunrise");
const retrievedSunset = document.querySelector(".retrieved-sunset");
const retrievedChanceOfRain = document.querySelector(
  ".retrieved-chance-of-rain"
);
const switchTempMetricsButton = document.querySelector(
  ".switch-temp-metrics-button"
);
const hourlyForecastElementsContainer = document.querySelector(
  ".hourly-forecast-elements-container"
);
const retrievedHourlyTemperature = document.querySelector(
  ".retrieved-hourly-temperature"
);
const dailyForecastElementsContainer = document.querySelector(
  ".daily-forecast-elements-container"
);

let isCelsius = true;

export function formatDate(date) {
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();

  const ordinalSuffix = (dayOfMonth) => {
    if (dayOfMonth > 3 && dayOfMonth < 21) return "th";
    switch (dayOfMonth % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formattedDate = `${day}, ${dayOfMonth}${ordinalSuffix(
    dayOfMonth
  )} ${month} ${year}`;

  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

  return `${formattedDate}\n${formattedTime}`;
}

function displayImages() {
  const head = document.querySelector("head");
  const tabIcon = document.createElement("link");
  tabIcon.rel = "icon";
  tabIcon.href = Icon;
  head.appendChild(tabIcon);

  body.style.background = `url(${BackgroundDayImage})`;

  const temperatureIcon = document.querySelector(
    ".data-container:nth-child(1) .data-icons"
  );
  temperatureIcon.src = TemperatureIcon;
  const temperatureFeelsLikeIcon = document.querySelector(
    ".data-container:nth-child(2) .data-icons"
  );
  temperatureFeelsLikeIcon.src = TemperatureFeelsLikeIcon;

  const humidityIcon = document.querySelector(
    ".data-container:nth-child(3) .data-icons"
  );
  humidityIcon.src = HumidityIcon;

  const windDirectionIcon = document.querySelector(
    ".data-container:nth-child(4) .data-icons"
  );
  windDirectionIcon.src = WindDirectionIcon;

  const windSpeedIcon = document.querySelector(
    ".data-container:nth-child(5) .data-icons"
  );
  windSpeedIcon.src = WindSpeedIcon;

  const gustSpeedIcon = document.querySelector(
    ".data-container:nth-child(6) .data-icons"
  );
  gustSpeedIcon.src = GustSpeedIcon;

  const chanceOfRainIcon = document.querySelector(
    ".data-container:nth-child(7) .data-icons"
  );
  chanceOfRainIcon.src = ChanceOfRainIcon;

  const cloudinessIcon = document.querySelector(
    ".data-container:nth-child(8) .data-icons"
  );
  cloudinessIcon.src = CloudinessIcon;

  const sunriseIcon = document.querySelector(
    ".data-container:nth-child(9) .data-icons"
  );
  sunriseIcon.src = SunriseIcon;

  const sunsetIcon = document.querySelector(
    ".data-container:nth-child(10) .data-icons"
  );
  sunsetIcon.src = SunsetIcon;

  const visibilityIcon = document.querySelector(
    ".data-container:nth-child(11) .data-icons"
  );
  visibilityIcon.src = VisibilityIcon;

  const uvIndexIcon = document.querySelector(
    ".data-container:nth-child(12) .data-icons"
  );
  uvIndexIcon.src = UvIndexIcon;
}

function displayHourlyForecast(hourlyData, timeZone) {
  hourlyForecastElementsContainer.innerHTML = "";

  const currentTime = new Date().toLocaleString("en-US", { timeZone });
  const currentDate = new Date(currentTime);
  const next24Hours = [];

  let startHourIndex = hourlyData.findIndex((hourData) => {
    const hourDate = new Date(hourData.time);
    const hourInTimeZone = new Date(
      hourDate.toLocaleString("en-US", { timeZone })
    );
    return hourInTimeZone.getHours() === currentDate.getHours();
  });

  if (startHourIndex === -1) {
    startHourIndex = hourlyData.findIndex((hourData) => {
      const hourDate = new Date(hourData.time);
      const hourInTimeZone = new Date(
        hourDate.toLocaleString("en-US", { timeZone })
      );
      return hourInTimeZone.getHours() === (currentDate.getHours() + 1) % 24;
    });
  }

  for (let i = startHourIndex; i < startHourIndex + 24; i++) {
    next24Hours.push(hourlyData[i % hourlyData.length]);
  }

  next24Hours.forEach((hour) => {
    const hourElement = document.createElement("div");
    const time = new Date(hour.time);
    const formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: true,
      timeZone: timeZone,
    }).format(time);

    const temperature = isCelsius ? `${hour.temp_c} °C` : `${hour.temp_f} °F`;

    hourElement.innerHTML = `
      <div class="hourly-forecast-element">
        <strong>${formattedTime}</strong>
        <div class="temperature-data">
          <img src='https:${hour.condition.icon}'/>
          <p class="retrieved-hourly-temperature">${temperature}</p>
        </div>
      </div>
    `;

    hourlyForecastElementsContainer.appendChild(hourElement);
  });
}

function displayDailyForecast(
  currentDailyMinTemperatureC,
  currentDailyMaxTemperatureC,
  currentDailyMinTemperatureF,
  currentDailyMaxTemperatureF,
  currentDailyForecastDates,
  currentDailyForecastIcons
) {
  dailyForecastElementsContainer.innerHTML = `
      <div class="daily-forecast-element">
          <strong>${currentDailyForecastDates[0]}</strong>
          ${
            isCelsius
              ? currentDailyMinTemperatureC[0]
              : currentDailyMinTemperatureF[0]
          } ${isCelsius ? "°C" : "°F"} -
          ${
            isCelsius
              ? currentDailyMaxTemperatureC[0]
              : currentDailyMaxTemperatureF[0]
          } ${isCelsius ? "°C" : "°F"}
          <img src="https:${currentDailyForecastIcons[0]}"/>
      </div>
      <div class="daily-forecast-element">
          <strong>${currentDailyForecastDates[1]}</strong>
          ${
            isCelsius
              ? currentDailyMinTemperatureC[1]
              : currentDailyMinTemperatureF[1]
          } ${isCelsius ? "°C" : "°F"} -
          ${
            isCelsius
              ? currentDailyMaxTemperatureC[1]
              : currentDailyMaxTemperatureF[1]
          } ${isCelsius ? "°C" : "°F"}
          <img src="https:${currentDailyForecastIcons[1]}"/>
      </div>
      <div class="daily-forecast-element">
          <strong>${currentDailyForecastDates[2]}</strong>
          ${
            isCelsius
              ? currentDailyMinTemperatureC[2]
              : currentDailyMinTemperatureF[2]
          } ${isCelsius ? "°C" : "°F"} -
          ${
            isCelsius
              ? currentDailyMaxTemperatureC[2]
              : currentDailyMaxTemperatureF[2]
          } ${isCelsius ? "°C" : "°F"}
          <img src="https:${currentDailyForecastIcons[2]}"/>
      </div>
  `;
}

export function updateDataDisplay() {
  displayImages();

  retrievedLocation.textContent = `${weatherData.currentCity}, ${weatherData.currentCountry}`;

  retrievedCurrentTime.textContent = weatherData.currentFormattedDate;
  retrievedTemperature.textContent = isCelsius
    ? `${weatherData.currentTemperatureC} °C`
    : `${weatherData.currentTemperatureF} °F`;

  retrievedTemperatureFeelsLike.textContent = isCelsius
    ? `${weatherData.currentTemperatureFeelsLikeC} °C`
    : `${weatherData.currentTemperatureFeelsLikeF} °F`;

  retrievedHumidity.textContent = `${weatherData.currentHumidity}%`;

  retrievedVisibility.textContent = isCelsius
    ? `${weatherData.currentVisibilityKm} km`
    : `${weatherData.currentVisibilityMph} mi`;

  retrievedWindSpeed.textContent = isCelsius
    ? `${weatherData.currentWindSpeedKm} km/h`
    : `${weatherData.currentWindSpeedMph} mph`;

  retrievedGustSpeed.textContent = isCelsius
    ? `${weatherData.currentGustSpeedKm} km/h`
    : `${weatherData.currentGustSpeedMph} mph`;

  retrievedCloudiness.textContent = `${weatherData.currentCloudiness}%`;
  retrievedWindDirection.textContent = weatherData.currentWindDirection;
  retrievedSunrise.textContent = weatherData.currentSunrise;
  retrievedSunset.textContent = weatherData.currentSunset;
  retrievedChanceOfRain.textContent = `${weatherData.currentChanceOfRain}%`;

  updateUvIndex(weatherData.currentUv);
  displayHourlyForecast(weatherData.currentDay, weatherData.currentTimeZone);
  displayDailyForecast(
    weatherData.currentDailyMinTemperatureC,
    weatherData.currentDailyMaxTemperatureC,
    weatherData.currentDailyMinTemperatureF,
    weatherData.currentDailyMaxTemperatureF,
    weatherData.currentDailyForecastDates,
    weatherData.currentDailyForecastIcons
  );

  if (retrievedHourlyTemperature) {
    retrievedHourlyTemperature.textContent = isCelsius
      ? `${weatherData.currentHourlyTemperatureC} °C`
      : `${weatherData.currentHourlyTemperatureF} °F`;
  }
}

function updateUvIndex(uvIndex) {
  retrievedUvIndex.textContent = uvIndex;
  retrievedUvIndex.className = "retrieved-uv-index retrieved-data-margin";

  if (uvIndex <= 2) {
    retrievedUvIndex.classList.add("uv-index-green");
  } else if (uvIndex <= 5) {
    retrievedUvIndex.classList.add("uv-index-yellow");
  } else if (uvIndex <= 7) {
    retrievedUvIndex.classList.add("uv-index-orange");
  } else if (uvIndex <= 10) {
    retrievedUvIndex.classList.add("uv-index-red");
  } else {
    retrievedUvIndex.classList.add("uv-index-purple");
  }
}

export function toggleTempMetrics() {
  isCelsius = !isCelsius;
  switchTempMetricsButton.textContent = isCelsius
    ? "Switch to °F, mph"
    : "Switch to °C, km/h";
  updateDataDisplay();
}
