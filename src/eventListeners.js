import { retrieveData, translateText } from "./api";
import { toggleTempMetrics } from "./interface";

const noLocationFoundText = document.querySelector(".no-location-found-text");
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const switchTempMetricsButton = document.querySelector(
  ".switch-temp-metrics-button"
);

export function handleEventListeners() {
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
}
