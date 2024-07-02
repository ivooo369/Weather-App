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

.loading-spinner {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: #000000;
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
  font-weight: 500;
}

.retrieved-temperature-container {
  font-weight: 500;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n\r\n.loading-spinner {\r\n  display: none;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 2em;\r\n  color: #000000;\r\n}\r\n\r\nbutton {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  background-color: #00000080;\r\n  color: #ffffff;\r\n  width: 25rem;\r\n  margin: auto;\r\n  border-radius: 10px;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.no-location-found-text {\r\n  display: none;\r\n  align-items: center;\r\n  background-color: #ff0000;\r\n  color: #ffffff;\r\n  padding: 0.5rem 1rem;\r\n  margin-right: 0.5rem;\r\n  border-radius: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.search-input-container {\r\n  display: flex;\r\n}\r\n\r\n.search-input {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  padding: 0.75rem;\r\n  border: none;\r\n  border-radius: 5px 0 0 5px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.search-input:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.search-button {\r\n  padding: 0.75rem;\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  background-color: #007cb6;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.search-button:hover {\r\n  background-color: #006c9e;\r\n}\r\n\r\n.search-location-container {\r\n  display: flex;\r\n}\r\n\r\n.retrieved-location {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.retrieved-current-time {\r\n  white-space: pre-line;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.retrieved-data-margin {\r\n  margin-left: 0.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.retrieved-temperature-container {\r\n  font-weight: 500;\r\n}\r\n\r\n.location-and-time-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 0.5rem;\r\n  background-color: #ffffff8a;\r\n  padding: 2rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.full-data-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  justify-items: center;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n}\r\n\r\n.forecast-container-title {\r\n  position: absolute;\r\n  margin: auto;\r\n  right: 0;\r\n  left: 0;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\n.hourly-forecast-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  overflow: auto;\r\n  width: 50rem;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem 1rem 0 1rem;\r\n}\r\n\r\n.daily-forecast-container {\r\n  gap: 1.5rem;\r\n  overflow: auto;\r\n  width: 50rem;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.hourly-forecast-elements-container,\r\n.daily-forecast-elements-container {\r\n  display: flex;\r\n}\r\n\r\n.daily-forecast-elements-container {\r\n  justify-content: center;\r\n  gap: 3rem;\r\n}\r\n\r\n.hourly-forecast-element,\r\n.daily-forecast-element {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 10rem;\r\n  font-size: 1.2rem;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.daily-forecast-element strong {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.temperature-data {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.data-container {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.data-container-retrieved-data {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.retrieved-temperature-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.data-icons {\r\n  width: 2.5rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.weather-icons {\r\n  width: 3.5rem;\r\n}\r\n\r\n.switch-temp-metrics-button {\r\n  position: fixed;\r\n  background-color: #000000;\r\n  padding: 0.5rem;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  transition: 0.3s ease-in-out;\r\n  height: 2.5rem;\r\n}\r\n\r\n.retrieved-uv-index {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.uv-index-green {\r\n  background-color: #008000;\r\n  color: white;\r\n}\r\n\r\n.uv-index-yellow {\r\n  background-color: #ffff00;\r\n  color: black;\r\n}\r\n\r\n.uv-index-orange {\r\n  background-color: #ffa500;\r\n  color: black;\r\n}\r\n\r\n.uv-index-red {\r\n  background-color: #ff0000;\r\n  color: white;\r\n}\r\n\r\n.uv-index-purple {\r\n  background-color: #800080;\r\n  color: white;\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  .hourly-forecast-container,\r\n  .daily-forecast-container {\r\n    width: 40rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n  header {\r\n    flex-direction: column;\r\n  }\r\n  .switch-temp-metrics-button {\r\n    position: relative;\r\n    margin-top: 1rem;\r\n  }\r\n  .full-data-container {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .hourly-forecast-container,\r\n  .daily-forecast-container {\r\n    width: 30rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .full-data-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 520px) {\r\n  header {\r\n    width: 100%;\r\n  }\r\n  .full-data-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    width: 100%;\r\n    border-radius: 0;\r\n    margin: auto;\r\n  }\r\n  .hourly-forecast-container,\r\n  .daily-forecast-container {\r\n    width: 100%;\r\n    border-radius: 0;\r\n    margin: auto;\r\n  }\r\n  .daily-forecast-elements-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0;\r\n  }\r\n  .daily-forecast-element {\r\n    margin-top: 1rem;\r\n  }\r\n  .daily-forecast-container .forecast-container-title {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .daily-forecast-container {\r\n    margin-bottom: 1rem;\r\n  }\r\n  .search-location-container {\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n  }\r\n  .no-location-found-text {\r\n    justify-content: center;\r\n  }\r\n  .location-and-time-container {\r\n    width: 100%;\r\n    border-radius: 0;\r\n    margin: auto;\r\n    padding: 1rem;\r\n  }\r\n  .search-location-container,\r\n  .no-location-found-text {\r\n    width: 17rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .title {\r\n    font-size: 2rem;\r\n    width: 20rem;\r\n  }\r\n  .full-data-container {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    margin: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _images_background_day_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/background-day-image.jpg */ "./src/images/background-day-image.jpg");
/* harmony import */ var _images_background_night_image_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/background-night-image.jpg */ "./src/images/background-night-image.jpg");




const body = document.querySelector("body");
const content = document.querySelector(".content");
const noLocationFoundText = document.querySelector(".no-location-found-text");
const weatherIcon = document.querySelector(".weather-icons");
const loadingSpinner = document.querySelector(".loading-spinner");

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
  } finally {
    if (weatherData.isDay === 1) {
      body.style.background = `url(${_images_background_day_image_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
    } else {
      body.style.background = `url(${_images_background_night_image_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
    }

    content.style.display = "flex";
    loadingSpinner.style.display = "none";
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

module.exports = __webpack_require__.p + "images/background-day-image.97d2b3a93f7820e62773.jpg";

/***/ }),

/***/ "./src/images/background-night-image.jpg":
/*!***********************************************!*\
  !*** ./src/images/background-night-image.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-night-image.ddf27ebe8ea246bdc323.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNTQwZDEzYTlmYzRjOTM0N2RjNC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVks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QTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7QUFDbUI7QUFDeEQ7QUFDQSxxRUFBb0I7QUFDcEI7QUFDQTtBQUNBLEVBQUUsa0RBQVk7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcclxuICAgIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxyXG4gICAgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5uby1sb2NhdGlvbi1mb3VuZC10ZXh0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcclxuICAgIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2NiNjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmM5ZTtcclxufVxyXG5cclxuLnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5yZXRyaWV2ZWQtbG9jYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJldHJpZXZlZC1jdXJyZW50LXRpbWUge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnJldHJpZXZlZC1kYXRhLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucmV0cmlldmVkLXRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxvY2F0aW9uLWFuZC10aW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOGE7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZnVsbC1kYXRhLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uZm9yZWNhc3QtY29udGFpbmVyLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2lkdGg6IDUwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XHJcbn1cclxuXHJcbi5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHdpZHRoOiA1MHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXIsXHJcbi5kYWlseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kYWlseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogM3JlbTtcclxufVxyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1lbGVtZW50LFxyXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbi5kYWlseS1mb3JlY2FzdC1lbGVtZW50IHN0cm9uZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4udGVtcGVyYXR1cmUtZGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0YS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGF0YS1jb250YWluZXItcmV0cmlldmVkLWRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmV0cmlldmVkLXRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0YS1pY29ucyB7XHJcbiAgd2lkdGg6IDIuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLndlYXRoZXItaWNvbnMge1xyXG4gIHdpZHRoOiAzLjVyZW07XHJcbn1cclxuXHJcbi5zd2l0Y2gtdGVtcC1tZXRyaWNzLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG4ucmV0cmlldmVkLXV2LWluZGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnV2LWluZGV4LWdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnV2LWluZGV4LXllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51di1pbmRleC1vcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udXYtaW5kZXgtcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnV2LWluZGV4LXB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDA4MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIC5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyLFxyXG4gIC5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5zd2l0Y2gtdGVtcC1tZXRyaWNzLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuICAuZnVsbC1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIsXHJcbiAgLmRhaWx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuZnVsbC1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZnVsbC1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcixcclxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMDtcclxuICB9XHJcbiAgLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcbiAgLmRhaWx5LWZvcmVjYXN0LWNvbnRhaW5lciAuZm9yZWNhc3QtY29udGFpbmVyLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIC5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgLnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gIH1cclxuICAubm8tbG9jYXRpb24tZm91bmQtdGV4dCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvY2F0aW9uLWFuZC10aW1lLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICAuc2VhcmNoLWxvY2F0aW9uLWNvbnRhaW5lcixcclxuICAubm8tbG9jYXRpb24tZm91bmQtdGV4dCB7XHJcbiAgICB3aWR0aDogMTdyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gIH1cclxuICAuZnVsbC1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7b0NBQ2tDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFO29DQUNrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pC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RUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7O0lBRUUsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsTUFBTTtFQUNSO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTs7SUFFRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFlBQVk7RUFDZDtFQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB3aWR0aDogMjVyZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uby1sb2NhdGlvbi1mb3VuZC10ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2I2O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmM5ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldHJpZXZlZC1sb2NhdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldHJpZXZlZC1jdXJyZW50LXRpbWUge1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtZGF0YS1tYXJnaW4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbi1hbmQtdGltZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1kYXRhLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY29udGFpbmVyLXRpdGxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB3aWR0aDogNTByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOGE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXIsXFxyXFxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWZvcmVjYXN0LWVsZW1lbnQsXFxyXFxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudCBzdHJvbmcge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmUtZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGEtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLWNvbnRhaW5lci1yZXRyaWV2ZWQtZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLWljb25zIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaWNvbnMge1xcclxcbiAgd2lkdGg6IDMuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC10ZW1wLW1ldHJpY3MtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0cmlldmVkLXV2LWluZGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnV2LWluZGV4LWdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi51di1pbmRleC15ZWxsb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnV2LWluZGV4LW9yYW5nZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udXYtaW5kZXgtcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi51di1pbmRleC1wdXJwbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDA4MDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxyXFxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcixcXHJcXG4gIC5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIC5zd2l0Y2gtdGVtcC1tZXRyaWNzLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5mdWxsLWRhdGEtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XFxyXFxuICAuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcixcXHJcXG4gIC5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmZ1bGwtZGF0YS1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmZ1bGwtZGF0YS1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgfVxcclxcbiAgLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIsXFxyXFxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG4gIC5kYWlseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICB9XFxyXFxuICAuZGFpbHktZm9yZWNhc3QtZWxlbWVudCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIC5mb3JlY2FzdC1jb250YWluZXItdGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuICAuZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5zZWFyY2gtbG9jYXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICAubm8tbG9jYXRpb24tZm91bmQtdGV4dCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLmxvY2F0aW9uLWFuZC10aW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICB9XFxyXFxuICAuc2VhcmNoLWxvY2F0aW9uLWNvbnRhaW5lcixcXHJcXG4gIC5uby1sb2NhdGlvbi1mb3VuZC10ZXh0IHtcXHJcXG4gICAgd2lkdGg6IDE3cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgfVxcclxcbiAgLmZ1bGwtZGF0YS1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSwgdXBkYXRlRGF0YURpc3BsYXkgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuaW1wb3J0IEJhY2tncm91bmREYXlJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYmFja2dyb3VuZC1kYXktaW1hZ2UuanBnXCI7XHJcbmltcG9ydCBCYWNrZ3JvdW5kTmlnaHRJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYmFja2dyb3VuZC1uaWdodC1pbWFnZS5qcGdcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuY29uc3Qgbm9Mb2NhdGlvbkZvdW5kVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm8tbG9jYXRpb24tZm91bmQtdGV4dFwiKTtcclxuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItaWNvbnNcIik7XHJcbmNvbnN0IGxvYWRpbmdTcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLXNwaW5uZXJcIik7XHJcblxyXG5leHBvcnQgbGV0IHdlYXRoZXJEYXRhID0ge307XHJcblxyXG5jb25zdCB3aW5kRGlyZWN0aW9uTWFwcGluZyA9IHtcclxuICBOOiBcIk5vcnRoXCIsXHJcbiAgTk5FOiBcIk5vcnRoLU5vcnRoZWFzdFwiLFxyXG4gIE5FOiBcIk5vcnRoZWFzdFwiLFxyXG4gIEVORTogXCJFYXN0LU5vcnRoZWFzdFwiLFxyXG4gIEU6IFwiRWFzdFwiLFxyXG4gIEVTRTogXCJFYXN0LVNvdXRoZWFzdFwiLFxyXG4gIFNFOiBcIlNvdXRoZWFzdFwiLFxyXG4gIFNTRTogXCJTb3V0aC1Tb3V0aGVhc3RcIixcclxuICBTOiBcIlNvdXRoXCIsXHJcbiAgU1NXOiBcIlNvdXRoLVNvdXRod2VzdFwiLFxyXG4gIFNXOiBcIlNvdXRod2VzdFwiLFxyXG4gIFdTVzogXCJXZXN0LVNvdXRod2VzdFwiLFxyXG4gIFc6IFwiV2VzdFwiLFxyXG4gIFdOVzogXCJXZXN0LU5vcnRod2VzdFwiLFxyXG4gIE5XOiBcIk5vcnRod2VzdFwiLFxyXG4gIE5OVzogXCJOb3J0aC1Ob3J0aHdlc3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXRyaWV2ZURhdGEobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWE1OTkxNWQ3ZmMyNjRlZDQ4MGYxOTU5MTAyNDIzMDYmcT0ke2xvY2F0aW9ufSZ0aW1lc3RhbXA9JHt0aW1lc3RhbXB9JmRheXM9M2AsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc3QgY3VycmVudExvY2FsVGltZSA9IG5ldyBEYXRlKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKTtcclxuICAgICAgY29uc3QgY3VycmVudEZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGN1cnJlbnRMb2NhbFRpbWUpO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGltZVpvbmUgPSBkYXRhLmxvY2F0aW9uLnR6X2lkO1xyXG4gICAgICBjb25zdCBjdXJyZW50Q2l0eSA9IGRhdGEubG9jYXRpb24ubmFtZTtcclxuICAgICAgY29uc3QgY3VycmVudENvdW50cnkgPSBkYXRhLmxvY2F0aW9uLmNvdW50cnk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZUMgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVGID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcclxuICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlRmVlbHNMaWtlQyA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcclxuICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlRmVlbHNMaWtlRiA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcclxuICAgICAgY29uc3QgY3VycmVudFZpc2liaWxpdHlLbSA9IGRhdGEuY3VycmVudC52aXNfa207XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRWaXNpYmlsaXR5TXBoID0gZGF0YS5jdXJyZW50LnZpc19taWxlcztcclxuICAgICAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xyXG4gICAgICBjb25zdCBjdXJyZW50V2luZFNwZWVkS20gPSBkYXRhLmN1cnJlbnQud2luZF9rcGg7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRXaW5kU3BlZWRNcGggPSBkYXRhLmN1cnJlbnQud2luZF9tcGg7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRHdXN0U3BlZWRLbSA9IGRhdGEuY3VycmVudC5ndXN0X2twaDtcclxuICAgICAgY29uc3QgY3VycmVudEd1c3RTcGVlZE1waCA9IGRhdGEuY3VycmVudC5ndXN0X21waDtcclxuICAgICAgY29uc3QgY3VycmVudENsb3VkaW5lc3MgPSBkYXRhLmN1cnJlbnQuY2xvdWQ7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRXaW5kRGlyZWN0aW9uID0gd2luZERpcmVjdGlvbk1hcHBpbmdbZGF0YS5jdXJyZW50LndpbmRfZGlyXTtcclxuICAgICAgY29uc3QgY3VycmVudFN1bnJpc2UgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2U7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTdW5zZXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcclxuICAgICAgY29uc3QgY3VycmVudENoYW5jZU9mUmFpbiA9XHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VybHlUZW1wZXJhdHVyZUMgPVxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91ci50ZW1wX2M7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VybHlUZW1wZXJhdHVyZUYgPVxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91ci50ZW1wX2Y7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRVdiA9IGRhdGEuY3VycmVudC51djtcclxuICAgICAgY29uc3QgaXNEYXkgPSBkYXRhLmN1cnJlbnQuaXNfZGF5O1xyXG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cHM6JHtkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb259YDtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlQyA9IFtcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2MsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDID0gW1xyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYyxcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICBdO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUYgPSBbXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZixcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlRiA9IFtcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgY3VycmVudERhaWx5Rm9yZWNhc3RJY29ucyA9IFtcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgXTtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYWlseUZvcmVjYXN0RGF0ZXMgPSBbXHJcbiAgICAgICAgbmV3IERhdGUoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgICAgICBcImVuLVVTXCIsXHJcbiAgICAgICAgICB7IHdlZWtkYXk6IFwibG9uZ1wiIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBEYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICAgICAgeyB3ZWVrZGF5OiBcImxvbmdcIiB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRGF0ZShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgICAgIFwiZW4tVVNcIixcclxuICAgICAgICAgIHsgd2Vla2RheTogXCJsb25nXCIgfVxyXG4gICAgICAgICksXHJcbiAgICAgIF07XHJcblxyXG4gICAgICB3ZWF0aGVyRGF0YSA9IHtcclxuICAgICAgICBjdXJyZW50Rm9ybWF0dGVkRGF0ZSxcclxuICAgICAgICBjdXJyZW50Q2l0eSxcclxuICAgICAgICBjdXJyZW50Q291bnRyeSxcclxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmVDLFxyXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZUYsXHJcbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlRmVlbHNMaWtlQyxcclxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmVGZWVsc0xpa2VGLFxyXG4gICAgICAgIGN1cnJlbnRWaXNpYmlsaXR5S20sXHJcbiAgICAgICAgY3VycmVudFZpc2liaWxpdHlNcGgsXHJcbiAgICAgICAgY3VycmVudEh1bWlkaXR5LFxyXG4gICAgICAgIGN1cnJlbnRXaW5kU3BlZWRLbSxcclxuICAgICAgICBjdXJyZW50V2luZFNwZWVkTXBoLFxyXG4gICAgICAgIGN1cnJlbnRHdXN0U3BlZWRLbSxcclxuICAgICAgICBjdXJyZW50R3VzdFNwZWVkTXBoLFxyXG4gICAgICAgIGN1cnJlbnRDbG91ZGluZXNzLFxyXG4gICAgICAgIGN1cnJlbnRXaW5kRGlyZWN0aW9uLFxyXG4gICAgICAgIGN1cnJlbnRTdW5yaXNlLFxyXG4gICAgICAgIGN1cnJlbnRTdW5zZXQsXHJcbiAgICAgICAgY3VycmVudENoYW5jZU9mUmFpbixcclxuICAgICAgICBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUMsXHJcbiAgICAgICAgY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDLFxyXG4gICAgICAgIGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlRixcclxuICAgICAgICBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUYsXHJcbiAgICAgICAgY3VycmVudERhaWx5Rm9yZWNhc3REYXRlcyxcclxuICAgICAgICBjdXJyZW50RGFpbHlGb3JlY2FzdEljb25zLFxyXG4gICAgICAgIGN1cnJlbnREYXksXHJcbiAgICAgICAgY3VycmVudFRpbWVab25lLFxyXG4gICAgICAgIGN1cnJlbnRIb3VybHlUZW1wZXJhdHVyZUMsXHJcbiAgICAgICAgY3VycmVudEhvdXJseVRlbXBlcmF0dXJlRixcclxuICAgICAgICBjdXJyZW50VXYsXHJcbiAgICAgICAgaXNEYXksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB1cGRhdGVEYXRhRGlzcGxheSgpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub0xvY2F0aW9uRm91bmRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEhXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBpZiAod2VhdGhlckRhdGEuaXNEYXkgPT09IDEpIHtcclxuICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0JhY2tncm91bmREYXlJbWFnZX0pYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtCYWNrZ3JvdW5kTmlnaHRJbWFnZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGxvYWRpbmdTcGlubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFuc2xhdGVUZXh0KHRleHQpIHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkubXltZW1vcnkudHJhbnNsYXRlZC5uZXQvZ2V0P3E9JHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICB0ZXh0XHJcbiAgKX0mbGFuZ3BhaXI9Ymd8ZW5gO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChyZXN1bHQucmVzcG9uc2VEYXRhICYmIHJlc3VsdC5yZXNwb25zZURhdGEudHJhbnNsYXRlZFRleHQpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXNwb25zZURhdGEudHJhbnNsYXRlZFRleHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB0cmFuc2xhdGVkIHRleHQgZm91bmQgaW4gcmVzcG9uc2UhXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdHJhbnNsYXRpbmcgdGV4dDpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVHJhbnNsYXRpb24gZmFpbGVkIVwiKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmV0cmlldmVEYXRhLCB0cmFuc2xhdGVUZXh0IH0gZnJvbSBcIi4vYXBpXCI7XHJcbmltcG9ydCB7IHRvZ2dsZVRlbXBNZXRyaWNzIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBub0xvY2F0aW9uRm91bmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uby1sb2NhdGlvbi1mb3VuZC10ZXh0XCIpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idXR0b25cIik7XHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaW5wdXRcIik7XHJcbmNvbnN0IHN3aXRjaFRlbXBNZXRyaWNzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5zd2l0Y2gtdGVtcC1tZXRyaWNzLWJ1dHRvblwiXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHNlYXJjaElucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRMb2NhdGlvbiA9IGF3YWl0IHRyYW5zbGF0ZVRleHQobG9jYXRpb24pO1xyXG4gICAgICAgIGF3YWl0IHJldHJpZXZlRGF0YSh0cmFuc2xhdGVkTG9jYXRpb24pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0aGUgbG9jYXRpb24hXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBub0xvY2F0aW9uRm91bmRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KTtcclxuXHJcbiAgc3dpdGNoVGVtcE1ldHJpY3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVRlbXBNZXRyaWNzKTtcclxufVxyXG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi9pbWFnZXMvdGFiLWljb24uanBnXCI7XHJcbmltcG9ydCBCYWNrZ3JvdW5kRGF5SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2JhY2tncm91bmQtZGF5LWltYWdlLmpwZ1wiO1xyXG5pbXBvcnQgQmFja2dyb3VuZE5pZ2h0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2JhY2tncm91bmQtbmlnaHQtaW1hZ2UuanBnXCI7XHJcbmltcG9ydCBUZW1wZXJhdHVyZUljb24gZnJvbSBcIi4vaW1hZ2VzL3RlbXBlcmF0dXJlLWljb24ucG5nXCI7XHJcbmltcG9ydCBUZW1wZXJhdHVyZUZlZWxzTGlrZUljb24gZnJvbSBcIi4vaW1hZ2VzL3RlbXBlcmF0dXJlLWZlZWxzLWxpa2UtaWNvbi5wbmdcIjtcclxuaW1wb3J0IEh1bWlkaXR5SWNvbiBmcm9tIFwiLi9pbWFnZXMvaHVtaWRpdHktaWNvbi5wbmdcIjtcclxuaW1wb3J0IFdpbmREaXJlY3Rpb25JY29uIGZyb20gXCIuL2ltYWdlcy93aW5kLWRpcmVjdGlvbi1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgV2luZFNwZWVkSWNvbiBmcm9tIFwiLi9pbWFnZXMvd2luZC1zcGVlZC1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgR3VzdFNwZWVkSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ3VzdC1zcGVlZC1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgQ2hhbmNlT2ZSYWluSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2hhbmNlLW9mLXJhaW4taWNvbi5wbmdcIjtcclxuaW1wb3J0IENsb3VkaW5lc3NJY29uIGZyb20gXCIuL2ltYWdlcy9jbG91ZGluZXNzLWljb24ucG5nXCI7XHJcbmltcG9ydCBTdW5yaXNlSWNvbiBmcm9tIFwiLi9pbWFnZXMvc3VucmlzZS1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgU3Vuc2V0SWNvbiBmcm9tIFwiLi9pbWFnZXMvc3Vuc2V0LWljb24ucG5nXCI7XHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tIFwiLi9pbWFnZXMvdmlzaWJpbGl0eS1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgVXZJbmRleEljb24gZnJvbSBcIi4vaW1hZ2VzL3V2LWluZGV4LWljb24ucG5nXCI7XHJcbmltcG9ydCB7IHdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IHJldHJpZXZlZExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtbG9jYXRpb25cIik7XHJcbmNvbnN0IHJldHJpZXZlZEN1cnJlbnRUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtY3VycmVudC10aW1lXCIpO1xyXG5jb25zdCByZXRyaWV2ZWRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLXRlbXBlcmF0dXJlXCIpO1xyXG5jb25zdCByZXRyaWV2ZWRUZW1wZXJhdHVyZUZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucmV0cmlldmVkLXRlbXBlcmF0dXJlLWZlZWxzLWxpa2VcIlxyXG4pO1xyXG5jb25zdCByZXRyaWV2ZWRIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLWh1bWlkaXR5XCIpO1xyXG5jb25zdCByZXRyaWV2ZWRWaXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtdmlzaWJpbGl0eVwiKTtcclxuY29uc3QgcmV0cmlldmVkV2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtd2luZC1zcGVlZFwiKTtcclxuY29uc3QgcmV0cmlldmVkR3VzdFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtZ3VzdC1zcGVlZFwiKTtcclxuY29uc3QgcmV0cmlldmVkQ2xvdWRpbmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLWNsb3VkaW5lc3NcIik7XHJcbmNvbnN0IHJldHJpZXZlZFdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnJldHJpZXZlZC13aW5kLWRpcmVjdGlvblwiXHJcbik7XHJcbmNvbnN0IHJldHJpZXZlZFV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC11di1pbmRleFwiKTtcclxuY29uc3QgcmV0cmlldmVkU3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLXN1bnJpc2VcIik7XHJcbmNvbnN0IHJldHJpZXZlZFN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLXN1bnNldFwiKTtcclxuY29uc3QgcmV0cmlldmVkQ2hhbmNlT2ZSYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5yZXRyaWV2ZWQtY2hhbmNlLW9mLXJhaW5cIlxyXG4pO1xyXG5jb25zdCBzd2l0Y2hUZW1wTWV0cmljc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuc3dpdGNoLXRlbXAtbWV0cmljcy1idXR0b25cIlxyXG4pO1xyXG5jb25zdCBob3VybHlGb3JlY2FzdEVsZW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5ob3VybHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyXCJcclxuKTtcclxuY29uc3QgcmV0cmlldmVkSG91cmx5VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnJldHJpZXZlZC1ob3VybHktdGVtcGVyYXR1cmVcIlxyXG4pO1xyXG5jb25zdCBkYWlseUZvcmVjYXN0RWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lclwiXHJcbik7XHJcblxyXG5sZXQgaXNDZWxzaXVzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICBjb25zdCBkYXkgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XHJcbiAgY29uc3QgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gIGNvbnN0IG1vbnRoID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7IG1vbnRoOiBcInNob3J0XCIgfSk7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgY29uc3Qgb3JkaW5hbFN1ZmZpeCA9IChkYXlPZk1vbnRoKSA9PiB7XHJcbiAgICBpZiAoZGF5T2ZNb250aCA+IDMgJiYgZGF5T2ZNb250aCA8IDIxKSByZXR1cm4gXCJ0aFwiO1xyXG4gICAgc3dpdGNoIChkYXlPZk1vbnRoICUgMTApIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBcInN0XCI7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gXCJuZFwiO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgcmV0dXJuIFwicmRcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJ0aFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXl9LCAke2RheU9mTW9udGh9JHtvcmRpbmFsU3VmZml4KFxyXG4gICAgZGF5T2ZNb250aFxyXG4gICl9ICR7bW9udGh9ICR7eWVhcn1gO1xyXG5cclxuICBjb25zdCB0aW1lT3B0aW9ucyA9IHsgaG91cjogXCJudW1lcmljXCIsIG1pbnV0ZTogXCJudW1lcmljXCIsIGhvdXIxMjogdHJ1ZSB9O1xyXG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHRpbWVPcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIGAke2Zvcm1hdHRlZERhdGV9XFxuJHtmb3JtYXR0ZWRUaW1lfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlJbWFnZXMoKSB7XHJcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xyXG4gIGNvbnN0IHRhYkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICB0YWJJY29uLnJlbCA9IFwiaWNvblwiO1xyXG4gIHRhYkljb24uaHJlZiA9IEljb247XHJcbiAgaGVhZC5hcHBlbmRDaGlsZCh0YWJJY29uKTtcclxuXHJcbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0JhY2tncm91bmREYXlJbWFnZX0pYDtcclxuXHJcbiAgY29uc3QgdGVtcGVyYXR1cmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCgxKSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICB0ZW1wZXJhdHVyZUljb24uc3JjID0gVGVtcGVyYXR1cmVJY29uO1xyXG4gIGNvbnN0IHRlbXBlcmF0dXJlRmVlbHNMaWtlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoMikgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgdGVtcGVyYXR1cmVGZWVsc0xpa2VJY29uLnNyYyA9IFRlbXBlcmF0dXJlRmVlbHNMaWtlSWNvbjtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCgzKSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICBodW1pZGl0eUljb24uc3JjID0gSHVtaWRpdHlJY29uO1xyXG5cclxuICBjb25zdCB3aW5kRGlyZWN0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoNCkgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgd2luZERpcmVjdGlvbkljb24uc3JjID0gV2luZERpcmVjdGlvbkljb247XHJcblxyXG4gIGNvbnN0IHdpbmRTcGVlZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDUpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIHdpbmRTcGVlZEljb24uc3JjID0gV2luZFNwZWVkSWNvbjtcclxuXHJcbiAgY29uc3QgZ3VzdFNwZWVkSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoNikgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgZ3VzdFNwZWVkSWNvbi5zcmMgPSBHdXN0U3BlZWRJY29uO1xyXG5cclxuICBjb25zdCBjaGFuY2VPZlJhaW5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCg3KSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICBjaGFuY2VPZlJhaW5JY29uLnNyYyA9IENoYW5jZU9mUmFpbkljb247XHJcblxyXG4gIGNvbnN0IGNsb3VkaW5lc3NJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCg4KSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICBjbG91ZGluZXNzSWNvbi5zcmMgPSBDbG91ZGluZXNzSWNvbjtcclxuXHJcbiAgY29uc3Qgc3VucmlzZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDkpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIHN1bnJpc2VJY29uLnNyYyA9IFN1bnJpc2VJY29uO1xyXG5cclxuICBjb25zdCBzdW5zZXRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCgxMCkgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgc3Vuc2V0SWNvbi5zcmMgPSBTdW5zZXRJY29uO1xyXG5cclxuICBjb25zdCB2aXNpYmlsaXR5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoMTEpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIHZpc2liaWxpdHlJY29uLnNyYyA9IFZpc2liaWxpdHlJY29uO1xyXG5cclxuICBjb25zdCB1dkluZGV4SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoMTIpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIHV2SW5kZXhJY29uLnNyYyA9IFV2SW5kZXhJY29uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SG91cmx5Rm9yZWNhc3QoaG91cmx5RGF0YSwgdGltZVpvbmUpIHtcclxuICBob3VybHlGb3JlY2FzdEVsZW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZVpvbmUgfSk7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShjdXJyZW50VGltZSk7XHJcbiAgY29uc3QgbmV4dDI0SG91cnMgPSBbXTtcclxuXHJcbiAgbGV0IHN0YXJ0SG91ckluZGV4ID0gaG91cmx5RGF0YS5maW5kSW5kZXgoKGhvdXJEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBob3VyRGF0ZSA9IG5ldyBEYXRlKGhvdXJEYXRhLnRpbWUpO1xyXG4gICAgY29uc3QgaG91ckluVGltZVpvbmUgPSBuZXcgRGF0ZShcclxuICAgICAgaG91ckRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7IHRpbWVab25lIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGhvdXJJblRpbWVab25lLmdldEhvdXJzKCkgPT09IGN1cnJlbnREYXRlLmdldEhvdXJzKCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChzdGFydEhvdXJJbmRleCA9PT0gLTEpIHtcclxuICAgIHN0YXJ0SG91ckluZGV4ID0gaG91cmx5RGF0YS5maW5kSW5kZXgoKGhvdXJEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhvdXJEYXRlID0gbmV3IERhdGUoaG91ckRhdGEudGltZSk7XHJcbiAgICAgIGNvbnN0IGhvdXJJblRpbWVab25lID0gbmV3IERhdGUoXHJcbiAgICAgICAgaG91ckRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7IHRpbWVab25lIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBob3VySW5UaW1lWm9uZS5nZXRIb3VycygpID09PSAoY3VycmVudERhdGUuZ2V0SG91cnMoKSArIDEpICUgMjQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSBzdGFydEhvdXJJbmRleDsgaSA8IHN0YXJ0SG91ckluZGV4ICsgMjQ7IGkrKykge1xyXG4gICAgbmV4dDI0SG91cnMucHVzaChob3VybHlEYXRhW2kgJSBob3VybHlEYXRhLmxlbmd0aF0pO1xyXG4gIH1cclxuXHJcbiAgbmV4dDI0SG91cnMuZm9yRWFjaCgoaG91cikgPT4ge1xyXG4gICAgY29uc3QgaG91ckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKGhvdXIudGltZSk7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XHJcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICBob3VyMTI6IHRydWUsXHJcbiAgICAgIHRpbWVab25lOiB0aW1lWm9uZSxcclxuICAgIH0pLmZvcm1hdCh0aW1lKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGlzQ2Vsc2l1cyA/IGAke2hvdXIudGVtcF9jfSDCsENgIDogYCR7aG91ci50ZW1wX2Z9IMKwRmA7XHJcblxyXG4gICAgaG91ckVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LWZvcmVjYXN0LWVsZW1lbnRcIj5cclxuICAgICAgICA8c3Ryb25nPiR7Zm9ybWF0dGVkVGltZX08L3N0cm9uZz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGVyYXR1cmUtZGF0YVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9J2h0dHBzOiR7aG91ci5jb25kaXRpb24uaWNvbn0nLz5cclxuICAgICAgICAgIDxwIGNsYXNzPVwicmV0cmlldmVkLWhvdXJseS10ZW1wZXJhdHVyZVwiPiR7dGVtcGVyYXR1cmV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgaG91cmx5Rm9yZWNhc3RFbGVtZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3VyRWxlbWVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlEYWlseUZvcmVjYXN0KFxyXG4gIGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlQyxcclxuICBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUMsXHJcbiAgY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVGLFxyXG4gIGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlRixcclxuICBjdXJyZW50RGFpbHlGb3JlY2FzdERhdGVzLFxyXG4gIGN1cnJlbnREYWlseUZvcmVjYXN0SWNvbnNcclxuKSB7XHJcbiAgZGFpbHlGb3JlY2FzdEVsZW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImRhaWx5LWZvcmVjYXN0LWVsZW1lbnRcIj5cclxuICAgICAgICAgIDxzdHJvbmc+JHtjdXJyZW50RGFpbHlGb3JlY2FzdERhdGVzWzBdfTwvc3Ryb25nPlxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgaXNDZWxzaXVzXHJcbiAgICAgICAgICAgICAgPyBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUNbMF1cclxuICAgICAgICAgICAgICA6IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlRlswXVxyXG4gICAgICAgICAgfSAke2lzQ2Vsc2l1cyA/IFwiwrBDXCIgOiBcIsKwRlwifSAtXHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBpc0NlbHNpdXNcclxuICAgICAgICAgICAgICA/IGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlQ1swXVxyXG4gICAgICAgICAgICAgIDogY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVGWzBdXHJcbiAgICAgICAgICB9ICR7aXNDZWxzaXVzID8gXCLCsENcIiA6IFwiwrBGXCJ9XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOiR7Y3VycmVudERhaWx5Rm9yZWNhc3RJY29uc1swXX1cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGFpbHktZm9yZWNhc3QtZWxlbWVudFwiPlxyXG4gICAgICAgICAgPHN0cm9uZz4ke2N1cnJlbnREYWlseUZvcmVjYXN0RGF0ZXNbMV19PC9zdHJvbmc+XHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBpc0NlbHNpdXNcclxuICAgICAgICAgICAgICA/IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlQ1sxXVxyXG4gICAgICAgICAgICAgIDogY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVGWzFdXHJcbiAgICAgICAgICB9ICR7aXNDZWxzaXVzID8gXCLCsENcIiA6IFwiwrBGXCJ9IC1cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIGlzQ2Vsc2l1c1xyXG4gICAgICAgICAgICAgID8gY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDWzFdXHJcbiAgICAgICAgICAgICAgOiBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUZbMV1cclxuICAgICAgICAgIH0gJHtpc0NlbHNpdXMgPyBcIsKwQ1wiIDogXCLCsEZcIn1cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6JHtjdXJyZW50RGFpbHlGb3JlY2FzdEljb25zWzFdfVwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYWlseS1mb3JlY2FzdC1lbGVtZW50XCI+XHJcbiAgICAgICAgICA8c3Ryb25nPiR7Y3VycmVudERhaWx5Rm9yZWNhc3REYXRlc1syXX08L3N0cm9uZz5cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIGlzQ2Vsc2l1c1xyXG4gICAgICAgICAgICAgID8gY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVDWzJdXHJcbiAgICAgICAgICAgICAgOiBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUZbMl1cclxuICAgICAgICAgIH0gJHtpc0NlbHNpdXMgPyBcIsKwQ1wiIDogXCLCsEZcIn0gLVxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgaXNDZWxzaXVzXHJcbiAgICAgICAgICAgICAgPyBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUNbMl1cclxuICAgICAgICAgICAgICA6IGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlRlsyXVxyXG4gICAgICAgICAgfSAke2lzQ2Vsc2l1cyA/IFwiwrBDXCIgOiBcIsKwRlwifVxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczoke2N1cnJlbnREYWlseUZvcmVjYXN0SWNvbnNbMl19XCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YURpc3BsYXkoKSB7XHJcbiAgZGlzcGxheUltYWdlcygpO1xyXG5cclxuICByZXRyaWV2ZWRMb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRDaXR5fSwgJHt3ZWF0aGVyRGF0YS5jdXJyZW50Q291bnRyeX1gO1xyXG5cclxuICByZXRyaWV2ZWRDdXJyZW50VGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRGb3JtYXR0ZWREYXRlO1xyXG4gIHJldHJpZXZlZFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gaXNDZWxzaXVzXHJcbiAgICA/IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRUZW1wZXJhdHVyZUN9IMKwQ2BcclxuICAgIDogYCR7d2VhdGhlckRhdGEuY3VycmVudFRlbXBlcmF0dXJlRn0gwrBGYDtcclxuXHJcbiAgcmV0cmlldmVkVGVtcGVyYXR1cmVGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBpc0NlbHNpdXNcclxuICAgID8gYCR7d2VhdGhlckRhdGEuY3VycmVudFRlbXBlcmF0dXJlRmVlbHNMaWtlQ30gwrBDYFxyXG4gICAgOiBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50VGVtcGVyYXR1cmVGZWVsc0xpa2VGfSDCsEZgO1xyXG5cclxuICByZXRyaWV2ZWRIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRIdW1pZGl0eX0lYDtcclxuXHJcbiAgcmV0cmlldmVkVmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1c1xyXG4gICAgPyBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50VmlzaWJpbGl0eUttfSBrbWBcclxuICAgIDogYCR7d2VhdGhlckRhdGEuY3VycmVudFZpc2liaWxpdHlNcGh9IG1pYDtcclxuXHJcbiAgcmV0cmlldmVkV2luZFNwZWVkLnRleHRDb250ZW50ID0gaXNDZWxzaXVzXHJcbiAgICA/IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRXaW5kU3BlZWRLbX0ga20vaGBcclxuICAgIDogYCR7d2VhdGhlckRhdGEuY3VycmVudFdpbmRTcGVlZE1waH0gbXBoYDtcclxuXHJcbiAgcmV0cmlldmVkR3VzdFNwZWVkLnRleHRDb250ZW50ID0gaXNDZWxzaXVzXHJcbiAgICA/IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRHdXN0U3BlZWRLbX0ga20vaGBcclxuICAgIDogYCR7d2VhdGhlckRhdGEuY3VycmVudEd1c3RTcGVlZE1waH0gbXBoYDtcclxuXHJcbiAgcmV0cmlldmVkQ2xvdWRpbmVzcy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRDbG91ZGluZXNzfSVgO1xyXG4gIHJldHJpZXZlZFdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50V2luZERpcmVjdGlvbjtcclxuICByZXRyaWV2ZWRTdW5yaXNlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudFN1bnJpc2U7XHJcbiAgcmV0cmlldmVkU3Vuc2V0LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudFN1bnNldDtcclxuICByZXRyaWV2ZWRDaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50Q2hhbmNlT2ZSYWlufSVgO1xyXG5cclxuICB1cGRhdGVVdkluZGV4KHdlYXRoZXJEYXRhLmN1cnJlbnRVdik7XHJcbiAgZGlzcGxheUhvdXJseUZvcmVjYXN0KHdlYXRoZXJEYXRhLmN1cnJlbnREYXksIHdlYXRoZXJEYXRhLmN1cnJlbnRUaW1lWm9uZSk7XHJcbiAgZGlzcGxheURhaWx5Rm9yZWNhc3QoXHJcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUMsXHJcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUMsXHJcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUYsXHJcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUYsXHJcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50RGFpbHlGb3JlY2FzdERhdGVzLFxyXG4gICAgd2VhdGhlckRhdGEuY3VycmVudERhaWx5Rm9yZWNhc3RJY29uc1xyXG4gICk7XHJcblxyXG4gIGlmIChyZXRyaWV2ZWRIb3VybHlUZW1wZXJhdHVyZSkge1xyXG4gICAgcmV0cmlldmVkSG91cmx5VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBpc0NlbHNpdXNcclxuICAgICAgPyBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50SG91cmx5VGVtcGVyYXR1cmVDfSDCsENgXHJcbiAgICAgIDogYCR7d2VhdGhlckRhdGEuY3VycmVudEhvdXJseVRlbXBlcmF0dXJlRn0gwrBGYDtcclxuICB9XHJcblxyXG4gIGlmICh3ZWF0aGVyRGF0YS5pc0RheSA9PT0gMSkge1xyXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0JhY2tncm91bmREYXlJbWFnZX0pYDtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0JhY2tncm91bmROaWdodEltYWdlfSlgO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVXZJbmRleCh1dkluZGV4KSB7XHJcbiAgcmV0cmlldmVkVXZJbmRleC50ZXh0Q29udGVudCA9IHV2SW5kZXg7XHJcbiAgcmV0cmlldmVkVXZJbmRleC5jbGFzc05hbWUgPSBcInJldHJpZXZlZC11di1pbmRleCByZXRyaWV2ZWQtZGF0YS1tYXJnaW5cIjtcclxuXHJcbiAgaWYgKHV2SW5kZXggPD0gMikge1xyXG4gICAgcmV0cmlldmVkVXZJbmRleC5jbGFzc0xpc3QuYWRkKFwidXYtaW5kZXgtZ3JlZW5cIik7XHJcbiAgfSBlbHNlIGlmICh1dkluZGV4IDw9IDUpIHtcclxuICAgIHJldHJpZXZlZFV2SW5kZXguY2xhc3NMaXN0LmFkZChcInV2LWluZGV4LXllbGxvd1wiKTtcclxuICB9IGVsc2UgaWYgKHV2SW5kZXggPD0gNykge1xyXG4gICAgcmV0cmlldmVkVXZJbmRleC5jbGFzc0xpc3QuYWRkKFwidXYtaW5kZXgtb3JhbmdlXCIpO1xyXG4gIH0gZWxzZSBpZiAodXZJbmRleCA8PSAxMCkge1xyXG4gICAgcmV0cmlldmVkVXZJbmRleC5jbGFzc0xpc3QuYWRkKFwidXYtaW5kZXgtcmVkXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXRyaWV2ZWRVdkluZGV4LmNsYXNzTGlzdC5hZGQoXCJ1di1pbmRleC1wdXJwbGVcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVGVtcE1ldHJpY3MoKSB7XHJcbiAgaXNDZWxzaXVzID0gIWlzQ2Vsc2l1cztcclxuICBzd2l0Y2hUZW1wTWV0cmljc0J1dHRvbi50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1c1xyXG4gICAgPyBcIlN3aXRjaCB0byDCsEYsIG1waFwiXHJcbiAgICA6IFwiU3dpdGNoIHRvIMKwQywga20vaFwiO1xyXG4gIHVwZGF0ZURhdGFEaXNwbGF5KCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IHJldHJpZXZlRGF0YSB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBoYW5kbGVFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XHJcblxyXG5oYW5kbGVFdmVudExpc3RlbmVycygpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIHJldHJpZXZlRGF0YShcIlJ1c2VcIik7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=