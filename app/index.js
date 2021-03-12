/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vars_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars.scss */ \"./src/_vars.scss\");\n/* harmony import */ var _vars_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vars_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.png */ \"./src/icon.png\");\n\n\n\n\nfunction component() {\n  var element = document.createElement('div'); // Add the image to our existing div.\n\n  var myIcon = new Image();\n  myIcon.src = _icon_png__WEBPACK_IMPORTED_MODULE_2__;\n  element.appendChild(myIcon);\n  return element;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://gamebbva/./src/index.js?");

/***/ }),

/***/ "./src/_vars.scss":
/*!************************!*\
  !*** ./src/_vars.scss ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/style-loader/dist/cjs.js):\\nValidationError: Invalid options object. Style Loader has been initialized using an options object that does not match the API schema.\\n - options has an unknown property 'url'. These properties are valid:\\n   object { injectType?, attributes?, insert?, base?, esModule?, modules? }\\n    at validate (/Users/user/Projects/kiniu.network/GameBBVA/node_modules/style-loader/node_modules/schema-utils/dist/validate.js:104:11)\\n    at Object.loader (/Users/user/Projects/kiniu.network/GameBBVA/node_modules/style-loader/dist/index.js:25:29)\");\n\n//# sourceURL=webpack://gamebbva/./src/_vars.scss?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/style-loader/dist/cjs.js):\\nValidationError: Invalid options object. Style Loader has been initialized using an options object that does not match the API schema.\\n - options has an unknown property 'url'. These properties are valid:\\n   object { injectType?, attributes?, insert?, base?, esModule?, modules? }\\n    at validate (/Users/user/Projects/kiniu.network/GameBBVA/node_modules/style-loader/node_modules/schema-utils/dist/validate.js:104:11)\\n    at Object.loader (/Users/user/Projects/kiniu.network/GameBBVA/node_modules/style-loader/dist/index.js:25:29)\");\n\n//# sourceURL=webpack://gamebbva/./src/main.scss?");

/***/ }),

/***/ "./src/icon.png":
/*!**********************!*\
  !*** ./src/icon.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e44214bb899c8d1d5b95.png\";\n\n//# sourceURL=webpack://gamebbva/./src/icon.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;