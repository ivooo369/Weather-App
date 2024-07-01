import "./style.css";
import { retrieveData } from "./api";
import { handleEventListeners } from "./eventListeners";

handleEventListeners();

document.addEventListener("DOMContentLoaded", () => {
  retrieveData("Ruse");
});
