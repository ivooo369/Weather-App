import { formatDate, updateDataDisplay } from "./interface";
import BackgroundDayImage from "./images/background-day-image.jpg";
import BackgroundNightImage from "./images/background-night-image.jpg";

const body = document.querySelector("body");
const content = document.querySelector(".content");
const noLocationFoundText = document.querySelector(".no-location-found-text");
const weatherIcon = document.querySelector(".weather-icons");
const loadingSpinner = document.querySelector(".loading-spinner");

export let weatherData = {};

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

export async function retrieveData(location) {
  try {
    loadingSpinner.style.display = "block";
    body.style.background = "white";
    content.style.display = "none";

    const timestamp = new Date().getTime();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a59915d7fc264ed480f195910242306&q=${location}&timestamp=${timestamp}&days=3`,
      { mode: "cors" }
    );

    if (response.ok) {
      const data = await response.json();
      const currentLocalTime = new Date(data.location.localtime);
      const currentFormattedDate = formatDate(currentLocalTime);
      const currentTimeZone = data.location.tz_id;
      const currentCity = data.location.name;
      const currentCountry = data.location.country;
      const currentTemperatureC = data.current.temp_c;
      const currentTemperatureF = data.current.temp_f;
      const currentTemperatureFeelsLikeC = data.current.feelslike_c;
      const currentTemperatureFeelsLikeF = data.current.feelslike_f;
      const currentVisibilityKm = data.current.vis_km;
      const currentVisibilityMph = data.current.vis_miles;
      const currentHumidity = data.current.humidity;
      const currentWindSpeedKm = data.current.wind_kph;
      const currentWindSpeedMph = data.current.wind_mph;
      const currentGustSpeedKm = data.current.gust_kph;
      const currentGustSpeedMph = data.current.gust_mph;
      const currentCloudiness = data.current.cloud;
      const currentWindDirection = windDirectionMapping[data.current.wind_dir];
      const currentSunrise = data.forecast.forecastday[0].astro.sunrise;
      const currentSunset = data.forecast.forecastday[0].astro.sunset;
      const currentChanceOfRain =
        data.forecast.forecastday[0].day.daily_chance_of_rain;
      const currentDay = data.forecast.forecastday[0].hour;
      const currentHourlyTemperatureC =
        data.forecast.forecastday[0].hour.temp_c;
      const currentHourlyTemperatureF =
        data.forecast.forecastday[0].hour.temp_f;
      const currentUv = data.current.uv;
      const isDay = data.current.is_day;
      weatherIcon.src = `https:${data.current.condition.icon}`;

      const currentDailyMinTemperatureC = [
        data.forecast.forecastday[0].day.mintemp_c,
        data.forecast.forecastday[1].day.mintemp_c,
        data.forecast.forecastday[2].day.mintemp_c,
      ];
      const currentDailyMaxTemperatureC = [
        data.forecast.forecastday[0].day.maxtemp_c,
        data.forecast.forecastday[1].day.maxtemp_c,
        data.forecast.forecastday[2].day.maxtemp_c,
      ];
      const currentDailyMinTemperatureF = [
        data.forecast.forecastday[0].day.mintemp_f,
        data.forecast.forecastday[1].day.mintemp_f,
        data.forecast.forecastday[2].day.mintemp_f,
      ];
      const currentDailyMaxTemperatureF = [
        data.forecast.forecastday[0].day.maxtemp_f,
        data.forecast.forecastday[1].day.maxtemp_f,
        data.forecast.forecastday[2].day.maxtemp_f,
      ];
      const currentDailyForecastIcons = [
        data.forecast.forecastday[0].day.condition.icon,
        data.forecast.forecastday[1].day.condition.icon,
        data.forecast.forecastday[2].day.condition.icon,
      ];

      const currentDailyForecastDates = [
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

      weatherData = {
        currentFormattedDate,
        currentCity,
        currentCountry,
        currentTemperatureC,
        currentTemperatureF,
        currentTemperatureFeelsLikeC,
        currentTemperatureFeelsLikeF,
        currentVisibilityKm,
        currentVisibilityMph,
        currentHumidity,
        currentWindSpeedKm,
        currentWindSpeedMph,
        currentGustSpeedKm,
        currentGustSpeedMph,
        currentCloudiness,
        currentWindDirection,
        currentSunrise,
        currentSunset,
        currentChanceOfRain,
        currentDailyMinTemperatureC,
        currentDailyMaxTemperatureC,
        currentDailyMinTemperatureF,
        currentDailyMaxTemperatureF,
        currentDailyForecastDates,
        currentDailyForecastIcons,
        currentDay,
        currentTimeZone,
        currentHourlyTemperatureC,
        currentHourlyTemperatureF,
        currentUv,
        isDay,
      };

      updateDataDisplay();

      console.log(data);
    } else {
      noLocationFoundText.style.display = "flex";
      throw new Error("Failed to fetch data!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    if (weatherData.isDay === 1) {
      body.style.background = `url(${BackgroundDayImage})`;
    } else {
      body.style.background = `url(${BackgroundNightImage})`;
    }

    content.style.display = "flex";
    loadingSpinner.style.display = "none";
  }
}

export async function translateText(text) {
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
