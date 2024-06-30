const body = document.querySelector("body");
const noLocationFoundText = document.querySelector(".no-location-found-text");
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
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
const weatherIcon = document.querySelector(".weather-icons");
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

const windDirectionMapping = {
  N: "North",
  NNE: "North-Northeast",
  NE: "Northeast",
  ENE: "East-Northeast",
  E: "East",
  ESE: "East-Southeast",
  SE: "Southeast",
  SSE: "South-Southeast",
  S: "South",
  SSW: "South-Southwest",
  SW: "Southwest",
  WSW: "West-Southwest",
  W: "West",
  WNW: "West-Northwest",
  NW: "Northwest",
  NNW: "North-Northwest",
};

async function retrieveData(location) {
  try {
    const timestamp = new Date().getTime();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a59915d7fc264ed480f195910242306&q=${location}&timestamp=${timestamp}&days=3`,
      { mode: "cors" }
    );

    if (response.ok) {
      data = await response.json();
      localTime = new Date(data.location.localtime);
      formattedDate = formatDate(localTime);
      timeZone = data.location.tz_id;
      currentCity = data.location.name;
      currentCountry = data.location.country;
      currentTemperatureC = data.current.temp_c;
      currentTemperatureF = data.current.temp_f;
      currentTemperatureFeelsLikeC = data.current.feelslike_c;
      currentTemperatureFeelsLikeF = data.current.feelslike_f;
      currentVisibilityKm = data.current.vis_km;
      currentVisibilityMph = data.current.vis_miles;
      currentHumidity = data.current.humidity;
      currentWindSpeedKm = data.current.wind_kph;
      currentWindSpeedMph = data.current.wind_mph;
      currentGustSpeedKm = data.current.gust_kph;
      currentGustSpeedMph = data.current.gust_mph;
      currentCloudiness = data.current.cloud;
      currentWindDirection = windDirectionMapping[data.current.wind_dir];
      currentSunrise = data.forecast.forecastday[0].astro.sunrise;
      currentSunset = data.forecast.forecastday[0].astro.sunset;
      currentChanceOfRain =
        data.forecast.forecastday[0].day.daily_chance_of_rain;
      currentDay = data.forecast.forecastday[0].hour;
      currentHourlyTemperatureC = data.forecast.forecastday[0].hour.temp_c;
      currentHourlyTemperatureF = data.forecast.forecastday[0].hour.temp_f;
      isDay = data.current.is_day;
      weatherIcon.src = `https:${data.current.condition.icon}`;

      currentDailyMinTemperatureC = [
        data.forecast.forecastday[0].day.mintemp_c,
        data.forecast.forecastday[1].day.mintemp_c,
        data.forecast.forecastday[2].day.mintemp_c,
      ];
      currentDailyMaxTemperatureC = [
        data.forecast.forecastday[0].day.maxtemp_c,
        data.forecast.forecastday[1].day.maxtemp_c,
        data.forecast.forecastday[2].day.maxtemp_c,
      ];
      currentDailyMinTemperatureF = [
        data.forecast.forecastday[0].day.mintemp_f,
        data.forecast.forecastday[1].day.mintemp_f,
        data.forecast.forecastday[2].day.mintemp_f,
      ];
      currentDailyMaxTemperatureF = [
        data.forecast.forecastday[0].day.maxtemp_f,
        data.forecast.forecastday[1].day.maxtemp_f,
        data.forecast.forecastday[2].day.maxtemp_f,
      ];
      currentDailyForecastIcons = [
        data.forecast.forecastday[0].day.condition.icon,
        data.forecast.forecastday[1].day.condition.icon,
        data.forecast.forecastday[2].day.condition.icon,
      ];

      currentDailyForecastDates = [
        new Date(data.forecast.forecastday[0].date).toLocaleDateString(
          "en-US",
          { weekday: "long" }
        ),
        new Date(data.forecast.forecastday[1].date).toLocaleDateString(
          "en-US",
          { weekday: "long" }
        ),
        new Date(data.forecast.forecastday[2].date).toLocaleDateString(
          "en-US",
          { weekday: "long" }
        ),
      ];

      updateUvIndex(data.current.uv);
      updateDataDisplay();
      displayHourlyForecast(currentDay, timeZone);

      console.log(data);
    } else {
      noLocationFoundText.style.display = "flex";
      throw new Error("Failed to fetch data!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function translateText(text) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=bg|en`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    if (result.responseData && result.responseData.translatedText) {
      return result.responseData.translatedText;
    } else {
      throw new Error("No translated text found in response!");
    }
  } catch (error) {
    console.error("Error translating text:", error);
    throw new Error("Translation failed!");
  }
}

function formatDate(date) {
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

function displayHourlyForecast(hourlyData, timeZone) {
  hourlyForecastElementsContainer.innerHTML = "";

  const currentTime = new Date().toLocaleString("en-US", { timeZone });
  const currentDate = new Date(currentTime);
  const next24Hours = [];

  for (let i = 0; i < hourlyData.length; i++) {
    const hourDate = new Date(hourlyData[i].time);
    const hourInTimeZone = new Date(
      hourDate.toLocaleString("en-US", { timeZone })
    );

    const hourDiff = (hourInTimeZone - currentDate) / (1000 * 60 * 60);

    if (hourDiff > 0 && hourDiff <= 24) {
      next24Hours.push(hourlyData[i]);
    }
  }

  for (let i = 0; next24Hours.length < 24 && i < hourlyData.length; i++) {
    next24Hours.push(hourlyData[i]);
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
  currentDailyForecastDates
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

function updateDataDisplay() {
  retrievedLocation.textContent = `${currentCity}, ${currentCountry}`;

  retrievedCurrentTime.textContent = formattedDate;
  retrievedTemperature.textContent = isCelsius
    ? `${currentTemperatureC} °C`
    : `${currentTemperatureF} °F`;

  retrievedTemperatureFeelsLike.textContent = isCelsius
    ? `${currentTemperatureFeelsLikeC} °C`
    : `${currentTemperatureFeelsLikeF} °F`;

  retrievedHumidity.textContent = `${currentHumidity}%`;

  retrievedVisibility.textContent = isCelsius
    ? `${currentVisibilityKm} km`
    : `${currentVisibilityMph} mi`;

  retrievedWindSpeed.textContent = isCelsius
    ? `${currentWindSpeedKm} km/h`
    : `${currentWindSpeedMph} mph`;

  retrievedGustSpeed.textContent = isCelsius
    ? `${currentGustSpeedKm} km/h`
    : `${currentGustSpeedMph} mph`;

  retrievedCloudiness.textContent = `${currentCloudiness}%`;
  retrievedWindDirection.textContent = currentWindDirection;
  retrievedSunrise.textContent = currentSunrise;
  retrievedSunset.textContent = currentSunset;
  retrievedChanceOfRain.textContent = `${currentChanceOfRain}%`;

  displayHourlyForecast(currentDay, timeZone);
  displayDailyForecast(
    currentDailyMinTemperatureC,
    currentDailyMaxTemperatureC,
    currentDailyMinTemperatureF,
    currentDailyMaxTemperatureF,
    currentDailyForecastDates
  );

  if (retrievedHourlyTemperature) {
    retrievedHourlyTemperature.textContent = isCelsius
      ? `${currentHourlyTemperatureC} °C`
      : `${currentHourlyTemperatureF} °F`;
  }

  if (isDay === 1) {
    body.style.background = "url('./imgs/background-day-image.jpg')";
  } else {
    body.style.background = "url('./imgs/background-night-image.jpg')";
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

function toggleTempMetrics() {
  isCelsius = !isCelsius;
  switchTempMetricsButton.textContent = isCelsius
    ? "Switch to °F, mph"
    : "Switch to °C, km/h";
  updateDataDisplay();
}

window.addEventListener("load", () => {
  retrieveData("Ruse");
});

searchButton.addEventListener("click", async () => {
  const location = searchInput.value.trim();
  if (location) {
    try {
      const translatedLocation = await translateText(location);
      await retrieveData(translatedLocation);
    } catch (error) {
      alert("Failed to translate the location!");
    }
  }
});

searchInput.addEventListener("input", () => {
  noLocationFoundText.style.display = "none";
});

switchTempMetricsButton.addEventListener("click", toggleTempMetrics);
