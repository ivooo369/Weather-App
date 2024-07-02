/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
}

body {
  height: 100vh;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

button {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

h2 {
  text-align: center;
}

header {
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.title {
  background-color: #00000080;
  color: #ffffff;
  width: 25rem;
  margin: auto;
  border-radius: 10px;
  padding: 0.3rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.no-location-found-text {
  display: none;
  align-items: center;
  background-color: #ff0000;
  color: #ffffff;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 10px;
  font-weight: bold;
}

.search-input-container {
  display: flex;
}

.search-input {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 0.75rem;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  font-weight: bold;
}

.search-input:focus {
  border: none;
  outline: none;
}

.search-button {
  padding: 0.75rem;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
  background-color: #007cb6;
  transition: 0.3s ease-in-out;
}

.search-button:hover {
  background-color: #006c9e;
}

.search-location-container {
  display: flex;
}

.retrieved-location {
  font-size: 2rem;
  font-weight: bold;
}

.retrieved-current-time {
  white-space: pre-line;
  font-size: 1.5rem;
}

.retrieved-data-margin {
  margin-left: 0.5rem;
  font-weight: 100;
}

.retrieved-temperature-container {
  font-weight: 100;
}

.location-and-time-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  background-color: #ffffff8a;
  padding: 2rem;
  border-radius: 10px;
}

.full-data-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  background-color: #ffffff8a;
  border-radius: 10px;
  padding: 1rem;
}

.forecast-container-title {
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  width: 50%;
  text-align: center;
}

.hourly-forecast-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;
  width: 50rem;
  background-color: #ffffff8a;
  border-radius: 10px;
  padding: 1rem 1rem 0 1rem;
}

.daily-forecast-container {
  gap: 1.5rem;
  overflow: auto;
  width: 50rem;
  background-color: #ffffff8a;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.hourly-forecast-elements-container,
.daily-forecast-elements-container {
  display: flex;
}

.daily-forecast-elements-container {
  justify-content: center;
  gap: 3rem;
}

.hourly-forecast-element,
.daily-forecast-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  font-size: 1.2rem;
  margin-top: 3rem;
}

.daily-forecast-element strong {
  margin-bottom: 0.5rem;
}

.temperature-data {
  display: flex;
  align-items: center;
}

.data-container {
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.data-container-retrieved-data {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.retrieved-temperature-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.data-icons {
  width: 2.5rem;
  margin-right: 0.5rem;
}

.weather-icons {
  width: 3.5rem;
}

.switch-temp-metrics-button {
  position: fixed;
  background-color: #000000;
  padding: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  height: 2.5rem;
}

.retrieved-uv-index {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.uv-index-green {
  background-color: #008000;
  color: white;
}

.uv-index-yellow {
  background-color: #ffff00;
  color: black;
}

.uv-index-orange {
  background-color: #ffa500;
  color: black;
}

.uv-index-red {
  background-color: #ff0000;
  color: white;
}

.uv-index-purple {
  background-color: #800080;
  color: white;
}

@media (max-width: 850px) {
  .hourly-forecast-container,
  .daily-forecast-container {
    width: 40rem;
  }
}

@media (max-width: 750px) {
  header {
    flex-direction: column;
  }
  .switch-temp-metrics-button {
    position: relative;
    margin-top: 1rem;
  }
  .full-data-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 680px) {
  .hourly-forecast-container,
  .daily-forecast-container {
    width: 30rem;
  }
}

@media (max-width: 600px) {
  .full-data-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  header {
    width: 100%;
  }
  .full-data-container {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    border-radius: 0;
    margin: auto;
  }
  .hourly-forecast-container,
  .daily-forecast-container {
    width: 100%;
    border-radius: 0;
    margin: auto;
  }
  .daily-forecast-elements-container {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
  .daily-forecast-element {
    margin-top: 1rem;
  }
  .daily-forecast-container .forecast-container-title {
    position: relative;
    margin-bottom: 1rem;
  }
  .daily-forecast-container {
    margin-bottom: 1rem;
  }
  .search-location-container {
    flex-direction: column;
    gap: 0.5rem;
  }
  .no-location-found-text {
    justify-content: center;
  }
  .location-and-time-container {
    width: 100%;
    border-radius: 0;
    margin: auto;
    padding: 1rem;
  }
  .search-location-container,
  .no-location-found-text {
    width: 17rem;
  }
}

@media (max-width: 450px) {
  .title {
    font-size: 2rem;
    width: 20rem;
  }
  .full-data-container {
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb;oCACkC;AACpC;;AAEA;EACE;oCACkC;AACpC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,oBAAoB;EACpB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;oCACkC;EAClC,gBAAgB;EAChB,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,OAAO;EACP,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,cAAc;EACd,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,qBAAqB;AACvB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,eAAe;EACf,cAAc;EACd,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,4BAA4B;EAC5B,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE;;IAEE,YAAY;EACd;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,kBAAkB;IAClB,gBAAgB;EAClB;EACA;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;;IAEE,YAAY;EACd;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,WAAW;EACb;EACA;IACE,qCAAqC;IACrC,WAAW;IACX,gBAAgB;IAChB,YAAY;EACd;EACA;;IAEE,WAAW;IACX,gBAAgB;IAChB,YAAY;EACd;EACA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,MAAM;EACR;EACA;IACE,gBAAgB;EAClB;EACA;IACE,kBAAkB;IAClB,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,sBAAsB;IACtB,WAAW;EACb;EACA;IACE,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,aAAa;EACf;EACA;;IAEE,YAAY;EACd;AACF;;AAEA;EACE;IACE,eAAe;IACf,YAAY;EACd;EACA;IACE,qCAAqC;IACrC,YAAY;EACd;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n\r\nbutton {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  background-color: #00000080;\r\n  color: #ffffff;\r\n  width: 25rem;\r\n  margin: auto;\r\n  border-radius: 10px;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.no-location-found-text {\r\n  display: none;\r\n  align-items: center;\r\n  background-color: #ff0000;\r\n  color: #ffffff;\r\n  padding: 0.5rem 1rem;\r\n  margin-right: 0.5rem;\r\n  border-radius: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.search-input-container {\r\n  display: flex;\r\n}\r\n\r\n.search-input {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  padding: 0.75rem;\r\n  border: none;\r\n  border-radius: 5px 0 0 5px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.search-input:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.search-button {\r\n  padding: 0.75rem;\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  background-color: #007cb6;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.search-button:hover {\r\n  background-color: #006c9e;\r\n}\r\n\r\n.search-location-container {\r\n  display: flex;\r\n}\r\n\r\n.retrieved-location {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.retrieved-current-time {\r\n  white-space: pre-line;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.retrieved-data-margin {\r\n  margin-left: 0.5rem;\r\n  font-weight: 100;\r\n}\r\n\r\n.retrieved-temperature-container {\r\n  font-weight: 100;\r\n}\r\n\r\n.location-and-time-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 0.5rem;\r\n  background-color: #ffffff8a;\r\n  padding: 2rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.full-data-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  justify-items: center;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n}\r\n\r\n.forecast-container-title {\r\n  position: absolute;\r\n  margin: auto;\r\n  right: 0;\r\n  left: 0;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\n.hourly-forecast-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  overflow: auto;\r\n  width: 50rem;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem 1rem 0 1rem;\r\n}\r\n\r\n.daily-forecast-container {\r\n  gap: 1.5rem;\r\n  overflow: auto;\r\n  width: 50rem;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.hourly-forecast-elements-container,\r\n.daily-forecast-elements-container {\r\n  display: flex;\r\n}\r\n\r\n.daily-forecast-elements-container {\r\n  justify-content: center;\r\n  gap: 3rem;\r\n}\r\n\r\n.hourly-forecast-element,\r\n.daily-forecast-element {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 10rem;\r\n  font-size: 1.2rem;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.daily-forecast-element strong {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.temperature-data {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.data-container {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.data-container-retrieved-data {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.retrieved-temperature-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.data-icons {\r\n  width: 2.5rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.weather-icons {\r\n  width: 3.5rem;\r\n}\r\n\r\n.switch-temp-metrics-button {\r\n  position: fixed;\r\n  background-color: #000000;\r\n  padding: 0.5rem;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  transition: 0.3s ease-in-out;\r\n  height: 2.5rem;\r\n}\r\n\r\n.retrieved-uv-index {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.uv-index-green {\r\n  background-color: #008000;\r\n  color: white;\r\n}\r\n\r\n.uv-index-yellow {\r\n  background-color: #ffff00;\r\n  color: black;\r\n}\r\n\r\n.uv-index-orange {\r\n  background-color: #ffa500;\r\n  color: black;\r\n}\r\n\r\n.uv-index-red {\r\n  background-color: #ff0000;\r\n  color: white;\r\n}\r\n\r\n.uv-index-purple {\r\n  background-color: #800080;\r\n  color: white;\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  .hourly-forecast-container,\r\n  .daily-forecast-container {\r\n    width: 40rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n  header {\r\n    flex-direction: column;\r\n  }\r\n  .switch-temp-metrics-button {\r\n    position: relative;\r\n    margin-top: 1rem;\r\n  }\r\n  .full-data-container {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .hourly-forecast-container,\r\n  .daily-forecast-container {\r\n    width: 30rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .full-data-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 520px) {\r\n  header {\r\n    width: 100%;\r\n  }\r\n  .full-data-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    width: 100%;\r\n    border-radius: 0;\r\n    margin: auto;\r\n  }\r\n  .hourly-forecast-container,\r\n  .daily-forecast-container {\r\n    width: 100%;\r\n    border-radius: 0;\r\n    margin: auto;\r\n  }\r\n  .daily-forecast-elements-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0;\r\n  }\r\n  .daily-forecast-element {\r\n    margin-top: 1rem;\r\n  }\r\n  .daily-forecast-container .forecast-container-title {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .daily-forecast-container {\r\n    margin-bottom: 1rem;\r\n  }\r\n  .search-location-container {\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n  }\r\n  .no-location-found-text {\r\n    justify-content: center;\r\n  }\r\n  .location-and-time-container {\r\n    width: 100%;\r\n    border-radius: 0;\r\n    margin: auto;\r\n    padding: 1rem;\r\n  }\r\n  .search-location-container,\r\n  .no-location-found-text {\r\n    width: 17rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .title {\r\n    font-size: 2rem;\r\n    width: 20rem;\r\n  }\r\n  .full-data-container {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    margin: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retrieveData: () => (/* binding */ retrieveData),
/* harmony export */   translateText: () => (/* binding */ translateText),
/* harmony export */   weatherData: () => (/* binding */ weatherData)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.js");


const noLocationFoundText = document.querySelector(".no-location-found-text");
const weatherIcon = document.querySelector(".weather-icons");

let weatherData = {};

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
      const data = await response.json();
      const currentLocalTime = new Date(data.location.localtime);
      const currentFormattedDate = (0,_interface__WEBPACK_IMPORTED_MODULE_0__.formatDate)(currentLocalTime);
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

      (0,_interface__WEBPACK_IMPORTED_MODULE_0__.updateDataDisplay)();

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


/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleEventListeners: () => (/* binding */ handleEventListeners)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.js");



const noLocationFoundText = document.querySelector(".no-location-found-text");
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const switchTempMetricsButton = document.querySelector(
  ".switch-temp-metrics-button"
);

function handleEventListeners() {
  searchButton.addEventListener("click", async () => {
    const location = searchInput.value.trim();
    if (location) {
      try {
        const translatedLocation = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.translateText)(location);
        await (0,_api__WEBPACK_IMPORTED_MODULE_0__.retrieveData)(translatedLocation);
      } catch (error) {
        alert("Failed to translate the location!");
      }
    }
  });

  searchInput.addEventListener("input", () => {
    noLocationFoundText.style.display = "none";
  });

  switchTempMetricsButton.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_1__.toggleTempMetrics);
}


/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   toggleTempMetrics: () => (/* binding */ toggleTempMetrics),
/* harmony export */   updateDataDisplay: () => (/* binding */ updateDataDisplay)
/* harmony export */ });
/* harmony import */ var _images_tab_icon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tab-icon.jpg */ "./src/images/tab-icon.jpg");
/* harmony import */ var _images_background_day_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/background-day-image.jpg */ "./src/images/background-day-image.jpg");
/* harmony import */ var _images_background_night_image_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/background-night-image.jpg */ "./src/images/background-night-image.jpg");
/* harmony import */ var _images_temperature_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/temperature-icon.png */ "./src/images/temperature-icon.png");
/* harmony import */ var _images_temperature_feels_like_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/temperature-feels-like-icon.png */ "./src/images/temperature-feels-like-icon.png");
/* harmony import */ var _images_humidity_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/humidity-icon.png */ "./src/images/humidity-icon.png");
/* harmony import */ var _images_wind_direction_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/wind-direction-icon.png */ "./src/images/wind-direction-icon.png");
/* harmony import */ var _images_wind_speed_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/wind-speed-icon.png */ "./src/images/wind-speed-icon.png");
/* harmony import */ var _images_gust_speed_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/gust-speed-icon.png */ "./src/images/gust-speed-icon.png");
/* harmony import */ var _images_chance_of_rain_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/chance-of-rain-icon.png */ "./src/images/chance-of-rain-icon.png");
/* harmony import */ var _images_cloudiness_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/cloudiness-icon.png */ "./src/images/cloudiness-icon.png");
/* harmony import */ var _images_sunrise_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/sunrise-icon.png */ "./src/images/sunrise-icon.png");
/* harmony import */ var _images_sunset_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/sunset-icon.png */ "./src/images/sunset-icon.png");
/* harmony import */ var _images_visibility_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/visibility-icon.png */ "./src/images/visibility-icon.png");
/* harmony import */ var _images_uv_index_icon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/uv-index-icon.png */ "./src/images/uv-index-icon.png");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api */ "./src/api.js");

















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

function displayImages() {
  const head = document.querySelector("head");
  const tabIcon = document.createElement("link");
  tabIcon.rel = "icon";
  tabIcon.href = _images_tab_icon_jpg__WEBPACK_IMPORTED_MODULE_0__;
  head.appendChild(tabIcon);

  body.style.background = `url(${_images_background_day_image_jpg__WEBPACK_IMPORTED_MODULE_1__})`;

  const temperatureIcon = document.querySelector(
    ".data-container:nth-child(1) .data-icons"
  );
  temperatureIcon.src = _images_temperature_icon_png__WEBPACK_IMPORTED_MODULE_3__;
  const temperatureFeelsLikeIcon = document.querySelector(
    ".data-container:nth-child(2) .data-icons"
  );
  temperatureFeelsLikeIcon.src = _images_temperature_feels_like_icon_png__WEBPACK_IMPORTED_MODULE_4__;

  const humidityIcon = document.querySelector(
    ".data-container:nth-child(3) .data-icons"
  );
  humidityIcon.src = _images_humidity_icon_png__WEBPACK_IMPORTED_MODULE_5__;

  const windDirectionIcon = document.querySelector(
    ".data-container:nth-child(4) .data-icons"
  );
  windDirectionIcon.src = _images_wind_direction_icon_png__WEBPACK_IMPORTED_MODULE_6__;

  const windSpeedIcon = document.querySelector(
    ".data-container:nth-child(5) .data-icons"
  );
  windSpeedIcon.src = _images_wind_speed_icon_png__WEBPACK_IMPORTED_MODULE_7__;

  const gustSpeedIcon = document.querySelector(
    ".data-container:nth-child(6) .data-icons"
  );
  gustSpeedIcon.src = _images_gust_speed_icon_png__WEBPACK_IMPORTED_MODULE_8__;

  const chanceOfRainIcon = document.querySelector(
    ".data-container:nth-child(7) .data-icons"
  );
  chanceOfRainIcon.src = _images_chance_of_rain_icon_png__WEBPACK_IMPORTED_MODULE_9__;

  const cloudinessIcon = document.querySelector(
    ".data-container:nth-child(8) .data-icons"
  );
  cloudinessIcon.src = _images_cloudiness_icon_png__WEBPACK_IMPORTED_MODULE_10__;

  const sunriseIcon = document.querySelector(
    ".data-container:nth-child(9) .data-icons"
  );
  sunriseIcon.src = _images_sunrise_icon_png__WEBPACK_IMPORTED_MODULE_11__;

  const sunsetIcon = document.querySelector(
    ".data-container:nth-child(10) .data-icons"
  );
  sunsetIcon.src = _images_sunset_icon_png__WEBPACK_IMPORTED_MODULE_12__;

  const visibilityIcon = document.querySelector(
    ".data-container:nth-child(11) .data-icons"
  );
  visibilityIcon.src = _images_visibility_icon_png__WEBPACK_IMPORTED_MODULE_13__;

  const uvIndexIcon = document.querySelector(
    ".data-container:nth-child(12) .data-icons"
  );
  uvIndexIcon.src = _images_uv_index_icon_png__WEBPACK_IMPORTED_MODULE_14__;
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

function updateDataDisplay() {
  displayImages();

  retrievedLocation.textContent = `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentCity}, ${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentCountry}`;

  retrievedCurrentTime.textContent = _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentFormattedDate;
  retrievedTemperature.textContent = isCelsius
    ? `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentTemperatureC} °C`
    : `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentTemperatureF} °F`;

  retrievedTemperatureFeelsLike.textContent = isCelsius
    ? `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentTemperatureFeelsLikeC} °C`
    : `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentTemperatureFeelsLikeF} °F`;

  retrievedHumidity.textContent = `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentHumidity}%`;

  retrievedVisibility.textContent = isCelsius
    ? `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentVisibilityKm} km`
    : `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentVisibilityMph} mi`;

  retrievedWindSpeed.textContent = isCelsius
    ? `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentWindSpeedKm} km/h`
    : `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentWindSpeedMph} mph`;

  retrievedGustSpeed.textContent = isCelsius
    ? `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentGustSpeedKm} km/h`
    : `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentGustSpeedMph} mph`;

  retrievedCloudiness.textContent = `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentCloudiness}%`;
  retrievedWindDirection.textContent = _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentWindDirection;
  retrievedSunrise.textContent = _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentSunrise;
  retrievedSunset.textContent = _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentSunset;
  retrievedChanceOfRain.textContent = `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentChanceOfRain}%`;

  updateUvIndex(_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentUv);
  displayHourlyForecast(_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentDay, _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentTimeZone);
  displayDailyForecast(
    _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentDailyMinTemperatureC,
    _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentDailyMaxTemperatureC,
    _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentDailyMinTemperatureF,
    _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentDailyMaxTemperatureF,
    _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentDailyForecastDates,
    _api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentDailyForecastIcons
  );

  if (retrievedHourlyTemperature) {
    retrievedHourlyTemperature.textContent = isCelsius
      ? `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentHourlyTemperatureC} °C`
      : `${_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.currentHourlyTemperatureF} °F`;
  }

  if (_api__WEBPACK_IMPORTED_MODULE_15__.weatherData.isDay === 1) {
    body.style.background = `url(${_images_background_day_image_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
  } else {
    body.style.background = `url(${_images_background_night_image_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
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


/***/ }),

/***/ "./src/images/background-day-image.jpg":
/*!*********************************************!*\
  !*** ./src/images/background-day-image.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-day-image.d8c3676206f3b17e130d.jpg";

/***/ }),

/***/ "./src/images/background-night-image.jpg":
/*!***********************************************!*\
  !*** ./src/images/background-night-image.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-night-image.f92f9d438f8e5630a1b9.jpg";

/***/ }),

/***/ "./src/images/chance-of-rain-icon.png":
/*!********************************************!*\
  !*** ./src/images/chance-of-rain-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/chance-of-rain-icon.fea62e3beeb0049f5768.png";

/***/ }),

/***/ "./src/images/cloudiness-icon.png":
/*!****************************************!*\
  !*** ./src/images/cloudiness-icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cloudiness-icon.7ff9696cd50a5b082d4f.png";

/***/ }),

/***/ "./src/images/gust-speed-icon.png":
/*!****************************************!*\
  !*** ./src/images/gust-speed-icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gust-speed-icon.639516cceb13a7a9b5c9.png";

/***/ }),

/***/ "./src/images/humidity-icon.png":
/*!**************************************!*\
  !*** ./src/images/humidity-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/humidity-icon.22c2acf00ba11e4933ef.png";

/***/ }),

/***/ "./src/images/sunrise-icon.png":
/*!*************************************!*\
  !*** ./src/images/sunrise-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sunrise-icon.3f0a51f8a250b60c0cc8.png";

/***/ }),

/***/ "./src/images/sunset-icon.png":
/*!************************************!*\
  !*** ./src/images/sunset-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sunset-icon.232d85431c76f641184b.png";

/***/ }),

/***/ "./src/images/tab-icon.jpg":
/*!*********************************!*\
  !*** ./src/images/tab-icon.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/tab-icon.3504aae104babbed5323.jpg";

/***/ }),

/***/ "./src/images/temperature-feels-like-icon.png":
/*!****************************************************!*\
  !*** ./src/images/temperature-feels-like-icon.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/temperature-feels-like-icon.09d9bb3727053397f743.png";

/***/ }),

/***/ "./src/images/temperature-icon.png":
/*!*****************************************!*\
  !*** ./src/images/temperature-icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/temperature-icon.b66904850476d9d0a4ca.png";

/***/ }),

/***/ "./src/images/uv-index-icon.png":
/*!**************************************!*\
  !*** ./src/images/uv-index-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/uv-index-icon.6ce02cab11d84f765375.png";

/***/ }),

/***/ "./src/images/visibility-icon.png":
/*!****************************************!*\
  !*** ./src/images/visibility-icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/visibility-icon.5197babd3ce944111dd0.png";

/***/ }),

/***/ "./src/images/wind-direction-icon.png":
/*!********************************************!*\
  !*** ./src/images/wind-direction-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/wind-direction-icon.43caba29e2c35e6b1826.png";

/***/ }),

/***/ "./src/images/wind-speed-icon.png":
/*!****************************************!*\
  !*** ./src/images/wind-speed-icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/wind-speed-icon.9d10fc839fa6633406a4.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");




(0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.handleEventListeners)();

document.addEventListener("DOMContentLoaded", () => {
  (0,_api__WEBPACK_IMPORTED_MODULE_1__.retrieveData)("Ruse");
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZTZiNmY1YmY3ZTgxZWRlZjI2Ny5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyw0QkFBNEIsZ0JBQWdCLEtBQUssY0FBYyxvQkFBb0IsMkhBQTJILEtBQUssZ0JBQWdCLDJIQUEySCxLQUFLLFlBQVkseUJBQXlCLEtBQUssZ0JBQWdC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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ21CO0FBQ3hEO0FBQ0EscUVBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxFQUFFLGtEQUFZO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAuM3JlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm5vLWxvY2F0aW9uLWZvdW5kLXRleHQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxyXG4gICAgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2I2O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YzllO1xyXG59XHJcblxyXG4uc2VhcmNoLWxvY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJldHJpZXZlZC1sb2NhdGlvbiB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucmV0cmlldmVkLWN1cnJlbnQtdGltZSB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ucmV0cmlldmVkLWRhdGEtbWFyZ2luIHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4ubG9jYXRpb24tYW5kLXRpbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5mdWxsLWRhdGEtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1jb250YWluZXItdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEuNXJlbTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogNTByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjhhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2lkdGg6IDUwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lcixcclxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAzcmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWZvcmVjYXN0LWVsZW1lbnQsXHJcbi5kYWlseS1mb3JlY2FzdC1lbGVtZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTByZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnQgc3Ryb25nIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi50ZW1wZXJhdHVyZS1kYXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRhLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kYXRhLWNvbnRhaW5lci1yZXRyaWV2ZWQtZGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRhLWljb25zIHtcclxuICB3aWR0aDogMi41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4ud2VhdGhlci1pY29ucyB7XHJcbiAgd2lkdGg6IDMuNXJlbTtcclxufVxyXG5cclxuLnN3aXRjaC10ZW1wLW1ldHJpY3MtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbn1cclxuXHJcbi5yZXRyaWV2ZWQtdXYtaW5kZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4udXYtaW5kZXgtZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXYtaW5kZXgteWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnV2LWluZGV4LW9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51di1pbmRleC1yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXYtaW5kZXgtcHVycGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDgwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIsXHJcbiAgLmRhaWx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLnN3aXRjaC10ZW1wLW1ldHJpY3MtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG4gIC5mdWxsLWRhdGEtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcclxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcixcclxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5mdWxsLWRhdGEtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5mdWxsLWRhdGEtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyLFxyXG4gIC5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuZGFpbHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwO1xyXG4gIH1cclxuICAuZGFpbHktZm9yZWNhc3QtZWxlbWVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIC5mb3JlY2FzdC1jb250YWluZXItdGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgLmRhaWx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAuc2VhcmNoLWxvY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG4gIC5uby1sb2NhdGlvbi1mb3VuZC10ZXh0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAubG9jYXRpb24tYW5kLXRpbWUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIC5zZWFyY2gtbG9jYXRpb24tY29udGFpbmVyLFxyXG4gIC5uby1sb2NhdGlvbi1mb3VuZC10ZXh0IHtcclxuICAgIHdpZHRoOiAxN3JlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgfVxyXG4gIC5mdWxsLWRhdGEtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYjtvQ0FDa0M7QUFDcEM7O0FBRUE7RUFDRTtvQ0FDa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7b0NBQ2tDO0VBQ2xDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFOztJQUVFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHFDQUFxQztFQUN2QztBQUNGOztBQUVBO0VBQ0U7O0lBRUUsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBOztJQUVFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLE1BQU07RUFDUjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7O0lBRUUsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHFDQUFxQztJQUNyQyxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXHJcXG4gICAgXFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB3aWR0aDogMjVyZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uby1sb2NhdGlvbi1mb3VuZC10ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2I2O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmM5ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldHJpZXZlZC1sb2NhdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldHJpZXZlZC1jdXJyZW50LXRpbWUge1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtZGF0YS1tYXJnaW4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbi1hbmQtdGltZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1kYXRhLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY29udGFpbmVyLXRpdGxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB3aWR0aDogNTByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOGE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXIsXFxyXFxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWZvcmVjYXN0LWVsZW1lbnQsXFxyXFxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudCBzdHJvbmcge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmUtZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGEtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLWNvbnRhaW5lci1yZXRyaWV2ZWQtZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLWljb25zIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaWNvbnMge1xcclxcbiAgd2lkdGg6IDMuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC10ZW1wLW1ldHJpY3MtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0cmlldmVkLXV2LWluZGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnV2LWluZGV4LWdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi51di1pbmRleC15ZWxsb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnV2LWluZGV4LW9yYW5nZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udXYtaW5kZXgtcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi51di1pbmRleC1wdXJwbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDA4MDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxyXFxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcixcXHJcXG4gIC5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIC5zd2l0Y2gtdGVtcC1tZXRyaWNzLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5mdWxsLWRhdGEtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XFxyXFxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcixcXHJcXG4gIC5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmZ1bGwtZGF0YS1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmZ1bGwtZGF0YS1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgfVxcclxcbiAgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIsXFxyXFxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG4gIC5kYWlseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICB9XFxyXFxuICAuZGFpbHktZm9yZWNhc3QtZWxlbWVudCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIC5mb3JlY2FzdC1jb250YWluZXItdGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5zZWFyY2gtbG9jYXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICAubm8tbG9jYXRpb24tZm91bmQtdGV4dCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLmxvY2F0aW9uLWFuZC10aW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICB9XFxyXFxuICAuc2VhcmNoLWxvY2F0aW9uLWNvbnRhaW5lcixcXHJcXG4gIC5uby1sb2NhdGlvbi1mb3VuZC10ZXh0IHtcXHJcXG4gICAgd2lkdGg6IDE3cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgfVxcclxcbiAgLmZ1bGwtZGF0YS1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSwgdXBkYXRlRGF0YURpc3BsYXkgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IG5vTG9jYXRpb25Gb3VuZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vLWxvY2F0aW9uLWZvdW5kLXRleHRcIik7XHJcbmNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWljb25zXCIpO1xyXG5cclxuZXhwb3J0IGxldCB3ZWF0aGVyRGF0YSA9IHt9O1xyXG5cclxuY29uc3Qgd2luZERpcmVjdGlvbk1hcHBpbmcgPSB7XHJcbiAgTjogXCJOb3J0aFwiLFxyXG4gIE5ORTogXCJOb3J0aC1Ob3J0aGVhc3RcIixcclxuICBORTogXCJOb3J0aGVhc3RcIixcclxuICBFTkU6IFwiRWFzdC1Ob3J0aGVhc3RcIixcclxuICBFOiBcIkVhc3RcIixcclxuICBFU0U6IFwiRWFzdC1Tb3V0aGVhc3RcIixcclxuICBTRTogXCJTb3V0aGVhc3RcIixcclxuICBTU0U6IFwiU291dGgtU291dGhlYXN0XCIsXHJcbiAgUzogXCJTb3V0aFwiLFxyXG4gIFNTVzogXCJTb3V0aC1Tb3V0aHdlc3RcIixcclxuICBTVzogXCJTb3V0aHdlc3RcIixcclxuICBXU1c6IFwiV2VzdC1Tb3V0aHdlc3RcIixcclxuICBXOiBcIldlc3RcIixcclxuICBXTlc6IFwiV2VzdC1Ob3J0aHdlc3RcIixcclxuICBOVzogXCJOb3J0aHdlc3RcIixcclxuICBOTlc6IFwiTm9ydGgtTm9ydGh3ZXN0XCIsXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVEYXRhKGxvY2F0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWE1OTkxNWQ3ZmMyNjRlZDQ4MGYxOTU5MTAyNDIzMDYmcT0ke2xvY2F0aW9ufSZ0aW1lc3RhbXA9JHt0aW1lc3RhbXB9JmRheXM9M2AsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc3QgY3VycmVudExvY2FsVGltZSA9IG5ldyBEYXRlKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKTtcclxuICAgICAgY29uc3QgY3VycmVudEZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGN1cnJlbnRMb2NhbFRpbWUpO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGltZVpvbmUgPSBkYXRhLmxvY2F0aW9uLnR6X2lkO1xyXG4gICAgICBjb25zdCBjdXJyZW50Q2l0eSA9IGRhdGEubG9jYXRpb24ubmFtZTtcclxuICAgICAgY29uc3QgY3VycmVudENvdW50cnkgPSBkYXRhLmxvY2F0aW9uLmNvdW50cnk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZUMgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVGID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcclxuICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlRmVlbHNMaWtlQyA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcclxuICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlRmVlbHNMaWtlRiA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcclxuICAgICAgY29uc3QgY3VycmVudFZpc2liaWxpdHlLbSA9IGRhdGEuY3VycmVudC52aXNfa207XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRWaXNpYmlsaXR5TXBoID0gZGF0YS5jdXJyZW50LnZpc19taWxlcztcclxuICAgICAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xyXG4gICAgICBjb25zdCBjdXJyZW50V2luZFNwZWVkS20gPSBkYXRhLmN1cnJlbnQud2luZF9rcGg7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRXaW5kU3BlZWRNcGggPSBkYXRhLmN1cnJlbnQud2luZF9tcGg7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRHdXN0U3BlZWRLbSA9IGRhdGEuY3VycmVudC5ndXN0X2twaDtcclxuICAgICAgY29uc3QgY3VycmVudEd1c3RTcGVlZE1waCA9IGRhdGEuY3VycmVudC5ndXN0X21waDtcclxuICAgICAgY29uc3QgY3VycmVudENsb3VkaW5lc3MgPSBkYXRhLmN1cnJlbnQuY2xvdWQ7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRXaW5kRGlyZWN0aW9uID0gd2luZERpcmVjdGlvbk1hcHBpbmdbZGF0YS5jdXJyZW50LndpbmRfZGlyXTtcclxuICAgICAgY29uc3QgY3VycmVudFN1bnJpc2UgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2U7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTdW5zZXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcclxuICAgICAgY29uc3QgY3VycmVudENoYW5jZU9mUmFpbiA9XHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VybHlUZW1wZXJhdHVyZUMgPVxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91ci50ZW1wX2M7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VybHlUZW1wZXJhdHVyZUYgPVxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91ci50ZW1wX2Y7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRVdiA9IGRhdGEuY3VycmVudC51djtcclxuICAgICAgY29uc3QgaXNEYXkgPSBkYXRhLmN1cnJlbnQuaXNfZGF5O1xyXG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cHM6JHtkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb259YDtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlQyA9IFtcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2MsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDID0gW1xyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYyxcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICBdO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUYgPSBbXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZixcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlRiA9IFtcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgY3VycmVudERhaWx5Rm9yZWNhc3RJY29ucyA9IFtcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgXTtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYWlseUZvcmVjYXN0RGF0ZXMgPSBbXHJcbiAgICAgICAgbmV3IERhdGUoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgICAgICBcImVuLVVTXCIsXHJcbiAgICAgICAgICB7IHdlZWtkYXk6IFwibG9uZ1wiIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBEYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICAgICAgeyB3ZWVrZGF5OiBcImxvbmdcIiB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRGF0ZShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgICAgIFwiZW4tVVNcIixcclxuICAgICAgICAgIHsgd2Vla2RheTogXCJsb25nXCIgfVxyXG4gICAgICAgICksXHJcbiAgICAgIF07XHJcblxyXG4gICAgICB3ZWF0aGVyRGF0YSA9IHtcclxuICAgICAgICBjdXJyZW50Rm9ybWF0dGVkRGF0ZSxcclxuICAgICAgICBjdXJyZW50Q2l0eSxcclxuICAgICAgICBjdXJyZW50Q291bnRyeSxcclxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmVDLFxyXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZUYsXHJcbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlRmVlbHNMaWtlQyxcclxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmVGZWVsc0xpa2VGLFxyXG4gICAgICAgIGN1cnJlbnRWaXNpYmlsaXR5S20sXHJcbiAgICAgICAgY3VycmVudFZpc2liaWxpdHlNcGgsXHJcbiAgICAgICAgY3VycmVudEh1bWlkaXR5LFxyXG4gICAgICAgIGN1cnJlbnRXaW5kU3BlZWRLbSxcclxuICAgICAgICBjdXJyZW50V2luZFNwZWVkTXBoLFxyXG4gICAgICAgIGN1cnJlbnRHdXN0U3BlZWRLbSxcclxuICAgICAgICBjdXJyZW50R3VzdFNwZWVkTXBoLFxyXG4gICAgICAgIGN1cnJlbnRDbG91ZGluZXNzLFxyXG4gICAgICAgIGN1cnJlbnRXaW5kRGlyZWN0aW9uLFxyXG4gICAgICAgIGN1cnJlbnRTdW5yaXNlLFxyXG4gICAgICAgIGN1cnJlbnRTdW5zZXQsXHJcbiAgICAgICAgY3VycmVudENoYW5jZU9mUmFpbixcclxuICAgICAgICBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUMsXHJcbiAgICAgICAgY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDLFxyXG4gICAgICAgIGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlRixcclxuICAgICAgICBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUYsXHJcbiAgICAgICAgY3VycmVudERhaWx5Rm9yZWNhc3REYXRlcyxcclxuICAgICAgICBjdXJyZW50RGFpbHlGb3JlY2FzdEljb25zLFxyXG4gICAgICAgIGN1cnJlbnREYXksXHJcbiAgICAgICAgY3VycmVudFRpbWVab25lLFxyXG4gICAgICAgIGN1cnJlbnRIb3VybHlUZW1wZXJhdHVyZUMsXHJcbiAgICAgICAgY3VycmVudEhvdXJseVRlbXBlcmF0dXJlRixcclxuICAgICAgICBjdXJyZW50VXYsXHJcbiAgICAgICAgaXNEYXksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB1cGRhdGVEYXRhRGlzcGxheSgpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub0xvY2F0aW9uRm91bmRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEhXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHQodGV4dCkge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5teW1lbW9yeS50cmFuc2xhdGVkLm5ldC9nZXQ/cT0ke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgIHRleHRcclxuICApfSZsYW5ncGFpcj1iZ3xlbmA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKHJlc3VsdC5yZXNwb25zZURhdGEgJiYgcmVzdWx0LnJlc3BvbnNlRGF0YS50cmFuc2xhdGVkVGV4dCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlc3BvbnNlRGF0YS50cmFuc2xhdGVkVGV4dDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRyYW5zbGF0ZWQgdGV4dCBmb3VuZCBpbiByZXNwb25zZSFcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0cmFuc2xhdGluZyB0ZXh0OlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsZWQhXCIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZXRyaWV2ZURhdGEsIHRyYW5zbGF0ZVRleHQgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgdG9nZ2xlVGVtcE1ldHJpY3MgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IG5vTG9jYXRpb25Gb3VuZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vLWxvY2F0aW9uLWZvdW5kLXRleHRcIik7XHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJ1dHRvblwiKTtcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dFwiKTtcclxuY29uc3Qgc3dpdGNoVGVtcE1ldHJpY3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnN3aXRjaC10ZW1wLW1ldHJpY3MtYnV0dG9uXCJcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFdmVudExpc3RlbmVycygpIHtcclxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZExvY2F0aW9uID0gYXdhaXQgdHJhbnNsYXRlVGV4dChsb2NhdGlvbik7XHJcbiAgICAgICAgYXdhaXQgcmV0cmlldmVEYXRhKHRyYW5zbGF0ZWRMb2NhdGlvbik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRoZSBsb2NhdGlvbiFcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIG5vTG9jYXRpb25Gb3VuZFRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pO1xyXG5cclxuICBzd2l0Y2hUZW1wTWV0cmljc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVGVtcE1ldHJpY3MpO1xyXG59XHJcbiIsImltcG9ydCBJY29uIGZyb20gXCIuL2ltYWdlcy90YWItaWNvbi5qcGdcIjtcclxuaW1wb3J0IEJhY2tncm91bmREYXlJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYmFja2dyb3VuZC1kYXktaW1hZ2UuanBnXCI7XHJcbmltcG9ydCBCYWNrZ3JvdW5kTmlnaHRJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYmFja2dyb3VuZC1uaWdodC1pbWFnZS5qcGdcIjtcclxuaW1wb3J0IFRlbXBlcmF0dXJlSWNvbiBmcm9tIFwiLi9pbWFnZXMvdGVtcGVyYXR1cmUtaWNvbi5wbmdcIjtcclxuaW1wb3J0IFRlbXBlcmF0dXJlRmVlbHNMaWtlSWNvbiBmcm9tIFwiLi9pbWFnZXMvdGVtcGVyYXR1cmUtZmVlbHMtbGlrZS1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgSHVtaWRpdHlJY29uIGZyb20gXCIuL2ltYWdlcy9odW1pZGl0eS1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgV2luZERpcmVjdGlvbkljb24gZnJvbSBcIi4vaW1hZ2VzL3dpbmQtZGlyZWN0aW9uLWljb24ucG5nXCI7XHJcbmltcG9ydCBXaW5kU3BlZWRJY29uIGZyb20gXCIuL2ltYWdlcy93aW5kLXNwZWVkLWljb24ucG5nXCI7XHJcbmltcG9ydCBHdXN0U3BlZWRJY29uIGZyb20gXCIuL2ltYWdlcy9ndXN0LXNwZWVkLWljb24ucG5nXCI7XHJcbmltcG9ydCBDaGFuY2VPZlJhaW5JY29uIGZyb20gXCIuL2ltYWdlcy9jaGFuY2Utb2YtcmFpbi1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgQ2xvdWRpbmVzc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2Nsb3VkaW5lc3MtaWNvbi5wbmdcIjtcclxuaW1wb3J0IFN1bnJpc2VJY29uIGZyb20gXCIuL2ltYWdlcy9zdW5yaXNlLWljb24ucG5nXCI7XHJcbmltcG9ydCBTdW5zZXRJY29uIGZyb20gXCIuL2ltYWdlcy9zdW5zZXQtaWNvbi5wbmdcIjtcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gXCIuL2ltYWdlcy92aXNpYmlsaXR5LWljb24ucG5nXCI7XHJcbmltcG9ydCBVdkluZGV4SWNvbiBmcm9tIFwiLi9pbWFnZXMvdXYtaW5kZXgtaWNvbi5wbmdcIjtcclxuaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgcmV0cmlldmVkTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC1sb2NhdGlvblwiKTtcclxuY29uc3QgcmV0cmlldmVkQ3VycmVudFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC1jdXJyZW50LXRpbWVcIik7XHJcbmNvbnN0IHJldHJpZXZlZFRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmVcIik7XHJcbmNvbnN0IHJldHJpZXZlZFRlbXBlcmF0dXJlRmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtZmVlbHMtbGlrZVwiXHJcbik7XHJcbmNvbnN0IHJldHJpZXZlZEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtaHVtaWRpdHlcIik7XHJcbmNvbnN0IHJldHJpZXZlZFZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC12aXNpYmlsaXR5XCIpO1xyXG5jb25zdCByZXRyaWV2ZWRXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC13aW5kLXNwZWVkXCIpO1xyXG5jb25zdCByZXRyaWV2ZWRHdXN0U3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC1ndXN0LXNwZWVkXCIpO1xyXG5jb25zdCByZXRyaWV2ZWRDbG91ZGluZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtY2xvdWRpbmVzc1wiKTtcclxuY29uc3QgcmV0cmlldmVkV2luZERpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucmV0cmlldmVkLXdpbmQtZGlyZWN0aW9uXCJcclxuKTtcclxuY29uc3QgcmV0cmlldmVkVXZJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLXV2LWluZGV4XCIpO1xyXG5jb25zdCByZXRyaWV2ZWRTdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtc3VucmlzZVwiKTtcclxuY29uc3QgcmV0cmlldmVkU3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtc3Vuc2V0XCIpO1xyXG5jb25zdCByZXRyaWV2ZWRDaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnJldHJpZXZlZC1jaGFuY2Utb2YtcmFpblwiXHJcbik7XHJcbmNvbnN0IHN3aXRjaFRlbXBNZXRyaWNzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5zd2l0Y2gtdGVtcC1tZXRyaWNzLWJ1dHRvblwiXHJcbik7XHJcbmNvbnN0IGhvdXJseUZvcmVjYXN0RWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmhvdXJseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXJcIlxyXG4pO1xyXG5jb25zdCByZXRyaWV2ZWRIb3VybHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucmV0cmlldmVkLWhvdXJseS10ZW1wZXJhdHVyZVwiXHJcbik7XHJcbmNvbnN0IGRhaWx5Rm9yZWNhc3RFbGVtZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuZGFpbHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyXCJcclxuKTtcclxuXHJcbmxldCBpc0NlbHNpdXMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gIGNvbnN0IGRheSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcclxuICBjb25zdCBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgbW9udGg6IFwic2hvcnRcIiB9KTtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBjb25zdCBvcmRpbmFsU3VmZml4ID0gKGRheU9mTW9udGgpID0+IHtcclxuICAgIGlmIChkYXlPZk1vbnRoID4gMyAmJiBkYXlPZk1vbnRoIDwgMjEpIHJldHVybiBcInRoXCI7XHJcbiAgICBzd2l0Y2ggKGRheU9mTW9udGggJSAxMCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIFwic3RcIjtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiBcIm5kXCI7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gXCJyZFwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcInRoXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheX0sICR7ZGF5T2ZNb250aH0ke29yZGluYWxTdWZmaXgoXHJcbiAgICBkYXlPZk1vbnRoXHJcbiAgKX0gJHttb250aH0gJHt5ZWFyfWA7XHJcblxyXG4gIGNvbnN0IHRpbWVPcHRpb25zID0geyBob3VyOiBcIm51bWVyaWNcIiwgbWludXRlOiBcIm51bWVyaWNcIiwgaG91cjEyOiB0cnVlIH07XHJcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwgdGltZU9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4gYCR7Zm9ybWF0dGVkRGF0ZX1cXG4ke2Zvcm1hdHRlZFRpbWV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUltYWdlcygpIHtcclxuICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XHJcbiAgY29uc3QgdGFiSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gIHRhYkljb24ucmVsID0gXCJpY29uXCI7XHJcbiAgdGFiSWNvbi5ocmVmID0gSWNvbjtcclxuICBoZWFkLmFwcGVuZENoaWxkKHRhYkljb24pO1xyXG5cclxuICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7QmFja2dyb3VuZERheUltYWdlfSlgO1xyXG5cclxuICBjb25zdCB0ZW1wZXJhdHVyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDEpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIHRlbXBlcmF0dXJlSWNvbi5zcmMgPSBUZW1wZXJhdHVyZUljb247XHJcbiAgY29uc3QgdGVtcGVyYXR1cmVGZWVsc0xpa2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCgyKSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICB0ZW1wZXJhdHVyZUZlZWxzTGlrZUljb24uc3JjID0gVGVtcGVyYXR1cmVGZWVsc0xpa2VJY29uO1xyXG5cclxuICBjb25zdCBodW1pZGl0eUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDMpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIGh1bWlkaXR5SWNvbi5zcmMgPSBIdW1pZGl0eUljb247XHJcblxyXG4gIGNvbnN0IHdpbmREaXJlY3Rpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCg0KSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICB3aW5kRGlyZWN0aW9uSWNvbi5zcmMgPSBXaW5kRGlyZWN0aW9uSWNvbjtcclxuXHJcbiAgY29uc3Qgd2luZFNwZWVkSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoNSkgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgd2luZFNwZWVkSWNvbi5zcmMgPSBXaW5kU3BlZWRJY29uO1xyXG5cclxuICBjb25zdCBndXN0U3BlZWRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCg2KSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICBndXN0U3BlZWRJY29uLnNyYyA9IEd1c3RTcGVlZEljb247XHJcblxyXG4gIGNvbnN0IGNoYW5jZU9mUmFpbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDcpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIGNoYW5jZU9mUmFpbkljb24uc3JjID0gQ2hhbmNlT2ZSYWluSWNvbjtcclxuXHJcbiAgY29uc3QgY2xvdWRpbmVzc0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDgpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIGNsb3VkaW5lc3NJY29uLnNyYyA9IENsb3VkaW5lc3NJY29uO1xyXG5cclxuICBjb25zdCBzdW5yaXNlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoOSkgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgc3VucmlzZUljb24uc3JjID0gU3VucmlzZUljb247XHJcblxyXG4gIGNvbnN0IHN1bnNldEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDEwKSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICBzdW5zZXRJY29uLnNyYyA9IFN1bnNldEljb247XHJcblxyXG4gIGNvbnN0IHZpc2liaWxpdHlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCgxMSkgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgdmlzaWJpbGl0eUljb24uc3JjID0gVmlzaWJpbGl0eUljb247XHJcblxyXG4gIGNvbnN0IHV2SW5kZXhJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCgxMikgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgdXZJbmRleEljb24uc3JjID0gVXZJbmRleEljb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb3VybHlGb3JlY2FzdChob3VybHlEYXRhLCB0aW1lWm9uZSkge1xyXG4gIGhvdXJseUZvcmVjYXN0RWxlbWVudHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lWm9uZSB9KTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRUaW1lKTtcclxuICBjb25zdCBuZXh0MjRIb3VycyA9IFtdO1xyXG5cclxuICBsZXQgc3RhcnRIb3VySW5kZXggPSBob3VybHlEYXRhLmZpbmRJbmRleCgoaG91ckRhdGEpID0+IHtcclxuICAgIGNvbnN0IGhvdXJEYXRlID0gbmV3IERhdGUoaG91ckRhdGEudGltZSk7XHJcbiAgICBjb25zdCBob3VySW5UaW1lWm9uZSA9IG5ldyBEYXRlKFxyXG4gICAgICBob3VyRGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZVpvbmUgfSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gaG91ckluVGltZVpvbmUuZ2V0SG91cnMoKSA9PT0gY3VycmVudERhdGUuZ2V0SG91cnMoKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHN0YXJ0SG91ckluZGV4ID09PSAtMSkge1xyXG4gICAgc3RhcnRIb3VySW5kZXggPSBob3VybHlEYXRhLmZpbmRJbmRleCgoaG91ckRhdGEpID0+IHtcclxuICAgICAgY29uc3QgaG91ckRhdGUgPSBuZXcgRGF0ZShob3VyRGF0YS50aW1lKTtcclxuICAgICAgY29uc3QgaG91ckluVGltZVpvbmUgPSBuZXcgRGF0ZShcclxuICAgICAgICBob3VyRGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZVpvbmUgfSlcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGhvdXJJblRpbWVab25lLmdldEhvdXJzKCkgPT09IChjdXJyZW50RGF0ZS5nZXRIb3VycygpICsgMSkgJSAyNDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IHN0YXJ0SG91ckluZGV4OyBpIDwgc3RhcnRIb3VySW5kZXggKyAyNDsgaSsrKSB7XHJcbiAgICBuZXh0MjRIb3Vycy5wdXNoKGhvdXJseURhdGFbaSAlIGhvdXJseURhdGEubGVuZ3RoXSk7XHJcbiAgfVxyXG5cclxuICBuZXh0MjRIb3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICBjb25zdCBob3VyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoaG91ci50aW1lKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHtcclxuICAgICAgaG91cjogXCJudW1lcmljXCIsXHJcbiAgICAgIGhvdXIxMjogdHJ1ZSxcclxuICAgICAgdGltZVpvbmU6IHRpbWVab25lLFxyXG4gICAgfSkuZm9ybWF0KHRpbWUpO1xyXG5cclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gaXNDZWxzaXVzID8gYCR7aG91ci50ZW1wX2N9IMKwQ2AgOiBgJHtob3VyLnRlbXBfZn0gwrBGYDtcclxuXHJcbiAgICBob3VyRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJob3VybHktZm9yZWNhc3QtZWxlbWVudFwiPlxyXG4gICAgICAgIDxzdHJvbmc+JHtmb3JtYXR0ZWRUaW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wZXJhdHVyZS1kYXRhXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6JHtob3VyLmNvbmRpdGlvbi5pY29ufScvPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJyZXRyaWV2ZWQtaG91cmx5LXRlbXBlcmF0dXJlXCI+JHt0ZW1wZXJhdHVyZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBob3VybHlGb3JlY2FzdEVsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJFbGVtZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheURhaWx5Rm9yZWNhc3QoXHJcbiAgY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVDLFxyXG4gIGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlQyxcclxuICBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUYsXHJcbiAgY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVGLFxyXG4gIGN1cnJlbnREYWlseUZvcmVjYXN0RGF0ZXMsXHJcbiAgY3VycmVudERhaWx5Rm9yZWNhc3RJY29uc1xyXG4pIHtcclxuICBkYWlseUZvcmVjYXN0RWxlbWVudHNDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGFpbHktZm9yZWNhc3QtZWxlbWVudFwiPlxyXG4gICAgICAgICAgPHN0cm9uZz4ke2N1cnJlbnREYWlseUZvcmVjYXN0RGF0ZXNbMF19PC9zdHJvbmc+XHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBpc0NlbHNpdXNcclxuICAgICAgICAgICAgICA/IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlQ1swXVxyXG4gICAgICAgICAgICAgIDogY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVGWzBdXHJcbiAgICAgICAgICB9ICR7aXNDZWxzaXVzID8gXCLCsENcIiA6IFwiwrBGXCJ9IC1cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIGlzQ2Vsc2l1c1xyXG4gICAgICAgICAgICAgID8gY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDWzBdXHJcbiAgICAgICAgICAgICAgOiBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUZbMF1cclxuICAgICAgICAgIH0gJHtpc0NlbHNpdXMgPyBcIsKwQ1wiIDogXCLCsEZcIn1cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6JHtjdXJyZW50RGFpbHlGb3JlY2FzdEljb25zWzBdfVwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYWlseS1mb3JlY2FzdC1lbGVtZW50XCI+XHJcbiAgICAgICAgICA8c3Ryb25nPiR7Y3VycmVudERhaWx5Rm9yZWNhc3REYXRlc1sxXX08L3N0cm9uZz5cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIGlzQ2Vsc2l1c1xyXG4gICAgICAgICAgICAgID8gY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVDWzFdXHJcbiAgICAgICAgICAgICAgOiBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUZbMV1cclxuICAgICAgICAgIH0gJHtpc0NlbHNpdXMgPyBcIsKwQ1wiIDogXCLCsEZcIn0gLVxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgaXNDZWxzaXVzXHJcbiAgICAgICAgICAgICAgPyBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUNbMV1cclxuICAgICAgICAgICAgICA6IGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlRlsxXVxyXG4gICAgICAgICAgfSAke2lzQ2Vsc2l1cyA/IFwiwrBDXCIgOiBcIsKwRlwifVxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczoke2N1cnJlbnREYWlseUZvcmVjYXN0SWNvbnNbMV19XCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhaWx5LWZvcmVjYXN0LWVsZW1lbnRcIj5cclxuICAgICAgICAgIDxzdHJvbmc+JHtjdXJyZW50RGFpbHlGb3JlY2FzdERhdGVzWzJdfTwvc3Ryb25nPlxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgaXNDZWxzaXVzXHJcbiAgICAgICAgICAgICAgPyBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUNbMl1cclxuICAgICAgICAgICAgICA6IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlRlsyXVxyXG4gICAgICAgICAgfSAke2lzQ2Vsc2l1cyA/IFwiwrBDXCIgOiBcIsKwRlwifSAtXHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBpc0NlbHNpdXNcclxuICAgICAgICAgICAgICA/IGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlQ1syXVxyXG4gICAgICAgICAgICAgIDogY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVGWzJdXHJcbiAgICAgICAgICB9ICR7aXNDZWxzaXVzID8gXCLCsENcIiA6IFwiwrBGXCJ9XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOiR7Y3VycmVudERhaWx5Rm9yZWNhc3RJY29uc1syXX1cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhRGlzcGxheSgpIHtcclxuICBkaXNwbGF5SW1hZ2VzKCk7XHJcblxyXG4gIHJldHJpZXZlZExvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudENpdHl9LCAke3dlYXRoZXJEYXRhLmN1cnJlbnRDb3VudHJ5fWA7XHJcblxyXG4gIHJldHJpZXZlZEN1cnJlbnRUaW1lLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudEZvcm1hdHRlZERhdGU7XHJcbiAgcmV0cmlldmVkVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBpc0NlbHNpdXNcclxuICAgID8gYCR7d2VhdGhlckRhdGEuY3VycmVudFRlbXBlcmF0dXJlQ30gwrBDYFxyXG4gICAgOiBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50VGVtcGVyYXR1cmVGfSDCsEZgO1xyXG5cclxuICByZXRyaWV2ZWRUZW1wZXJhdHVyZUZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1c1xyXG4gICAgPyBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50VGVtcGVyYXR1cmVGZWVsc0xpa2VDfSDCsENgXHJcbiAgICA6IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRUZW1wZXJhdHVyZUZlZWxzTGlrZUZ9IMKwRmA7XHJcblxyXG4gIHJldHJpZXZlZEh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudEh1bWlkaXR5fSVgO1xyXG5cclxuICByZXRyaWV2ZWRWaXNpYmlsaXR5LnRleHRDb250ZW50ID0gaXNDZWxzaXVzXHJcbiAgICA/IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRWaXNpYmlsaXR5S219IGttYFxyXG4gICAgOiBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50VmlzaWJpbGl0eU1waH0gbWlgO1xyXG5cclxuICByZXRyaWV2ZWRXaW5kU3BlZWQudGV4dENvbnRlbnQgPSBpc0NlbHNpdXNcclxuICAgID8gYCR7d2VhdGhlckRhdGEuY3VycmVudFdpbmRTcGVlZEttfSBrbS9oYFxyXG4gICAgOiBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50V2luZFNwZWVkTXBofSBtcGhgO1xyXG5cclxuICByZXRyaWV2ZWRHdXN0U3BlZWQudGV4dENvbnRlbnQgPSBpc0NlbHNpdXNcclxuICAgID8gYCR7d2VhdGhlckRhdGEuY3VycmVudEd1c3RTcGVlZEttfSBrbS9oYFxyXG4gICAgOiBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50R3VzdFNwZWVkTXBofSBtcGhgO1xyXG5cclxuICByZXRyaWV2ZWRDbG91ZGluZXNzLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudENsb3VkaW5lc3N9JWA7XHJcbiAgcmV0cmlldmVkV2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRXaW5kRGlyZWN0aW9uO1xyXG4gIHJldHJpZXZlZFN1bnJpc2UudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50U3VucmlzZTtcclxuICByZXRyaWV2ZWRTdW5zZXQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50U3Vuc2V0O1xyXG4gIHJldHJpZXZlZENoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRDaGFuY2VPZlJhaW59JWA7XHJcblxyXG4gIHVwZGF0ZVV2SW5kZXgod2VhdGhlckRhdGEuY3VycmVudFV2KTtcclxuICBkaXNwbGF5SG91cmx5Rm9yZWNhc3Qod2VhdGhlckRhdGEuY3VycmVudERheSwgd2VhdGhlckRhdGEuY3VycmVudFRpbWVab25lKTtcclxuICBkaXNwbGF5RGFpbHlGb3JlY2FzdChcclxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlQyxcclxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlQyxcclxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlRixcclxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlRixcclxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnREYWlseUZvcmVjYXN0RGF0ZXMsXHJcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50RGFpbHlGb3JlY2FzdEljb25zXHJcbiAgKTtcclxuXHJcbiAgaWYgKHJldHJpZXZlZEhvdXJseVRlbXBlcmF0dXJlKSB7XHJcbiAgICByZXRyaWV2ZWRIb3VybHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1c1xyXG4gICAgICA/IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRIb3VybHlUZW1wZXJhdHVyZUN9IMKwQ2BcclxuICAgICAgOiBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50SG91cmx5VGVtcGVyYXR1cmVGfSDCsEZgO1xyXG4gIH1cclxuXHJcbiAgaWYgKHdlYXRoZXJEYXRhLmlzRGF5ID09PSAxKSB7XHJcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7QmFja2dyb3VuZERheUltYWdlfSlgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7QmFja2dyb3VuZE5pZ2h0SW1hZ2V9KWA7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVVdkluZGV4KHV2SW5kZXgpIHtcclxuICByZXRyaWV2ZWRVdkluZGV4LnRleHRDb250ZW50ID0gdXZJbmRleDtcclxuICByZXRyaWV2ZWRVdkluZGV4LmNsYXNzTmFtZSA9IFwicmV0cmlldmVkLXV2LWluZGV4IHJldHJpZXZlZC1kYXRhLW1hcmdpblwiO1xyXG5cclxuICBpZiAodXZJbmRleCA8PSAyKSB7XHJcbiAgICByZXRyaWV2ZWRVdkluZGV4LmNsYXNzTGlzdC5hZGQoXCJ1di1pbmRleC1ncmVlblwiKTtcclxuICB9IGVsc2UgaWYgKHV2SW5kZXggPD0gNSkge1xyXG4gICAgcmV0cmlldmVkVXZJbmRleC5jbGFzc0xpc3QuYWRkKFwidXYtaW5kZXgteWVsbG93XCIpO1xyXG4gIH0gZWxzZSBpZiAodXZJbmRleCA8PSA3KSB7XHJcbiAgICByZXRyaWV2ZWRVdkluZGV4LmNsYXNzTGlzdC5hZGQoXCJ1di1pbmRleC1vcmFuZ2VcIik7XHJcbiAgfSBlbHNlIGlmICh1dkluZGV4IDw9IDEwKSB7XHJcbiAgICByZXRyaWV2ZWRVdkluZGV4LmNsYXNzTGlzdC5hZGQoXCJ1di1pbmRleC1yZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHJpZXZlZFV2SW5kZXguY2xhc3NMaXN0LmFkZChcInV2LWluZGV4LXB1cnBsZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUZW1wTWV0cmljcygpIHtcclxuICBpc0NlbHNpdXMgPSAhaXNDZWxzaXVzO1xyXG4gIHN3aXRjaFRlbXBNZXRyaWNzQnV0dG9uLnRleHRDb250ZW50ID0gaXNDZWxzaXVzXHJcbiAgICA/IFwiU3dpdGNoIHRvIMKwRiwgbXBoXCJcclxuICAgIDogXCJTd2l0Y2ggdG8gwrBDLCBrbS9oXCI7XHJcbiAgdXBkYXRlRGF0YURpc3BsYXkoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgcmV0cmlldmVEYXRhIH0gZnJvbSBcIi4vYXBpXCI7XHJcbmltcG9ydCB7IGhhbmRsZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcbmhhbmRsZUV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgcmV0cmlldmVEYXRhKFwiUnVzZVwiKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==