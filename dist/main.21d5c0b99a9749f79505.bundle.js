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
  padding: 1rem;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n\r\nbutton {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  background-color: #00000080;\r\n  color: #ffffff;\r\n  width: 25rem;\r\n  margin: auto;\r\n  border-radius: 10px;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.no-location-found-text {\r\n  display: none;\r\n  align-items: center;\r\n  background-color: #ff0000;\r\n  color: #ffffff;\r\n  padding: 0.5rem 1rem;\r\n  margin-right: 0.5rem;\r\n  border-radius: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.search-input {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  padding: 0.75rem;\r\n  border: none;\r\n  border-radius: 5px 0 0 5px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.search-input:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.search-button {\r\n  padding: 0.75rem;\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  background-color: #007cb6;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.search-button:hover {\r\n  background-color: #006c9e;\r\n}\r\n\r\n.search-location-container {\r\n  display: flex;\r\n}\r\n\r\n.retrieved-location {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.retrieved-current-time {\r\n  white-space: pre-line;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.retrieved-data-margin {\r\n  margin-left: 0.5rem;\r\n  font-weight: 100;\r\n}\r\n\r\n.retrieved-temperature-container {\r\n  font-weight: 100;\r\n}\r\n\r\n.location-and-time-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 0.5rem;\r\n  background-color: #ffffff8a;\r\n  padding: 2rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.full-data-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  justify-items: center;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n}\r\n\r\n.forecast-container-title {\r\n  position: absolute;\r\n  margin: auto;\r\n  right: 0;\r\n  left: 0;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\n.hourly-forecast-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  overflow: auto;\r\n  width: 50rem;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n}\r\n\r\n.daily-forecast-container {\r\n  gap: 1.5rem;\r\n  overflow: auto;\r\n  width: 50rem;\r\n  background-color: #ffffff8a;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.hourly-forecast-elements-container,\r\n.daily-forecast-elements-container {\r\n  display: flex;\r\n}\r\n\r\n.daily-forecast-elements-container {\r\n  justify-content: center;\r\n  gap: 3rem;\r\n}\r\n\r\n.hourly-forecast-element,\r\n.daily-forecast-element {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 10rem;\r\n  font-size: 1.2rem;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.daily-forecast-element strong {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.temperature-data {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.data-container {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.data-container-retrieved-data {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.retrieved-temperature-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.data-icons {\r\n  width: 2.5rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.weather-icons {\r\n  width: 3.5rem;\r\n}\r\n\r\n.switch-temp-metrics-button {\r\n  position: fixed;\r\n  background-color: #000000;\r\n  padding: 0.5rem;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  transition: 0.3s ease-in-out;\r\n  height: 2.5rem;\r\n}\r\n\r\n.retrieved-uv-index {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.uv-index-green {\r\n  background-color: #008000;\r\n  color: white;\r\n}\r\n\r\n.uv-index-yellow {\r\n  background-color: #ffff00;\r\n  color: black;\r\n}\r\n\r\n.uv-index-orange {\r\n  background-color: #ffa500;\r\n  color: black;\r\n}\r\n\r\n.uv-index-red {\r\n  background-color: #ff0000;\r\n  color: white;\r\n}\r\n\r\n.uv-index-purple {\r\n  background-color: #800080;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
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

  // Add the current hour to the forecast
  let startHourIndex = hourlyData.findIndex((hourData) => {
    const hourDate = new Date(hourData.time);
    const hourInTimeZone = new Date(
      hourDate.toLocaleString("en-US", { timeZone })
    );
    return hourInTimeZone.getHours() === currentDate.getHours();
  });

  if (startHourIndex === -1) {
    // If the current hour is not found, start from the next hour
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

module.exports = __webpack_require__.p + "images/background-day-image.91615ba0263687300fd0.jpg";

/***/ }),

/***/ "./src/images/background-night-image.jpg":
/*!***********************************************!*\
  !*** ./src/images/background-night-image.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-night-image.bcf39962590fa39f9028.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMWQ1YzBiOTlhOTc0OWY3OTUwNS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVks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QTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ21CO0FBQ3hEO0FBQ0EscUVBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxFQUFFLGtEQUFZO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAuM3JlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm5vLWxvY2F0aW9uLWZvdW5kLXRleHQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjYjY7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZjOWU7XHJcbn1cclxuXHJcbi5zZWFyY2gtbG9jYXRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucmV0cmlldmVkLWxvY2F0aW9uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yZXRyaWV2ZWQtY3VycmVudC10aW1lIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5yZXRyaWV2ZWQtZGF0YS1tYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLnJldHJpZXZlZC10ZW1wZXJhdHVyZS1jb250YWluZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1hbmQtdGltZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjhhO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmZ1bGwtZGF0YS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjhhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmZvcmVjYXN0LWNvbnRhaW5lci10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHdpZHRoOiA1MHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcclxuICBnYXA6IDEuNXJlbTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogNTByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjhhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5ob3VybHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyLFxyXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDNyZW07XHJcbn1cclxuXHJcbi5ob3VybHktZm9yZWNhc3QtZWxlbWVudCxcclxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudCBzdHJvbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnRlbXBlcmF0dXJlLWRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGEtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRhdGEtY29udGFpbmVyLXJldHJpZXZlZC1kYXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJldHJpZXZlZC10ZW1wZXJhdHVyZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGEtaWNvbnMge1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi53ZWF0aGVyLWljb25zIHtcclxuICB3aWR0aDogMy41cmVtO1xyXG59XHJcblxyXG4uc3dpdGNoLXRlbXAtbWV0cmljcy1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxufVxyXG5cclxuLnJldHJpZXZlZC11di1pbmRleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi51di1pbmRleC1ncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi51di1pbmRleC15ZWxsb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udXYtaW5kZXgtb3JhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnV2LWluZGV4LXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi51di1pbmRleC1wdXJwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAwODA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYjtvQ0FDa0M7QUFDcEM7O0FBRUE7RUFDRTtvQ0FDa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7b0NBQ2tDO0VBQ2xDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXHJcXG4gICAgXFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB3aWR0aDogMjVyZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uby1sb2NhdGlvbi1mb3VuZC10ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2I2O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmM5ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldHJpZXZlZC1sb2NhdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldHJpZXZlZC1jdXJyZW50LXRpbWUge1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtZGF0YS1tYXJnaW4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbi1hbmQtdGltZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1kYXRhLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY29udGFpbmVyLXRpdGxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB3aWR0aDogNTByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOGE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXIsXFxyXFxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudHMtY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWZvcmVjYXN0LWVsZW1lbnQsXFxyXFxuLmRhaWx5LWZvcmVjYXN0LWVsZW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtZWxlbWVudCBzdHJvbmcge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmUtZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGEtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLWNvbnRhaW5lci1yZXRyaWV2ZWQtZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXRyaWV2ZWQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLWljb25zIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaWNvbnMge1xcclxcbiAgd2lkdGg6IDMuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC10ZW1wLW1ldHJpY3MtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0cmlldmVkLXV2LWluZGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnV2LWluZGV4LWdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi51di1pbmRleC15ZWxsb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnV2LWluZGV4LW9yYW5nZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udXYtaW5kZXgtcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi51di1pbmRleC1wdXJwbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDA4MDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmb3JtYXREYXRlLCB1cGRhdGVEYXRhRGlzcGxheSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuY29uc3Qgbm9Mb2NhdGlvbkZvdW5kVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm8tbG9jYXRpb24tZm91bmQtdGV4dFwiKTtcclxuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItaWNvbnNcIik7XHJcblxyXG5leHBvcnQgbGV0IHdlYXRoZXJEYXRhID0ge307XHJcblxyXG5jb25zdCB3aW5kRGlyZWN0aW9uTWFwcGluZyA9IHtcclxuICBOOiBcIk5vcnRoXCIsXHJcbiAgTk5FOiBcIk5vcnRoLU5vcnRoZWFzdFwiLFxyXG4gIE5FOiBcIk5vcnRoZWFzdFwiLFxyXG4gIEVORTogXCJFYXN0LU5vcnRoZWFzdFwiLFxyXG4gIEU6IFwiRWFzdFwiLFxyXG4gIEVTRTogXCJFYXN0LVNvdXRoZWFzdFwiLFxyXG4gIFNFOiBcIlNvdXRoZWFzdFwiLFxyXG4gIFNTRTogXCJTb3V0aC1Tb3V0aGVhc3RcIixcclxuICBTOiBcIlNvdXRoXCIsXHJcbiAgU1NXOiBcIlNvdXRoLVNvdXRod2VzdFwiLFxyXG4gIFNXOiBcIlNvdXRod2VzdFwiLFxyXG4gIFdTVzogXCJXZXN0LVNvdXRod2VzdFwiLFxyXG4gIFc6IFwiV2VzdFwiLFxyXG4gIFdOVzogXCJXZXN0LU5vcnRod2VzdFwiLFxyXG4gIE5XOiBcIk5vcnRod2VzdFwiLFxyXG4gIE5OVzogXCJOb3J0aC1Ob3J0aHdlc3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXRyaWV2ZURhdGEobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YTU5OTE1ZDdmYzI2NGVkNDgwZjE5NTkxMDI0MjMwNiZxPSR7bG9jYXRpb259JnRpbWVzdGFtcD0ke3RpbWVzdGFtcH0mZGF5cz0zYCxcclxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zdCBjdXJyZW50TG9jYWxUaW1lID0gbmV3IERhdGUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpO1xyXG4gICAgICBjb25zdCBjdXJyZW50Rm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUoY3VycmVudExvY2FsVGltZSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lWm9uZSA9IGRhdGEubG9jYXRpb24udHpfaWQ7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDaXR5ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gICAgICBjb25zdCBjdXJyZW50Q291bnRyeSA9IGRhdGEubG9jYXRpb24uY291bnRyeTtcclxuICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlQyA9IGRhdGEuY3VycmVudC50ZW1wX2M7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZUYgPSBkYXRhLmN1cnJlbnQudGVtcF9mO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVGZWVsc0xpa2VDID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVGZWVsc0xpa2VGID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mO1xyXG4gICAgICBjb25zdCBjdXJyZW50VmlzaWJpbGl0eUttID0gZGF0YS5jdXJyZW50LnZpc19rbTtcclxuICAgICAgY29uc3QgY3VycmVudFZpc2liaWxpdHlNcGggPSBkYXRhLmN1cnJlbnQudmlzX21pbGVzO1xyXG4gICAgICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRXaW5kU3BlZWRLbSA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcclxuICAgICAgY29uc3QgY3VycmVudFdpbmRTcGVlZE1waCA9IGRhdGEuY3VycmVudC53aW5kX21waDtcclxuICAgICAgY29uc3QgY3VycmVudEd1c3RTcGVlZEttID0gZGF0YS5jdXJyZW50Lmd1c3Rfa3BoO1xyXG4gICAgICBjb25zdCBjdXJyZW50R3VzdFNwZWVkTXBoID0gZGF0YS5jdXJyZW50Lmd1c3RfbXBoO1xyXG4gICAgICBjb25zdCBjdXJyZW50Q2xvdWRpbmVzcyA9IGRhdGEuY3VycmVudC5jbG91ZDtcclxuICAgICAgY29uc3QgY3VycmVudFdpbmREaXJlY3Rpb24gPSB3aW5kRGlyZWN0aW9uTWFwcGluZ1tkYXRhLmN1cnJlbnQud2luZF9kaXJdO1xyXG4gICAgICBjb25zdCBjdXJyZW50U3VucmlzZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcclxuICAgICAgY29uc3QgY3VycmVudFN1bnNldCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xyXG4gICAgICBjb25zdCBjdXJyZW50Q2hhbmNlT2ZSYWluID1cclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcclxuICAgICAgY29uc3QgY3VycmVudERheSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cjtcclxuICAgICAgY29uc3QgY3VycmVudEhvdXJseVRlbXBlcmF0dXJlQyA9XHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyLnRlbXBfYztcclxuICAgICAgY29uc3QgY3VycmVudEhvdXJseVRlbXBlcmF0dXJlRiA9XHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyLnRlbXBfZjtcclxuICAgICAgY29uc3QgY3VycmVudFV2ID0gZGF0YS5jdXJyZW50LnV2O1xyXG4gICAgICBjb25zdCBpc0RheSA9IGRhdGEuY3VycmVudC5pc19kYXk7XHJcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwczoke2RhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbn1gO1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVDID0gW1xyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYyxcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2MsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jLFxyXG4gICAgICBdO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUMgPSBbXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYyxcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlRiA9IFtcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfZixcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVGID0gW1xyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgICBdO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGFpbHlGb3JlY2FzdEljb25zID0gW1xyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICBdO1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudERhaWx5Rm9yZWNhc3REYXRlcyA9IFtcclxuICAgICAgICBuZXcgRGF0ZShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgICAgIFwiZW4tVVNcIixcclxuICAgICAgICAgIHsgd2Vla2RheTogXCJsb25nXCIgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IERhdGUoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgICAgICBcImVuLVVTXCIsXHJcbiAgICAgICAgICB7IHdlZWtkYXk6IFwibG9uZ1wiIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBEYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICAgICAgeyB3ZWVrZGF5OiBcImxvbmdcIiB9XHJcbiAgICAgICAgKSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHdlYXRoZXJEYXRhID0ge1xyXG4gICAgICAgIGN1cnJlbnRGb3JtYXR0ZWREYXRlLFxyXG4gICAgICAgIGN1cnJlbnRDaXR5LFxyXG4gICAgICAgIGN1cnJlbnRDb3VudHJ5LFxyXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZUMsXHJcbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlRixcclxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmVGZWVsc0xpa2VDLFxyXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZUZlZWxzTGlrZUYsXHJcbiAgICAgICAgY3VycmVudFZpc2liaWxpdHlLbSxcclxuICAgICAgICBjdXJyZW50VmlzaWJpbGl0eU1waCxcclxuICAgICAgICBjdXJyZW50SHVtaWRpdHksXHJcbiAgICAgICAgY3VycmVudFdpbmRTcGVlZEttLFxyXG4gICAgICAgIGN1cnJlbnRXaW5kU3BlZWRNcGgsXHJcbiAgICAgICAgY3VycmVudEd1c3RTcGVlZEttLFxyXG4gICAgICAgIGN1cnJlbnRHdXN0U3BlZWRNcGgsXHJcbiAgICAgICAgY3VycmVudENsb3VkaW5lc3MsXHJcbiAgICAgICAgY3VycmVudFdpbmREaXJlY3Rpb24sXHJcbiAgICAgICAgY3VycmVudFN1bnJpc2UsXHJcbiAgICAgICAgY3VycmVudFN1bnNldCxcclxuICAgICAgICBjdXJyZW50Q2hhbmNlT2ZSYWluLFxyXG4gICAgICAgIGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlQyxcclxuICAgICAgICBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUMsXHJcbiAgICAgICAgY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVGLFxyXG4gICAgICAgIGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlRixcclxuICAgICAgICBjdXJyZW50RGFpbHlGb3JlY2FzdERhdGVzLFxyXG4gICAgICAgIGN1cnJlbnREYWlseUZvcmVjYXN0SWNvbnMsXHJcbiAgICAgICAgY3VycmVudERheSxcclxuICAgICAgICBjdXJyZW50VGltZVpvbmUsXHJcbiAgICAgICAgY3VycmVudEhvdXJseVRlbXBlcmF0dXJlQyxcclxuICAgICAgICBjdXJyZW50SG91cmx5VGVtcGVyYXR1cmVGLFxyXG4gICAgICAgIGN1cnJlbnRVdixcclxuICAgICAgICBpc0RheSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHVwZGF0ZURhdGFEaXNwbGF5KCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vTG9jYXRpb25Gb3VuZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YSFcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlVGV4dCh0ZXh0KSB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm15bWVtb3J5LnRyYW5zbGF0ZWQubmV0L2dldD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgdGV4dFxyXG4gICl9JmxhbmdwYWlyPWJnfGVuYDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBpZiAocmVzdWx0LnJlc3BvbnNlRGF0YSAmJiByZXN1bHQucmVzcG9uc2VEYXRhLnRyYW5zbGF0ZWRUZXh0KSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQucmVzcG9uc2VEYXRhLnRyYW5zbGF0ZWRUZXh0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdHJhbnNsYXRlZCB0ZXh0IGZvdW5kIGluIHJlc3BvbnNlIVwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHRyYW5zbGF0aW5nIHRleHQ6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlRyYW5zbGF0aW9uIGZhaWxlZCFcIik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJldHJpZXZlRGF0YSwgdHJhbnNsYXRlVGV4dCB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyB0b2dnbGVUZW1wTWV0cmljcyB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuY29uc3Qgbm9Mb2NhdGlvbkZvdW5kVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm8tbG9jYXRpb24tZm91bmQtdGV4dFwiKTtcclxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnV0dG9uXCIpO1xyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWlucHV0XCIpO1xyXG5jb25zdCBzd2l0Y2hUZW1wTWV0cmljc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuc3dpdGNoLXRlbXAtbWV0cmljcy1idXR0b25cIlxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAobG9jYXRpb24pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVkTG9jYXRpb24gPSBhd2FpdCB0cmFuc2xhdGVUZXh0KGxvY2F0aW9uKTtcclxuICAgICAgICBhd2FpdCByZXRyaWV2ZURhdGEodHJhbnNsYXRlZExvY2F0aW9uKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIkZhaWxlZCB0byB0cmFuc2xhdGUgdGhlIGxvY2F0aW9uIVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgbm9Mb2NhdGlvbkZvdW5kVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSk7XHJcblxyXG4gIHN3aXRjaFRlbXBNZXRyaWNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVUZW1wTWV0cmljcyk7XHJcbn1cclxuIiwiaW1wb3J0IEljb24gZnJvbSBcIi4vaW1hZ2VzL3RhYi1pY29uLmpwZ1wiO1xyXG5pbXBvcnQgQmFja2dyb3VuZERheUltYWdlIGZyb20gXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLWRheS1pbWFnZS5qcGdcIjtcclxuaW1wb3J0IEJhY2tncm91bmROaWdodEltYWdlIGZyb20gXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLW5pZ2h0LWltYWdlLmpwZ1wiO1xyXG5pbXBvcnQgVGVtcGVyYXR1cmVJY29uIGZyb20gXCIuL2ltYWdlcy90ZW1wZXJhdHVyZS1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgVGVtcGVyYXR1cmVGZWVsc0xpa2VJY29uIGZyb20gXCIuL2ltYWdlcy90ZW1wZXJhdHVyZS1mZWVscy1saWtlLWljb24ucG5nXCI7XHJcbmltcG9ydCBIdW1pZGl0eUljb24gZnJvbSBcIi4vaW1hZ2VzL2h1bWlkaXR5LWljb24ucG5nXCI7XHJcbmltcG9ydCBXaW5kRGlyZWN0aW9uSWNvbiBmcm9tIFwiLi9pbWFnZXMvd2luZC1kaXJlY3Rpb24taWNvbi5wbmdcIjtcclxuaW1wb3J0IFdpbmRTcGVlZEljb24gZnJvbSBcIi4vaW1hZ2VzL3dpbmQtc3BlZWQtaWNvbi5wbmdcIjtcclxuaW1wb3J0IEd1c3RTcGVlZEljb24gZnJvbSBcIi4vaW1hZ2VzL2d1c3Qtc3BlZWQtaWNvbi5wbmdcIjtcclxuaW1wb3J0IENoYW5jZU9mUmFpbkljb24gZnJvbSBcIi4vaW1hZ2VzL2NoYW5jZS1vZi1yYWluLWljb24ucG5nXCI7XHJcbmltcG9ydCBDbG91ZGluZXNzSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvdWRpbmVzcy1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgU3VucmlzZUljb24gZnJvbSBcIi4vaW1hZ2VzL3N1bnJpc2UtaWNvbi5wbmdcIjtcclxuaW1wb3J0IFN1bnNldEljb24gZnJvbSBcIi4vaW1hZ2VzL3N1bnNldC1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSBcIi4vaW1hZ2VzL3Zpc2liaWxpdHktaWNvbi5wbmdcIjtcclxuaW1wb3J0IFV2SW5kZXhJY29uIGZyb20gXCIuL2ltYWdlcy91di1pbmRleC1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgeyB3ZWF0aGVyRGF0YSB9IGZyb20gXCIuL2FwaVwiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCByZXRyaWV2ZWRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLWxvY2F0aW9uXCIpO1xyXG5jb25zdCByZXRyaWV2ZWRDdXJyZW50VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLWN1cnJlbnQtdGltZVwiKTtcclxuY29uc3QgcmV0cmlldmVkVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC10ZW1wZXJhdHVyZVwiKTtcclxuY29uc3QgcmV0cmlldmVkVGVtcGVyYXR1cmVGZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnJldHJpZXZlZC10ZW1wZXJhdHVyZS1mZWVscy1saWtlXCJcclxuKTtcclxuY29uc3QgcmV0cmlldmVkSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC1odW1pZGl0eVwiKTtcclxuY29uc3QgcmV0cmlldmVkVmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLXZpc2liaWxpdHlcIik7XHJcbmNvbnN0IHJldHJpZXZlZFdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLXdpbmQtc3BlZWRcIik7XHJcbmNvbnN0IHJldHJpZXZlZEd1c3RTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV0cmlldmVkLWd1c3Qtc3BlZWRcIik7XHJcbmNvbnN0IHJldHJpZXZlZENsb3VkaW5lc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC1jbG91ZGluZXNzXCIpO1xyXG5jb25zdCByZXRyaWV2ZWRXaW5kRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5yZXRyaWV2ZWQtd2luZC1kaXJlY3Rpb25cIlxyXG4pO1xyXG5jb25zdCByZXRyaWV2ZWRVdkluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXRyaWV2ZWQtdXYtaW5kZXhcIik7XHJcbmNvbnN0IHJldHJpZXZlZFN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC1zdW5yaXNlXCIpO1xyXG5jb25zdCByZXRyaWV2ZWRTdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHJpZXZlZC1zdW5zZXRcIik7XHJcbmNvbnN0IHJldHJpZXZlZENoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucmV0cmlldmVkLWNoYW5jZS1vZi1yYWluXCJcclxuKTtcclxuY29uc3Qgc3dpdGNoVGVtcE1ldHJpY3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnN3aXRjaC10ZW1wLW1ldHJpY3MtYnV0dG9uXCJcclxuKTtcclxuY29uc3QgaG91cmx5Rm9yZWNhc3RFbGVtZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuaG91cmx5LWZvcmVjYXN0LWVsZW1lbnRzLWNvbnRhaW5lclwiXHJcbik7XHJcbmNvbnN0IHJldHJpZXZlZEhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5yZXRyaWV2ZWQtaG91cmx5LXRlbXBlcmF0dXJlXCJcclxuKTtcclxuY29uc3QgZGFpbHlGb3JlY2FzdEVsZW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5kYWlseS1mb3JlY2FzdC1lbGVtZW50cy1jb250YWluZXJcIlxyXG4pO1xyXG5cclxubGV0IGlzQ2Vsc2l1cyA9IHRydWU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xyXG4gIGNvbnN0IGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTtcclxuICBjb25zdCBtb250aCA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgeyBtb250aDogXCJzaG9ydFwiIH0pO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIGNvbnN0IG9yZGluYWxTdWZmaXggPSAoZGF5T2ZNb250aCkgPT4ge1xyXG4gICAgaWYgKGRheU9mTW9udGggPiAzICYmIGRheU9mTW9udGggPCAyMSkgcmV0dXJuIFwidGhcIjtcclxuICAgIHN3aXRjaCAoZGF5T2ZNb250aCAlIDEwKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gXCJzdFwiO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgcmV0dXJuIFwibmRcIjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiBcInJkXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwidGhcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7ZGF5fSwgJHtkYXlPZk1vbnRofSR7b3JkaW5hbFN1ZmZpeChcclxuICAgIGRheU9mTW9udGhcclxuICApfSAke21vbnRofSAke3llYXJ9YDtcclxuXHJcbiAgY29uc3QgdGltZU9wdGlvbnMgPSB7IGhvdXI6IFwibnVtZXJpY1wiLCBtaW51dGU6IFwibnVtZXJpY1wiLCBob3VyMTI6IHRydWUgfTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB0aW1lT3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBgJHtmb3JtYXR0ZWREYXRlfVxcbiR7Zm9ybWF0dGVkVGltZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SW1hZ2VzKCkge1xyXG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtcclxuICBjb25zdCB0YWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgdGFiSWNvbi5yZWwgPSBcImljb25cIjtcclxuICB0YWJJY29uLmhyZWYgPSBJY29uO1xyXG4gIGhlYWQuYXBwZW5kQ2hpbGQodGFiSWNvbik7XHJcblxyXG4gIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtCYWNrZ3JvdW5kRGF5SW1hZ2V9KWA7XHJcblxyXG4gIGNvbnN0IHRlbXBlcmF0dXJlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoMSkgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgdGVtcGVyYXR1cmVJY29uLnNyYyA9IFRlbXBlcmF0dXJlSWNvbjtcclxuICBjb25zdCB0ZW1wZXJhdHVyZUZlZWxzTGlrZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIHRlbXBlcmF0dXJlRmVlbHNMaWtlSWNvbi5zcmMgPSBUZW1wZXJhdHVyZUZlZWxzTGlrZUljb247XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoMykgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgaHVtaWRpdHlJY29uLnNyYyA9IEh1bWlkaXR5SWNvbjtcclxuXHJcbiAgY29uc3Qgd2luZERpcmVjdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDQpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIHdpbmREaXJlY3Rpb25JY29uLnNyYyA9IFdpbmREaXJlY3Rpb25JY29uO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCg1KSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICB3aW5kU3BlZWRJY29uLnNyYyA9IFdpbmRTcGVlZEljb247XHJcblxyXG4gIGNvbnN0IGd1c3RTcGVlZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDYpIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIGd1c3RTcGVlZEljb24uc3JjID0gR3VzdFNwZWVkSWNvbjtcclxuXHJcbiAgY29uc3QgY2hhbmNlT2ZSYWluSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoNykgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgY2hhbmNlT2ZSYWluSWNvbi5zcmMgPSBDaGFuY2VPZlJhaW5JY29uO1xyXG5cclxuICBjb25zdCBjbG91ZGluZXNzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoOCkgLmRhdGEtaWNvbnNcIlxyXG4gICk7XHJcbiAgY2xvdWRpbmVzc0ljb24uc3JjID0gQ2xvdWRpbmVzc0ljb247XHJcblxyXG4gIGNvbnN0IHN1bnJpc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmRhdGEtY29udGFpbmVyOm50aC1jaGlsZCg5KSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICBzdW5yaXNlSWNvbi5zcmMgPSBTdW5yaXNlSWNvbjtcclxuXHJcbiAgY29uc3Qgc3Vuc2V0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5kYXRhLWNvbnRhaW5lcjpudGgtY2hpbGQoMTApIC5kYXRhLWljb25zXCJcclxuICApO1xyXG4gIHN1bnNldEljb24uc3JjID0gU3Vuc2V0SWNvbjtcclxuXHJcbiAgY29uc3QgdmlzaWJpbGl0eUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDExKSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICB2aXNpYmlsaXR5SWNvbi5zcmMgPSBWaXNpYmlsaXR5SWNvbjtcclxuXHJcbiAgY29uc3QgdXZJbmRleEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZGF0YS1jb250YWluZXI6bnRoLWNoaWxkKDEyKSAuZGF0YS1pY29uc1wiXHJcbiAgKTtcclxuICB1dkluZGV4SWNvbi5zcmMgPSBVdkluZGV4SWNvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvdXJseUZvcmVjYXN0KGhvdXJseURhdGEsIHRpbWVab25lKSB7XHJcbiAgaG91cmx5Rm9yZWNhc3RFbGVtZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7IHRpbWVab25lIH0pO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudFRpbWUpO1xyXG4gIGNvbnN0IG5leHQyNEhvdXJzID0gW107XHJcblxyXG4gIC8vIEFkZCB0aGUgY3VycmVudCBob3VyIHRvIHRoZSBmb3JlY2FzdFxyXG4gIGxldCBzdGFydEhvdXJJbmRleCA9IGhvdXJseURhdGEuZmluZEluZGV4KChob3VyRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgaG91ckRhdGUgPSBuZXcgRGF0ZShob3VyRGF0YS50aW1lKTtcclxuICAgIGNvbnN0IGhvdXJJblRpbWVab25lID0gbmV3IERhdGUoXHJcbiAgICAgIGhvdXJEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lWm9uZSB9KVxyXG4gICAgKTtcclxuICAgIHJldHVybiBob3VySW5UaW1lWm9uZS5nZXRIb3VycygpID09PSBjdXJyZW50RGF0ZS5nZXRIb3VycygpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoc3RhcnRIb3VySW5kZXggPT09IC0xKSB7XHJcbiAgICAvLyBJZiB0aGUgY3VycmVudCBob3VyIGlzIG5vdCBmb3VuZCwgc3RhcnQgZnJvbSB0aGUgbmV4dCBob3VyXHJcbiAgICBzdGFydEhvdXJJbmRleCA9IGhvdXJseURhdGEuZmluZEluZGV4KChob3VyRGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBob3VyRGF0ZSA9IG5ldyBEYXRlKGhvdXJEYXRhLnRpbWUpO1xyXG4gICAgICBjb25zdCBob3VySW5UaW1lWm9uZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIGhvdXJEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lWm9uZSB9KVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gaG91ckluVGltZVpvbmUuZ2V0SG91cnMoKSA9PT0gKGN1cnJlbnREYXRlLmdldEhvdXJzKCkgKyAxKSAlIDI0O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRIb3VySW5kZXg7IGkgPCBzdGFydEhvdXJJbmRleCArIDI0OyBpKyspIHtcclxuICAgIG5leHQyNEhvdXJzLnB1c2goaG91cmx5RGF0YVtpICUgaG91cmx5RGF0YS5sZW5ndGhdKTtcclxuICB9XHJcblxyXG4gIG5leHQyNEhvdXJzLmZvckVhY2goKGhvdXIpID0+IHtcclxuICAgIGNvbnN0IGhvdXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShob3VyLnRpbWUpO1xyXG4gICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xyXG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcclxuICAgICAgaG91cjEyOiB0cnVlLFxyXG4gICAgICB0aW1lWm9uZTogdGltZVpvbmUsXHJcbiAgICB9KS5mb3JtYXQodGltZSk7XHJcblxyXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBpc0NlbHNpdXMgPyBgJHtob3VyLnRlbXBfY30gwrBDYCA6IGAke2hvdXIudGVtcF9mfSDCsEZgO1xyXG5cclxuICAgIGhvdXJFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImhvdXJseS1mb3JlY2FzdC1lbGVtZW50XCI+XHJcbiAgICAgICAgPHN0cm9uZz4ke2Zvcm1hdHRlZFRpbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBlcmF0dXJlLWRhdGFcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPSdodHRwczoke2hvdXIuY29uZGl0aW9uLmljb259Jy8+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInJldHJpZXZlZC1ob3VybHktdGVtcGVyYXR1cmVcIj4ke3RlbXBlcmF0dXJlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGhvdXJseUZvcmVjYXN0RWxlbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91ckVsZW1lbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RGFpbHlGb3JlY2FzdChcclxuICBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUMsXHJcbiAgY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDLFxyXG4gIGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlRixcclxuICBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUYsXHJcbiAgY3VycmVudERhaWx5Rm9yZWNhc3REYXRlcyxcclxuICBjdXJyZW50RGFpbHlGb3JlY2FzdEljb25zXHJcbikge1xyXG4gIGRhaWx5Rm9yZWNhc3RFbGVtZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYWlseS1mb3JlY2FzdC1lbGVtZW50XCI+XHJcbiAgICAgICAgICA8c3Ryb25nPiR7Y3VycmVudERhaWx5Rm9yZWNhc3REYXRlc1swXX08L3N0cm9uZz5cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIGlzQ2Vsc2l1c1xyXG4gICAgICAgICAgICAgID8gY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVDWzBdXHJcbiAgICAgICAgICAgICAgOiBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUZbMF1cclxuICAgICAgICAgIH0gJHtpc0NlbHNpdXMgPyBcIsKwQ1wiIDogXCLCsEZcIn0gLVxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgaXNDZWxzaXVzXHJcbiAgICAgICAgICAgICAgPyBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUNbMF1cclxuICAgICAgICAgICAgICA6IGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlRlswXVxyXG4gICAgICAgICAgfSAke2lzQ2Vsc2l1cyA/IFwiwrBDXCIgOiBcIsKwRlwifVxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczoke2N1cnJlbnREYWlseUZvcmVjYXN0SWNvbnNbMF19XCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhaWx5LWZvcmVjYXN0LWVsZW1lbnRcIj5cclxuICAgICAgICAgIDxzdHJvbmc+JHtjdXJyZW50RGFpbHlGb3JlY2FzdERhdGVzWzFdfTwvc3Ryb25nPlxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgaXNDZWxzaXVzXHJcbiAgICAgICAgICAgICAgPyBjdXJyZW50RGFpbHlNaW5UZW1wZXJhdHVyZUNbMV1cclxuICAgICAgICAgICAgICA6IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlRlsxXVxyXG4gICAgICAgICAgfSAke2lzQ2Vsc2l1cyA/IFwiwrBDXCIgOiBcIsKwRlwifSAtXHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBpc0NlbHNpdXNcclxuICAgICAgICAgICAgICA/IGN1cnJlbnREYWlseU1heFRlbXBlcmF0dXJlQ1sxXVxyXG4gICAgICAgICAgICAgIDogY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVGWzFdXHJcbiAgICAgICAgICB9ICR7aXNDZWxzaXVzID8gXCLCsENcIiA6IFwiwrBGXCJ9XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOiR7Y3VycmVudERhaWx5Rm9yZWNhc3RJY29uc1sxXX1cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGFpbHktZm9yZWNhc3QtZWxlbWVudFwiPlxyXG4gICAgICAgICAgPHN0cm9uZz4ke2N1cnJlbnREYWlseUZvcmVjYXN0RGF0ZXNbMl19PC9zdHJvbmc+XHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICBpc0NlbHNpdXNcclxuICAgICAgICAgICAgICA/IGN1cnJlbnREYWlseU1pblRlbXBlcmF0dXJlQ1syXVxyXG4gICAgICAgICAgICAgIDogY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVGWzJdXHJcbiAgICAgICAgICB9ICR7aXNDZWxzaXVzID8gXCLCsENcIiA6IFwiwrBGXCJ9IC1cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIGlzQ2Vsc2l1c1xyXG4gICAgICAgICAgICAgID8gY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDWzJdXHJcbiAgICAgICAgICAgICAgOiBjdXJyZW50RGFpbHlNYXhUZW1wZXJhdHVyZUZbMl1cclxuICAgICAgICAgIH0gJHtpc0NlbHNpdXMgPyBcIsKwQ1wiIDogXCLCsEZcIn1cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6JHtjdXJyZW50RGFpbHlGb3JlY2FzdEljb25zWzJdfVwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhdGFEaXNwbGF5KCkge1xyXG4gIGRpc3BsYXlJbWFnZXMoKTtcclxuXHJcbiAgcmV0cmlldmVkTG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50Q2l0eX0sICR7d2VhdGhlckRhdGEuY3VycmVudENvdW50cnl9YDtcclxuXHJcbiAgcmV0cmlldmVkQ3VycmVudFRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Rm9ybWF0dGVkRGF0ZTtcclxuICByZXRyaWV2ZWRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1c1xyXG4gICAgPyBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50VGVtcGVyYXR1cmVDfSDCsENgXHJcbiAgICA6IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRUZW1wZXJhdHVyZUZ9IMKwRmA7XHJcblxyXG4gIHJldHJpZXZlZFRlbXBlcmF0dXJlRmVlbHNMaWtlLnRleHRDb250ZW50ID0gaXNDZWxzaXVzXHJcbiAgICA/IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRUZW1wZXJhdHVyZUZlZWxzTGlrZUN9IMKwQ2BcclxuICAgIDogYCR7d2VhdGhlckRhdGEuY3VycmVudFRlbXBlcmF0dXJlRmVlbHNMaWtlRn0gwrBGYDtcclxuXHJcbiAgcmV0cmlldmVkSHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50SHVtaWRpdHl9JWA7XHJcblxyXG4gIHJldHJpZXZlZFZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBpc0NlbHNpdXNcclxuICAgID8gYCR7d2VhdGhlckRhdGEuY3VycmVudFZpc2liaWxpdHlLbX0ga21gXHJcbiAgICA6IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRWaXNpYmlsaXR5TXBofSBtaWA7XHJcblxyXG4gIHJldHJpZXZlZFdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1c1xyXG4gICAgPyBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50V2luZFNwZWVkS219IGttL2hgXHJcbiAgICA6IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRXaW5kU3BlZWRNcGh9IG1waGA7XHJcblxyXG4gIHJldHJpZXZlZEd1c3RTcGVlZC50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1c1xyXG4gICAgPyBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50R3VzdFNwZWVkS219IGttL2hgXHJcbiAgICA6IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRHdXN0U3BlZWRNcGh9IG1waGA7XHJcblxyXG4gIHJldHJpZXZlZENsb3VkaW5lc3MudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50Q2xvdWRpbmVzc30lYDtcclxuICByZXRyaWV2ZWRXaW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudFdpbmREaXJlY3Rpb247XHJcbiAgcmV0cmlldmVkU3VucmlzZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRTdW5yaXNlO1xyXG4gIHJldHJpZXZlZFN1bnNldC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnRTdW5zZXQ7XHJcbiAgcmV0cmlldmVkQ2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudENoYW5jZU9mUmFpbn0lYDtcclxuXHJcbiAgdXBkYXRlVXZJbmRleCh3ZWF0aGVyRGF0YS5jdXJyZW50VXYpO1xyXG4gIGRpc3BsYXlIb3VybHlGb3JlY2FzdCh3ZWF0aGVyRGF0YS5jdXJyZW50RGF5LCB3ZWF0aGVyRGF0YS5jdXJyZW50VGltZVpvbmUpO1xyXG4gIGRpc3BsYXlEYWlseUZvcmVjYXN0KFxyXG4gICAgd2VhdGhlckRhdGEuY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVDLFxyXG4gICAgd2VhdGhlckRhdGEuY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVDLFxyXG4gICAgd2VhdGhlckRhdGEuY3VycmVudERhaWx5TWluVGVtcGVyYXR1cmVGLFxyXG4gICAgd2VhdGhlckRhdGEuY3VycmVudERhaWx5TWF4VGVtcGVyYXR1cmVGLFxyXG4gICAgd2VhdGhlckRhdGEuY3VycmVudERhaWx5Rm9yZWNhc3REYXRlcyxcclxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnREYWlseUZvcmVjYXN0SWNvbnNcclxuICApO1xyXG5cclxuICBpZiAocmV0cmlldmVkSG91cmx5VGVtcGVyYXR1cmUpIHtcclxuICAgIHJldHJpZXZlZEhvdXJseVRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gaXNDZWxzaXVzXHJcbiAgICAgID8gYCR7d2VhdGhlckRhdGEuY3VycmVudEhvdXJseVRlbXBlcmF0dXJlQ30gwrBDYFxyXG4gICAgICA6IGAke3dlYXRoZXJEYXRhLmN1cnJlbnRIb3VybHlUZW1wZXJhdHVyZUZ9IMKwRmA7XHJcbiAgfVxyXG5cclxuICBpZiAod2VhdGhlckRhdGEuaXNEYXkgPT09IDEpIHtcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtCYWNrZ3JvdW5kRGF5SW1hZ2V9KWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtCYWNrZ3JvdW5kTmlnaHRJbWFnZX0pYDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVV2SW5kZXgodXZJbmRleCkge1xyXG4gIHJldHJpZXZlZFV2SW5kZXgudGV4dENvbnRlbnQgPSB1dkluZGV4O1xyXG4gIHJldHJpZXZlZFV2SW5kZXguY2xhc3NOYW1lID0gXCJyZXRyaWV2ZWQtdXYtaW5kZXggcmV0cmlldmVkLWRhdGEtbWFyZ2luXCI7XHJcblxyXG4gIGlmICh1dkluZGV4IDw9IDIpIHtcclxuICAgIHJldHJpZXZlZFV2SW5kZXguY2xhc3NMaXN0LmFkZChcInV2LWluZGV4LWdyZWVuXCIpO1xyXG4gIH0gZWxzZSBpZiAodXZJbmRleCA8PSA1KSB7XHJcbiAgICByZXRyaWV2ZWRVdkluZGV4LmNsYXNzTGlzdC5hZGQoXCJ1di1pbmRleC15ZWxsb3dcIik7XHJcbiAgfSBlbHNlIGlmICh1dkluZGV4IDw9IDcpIHtcclxuICAgIHJldHJpZXZlZFV2SW5kZXguY2xhc3NMaXN0LmFkZChcInV2LWluZGV4LW9yYW5nZVwiKTtcclxuICB9IGVsc2UgaWYgKHV2SW5kZXggPD0gMTApIHtcclxuICAgIHJldHJpZXZlZFV2SW5kZXguY2xhc3NMaXN0LmFkZChcInV2LWluZGV4LXJlZFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0cmlldmVkVXZJbmRleC5jbGFzc0xpc3QuYWRkKFwidXYtaW5kZXgtcHVycGxlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRlbXBNZXRyaWNzKCkge1xyXG4gIGlzQ2Vsc2l1cyA9ICFpc0NlbHNpdXM7XHJcbiAgc3dpdGNoVGVtcE1ldHJpY3NCdXR0b24udGV4dENvbnRlbnQgPSBpc0NlbHNpdXNcclxuICAgID8gXCJTd2l0Y2ggdG8gwrBGLCBtcGhcIlxyXG4gICAgOiBcIlN3aXRjaCB0byDCsEMsIGttL2hcIjtcclxuICB1cGRhdGVEYXRhRGlzcGxheSgpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyByZXRyaWV2ZURhdGEgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgaGFuZGxlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xyXG5cclxuaGFuZGxlRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICByZXRyaWV2ZURhdGEoXCJSdXNlXCIpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9