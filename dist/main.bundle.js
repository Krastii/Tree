/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\r\nvar tree = [];\r\ntree.push(_settings__WEBPACK_IMPORTED_MODULE_0__.A); //задаем первое значение для массива\r\nvar angleRotation = 45; //задаем угол\r\nvar calculation_Сoordinat_Line = function (start, angel, length) {\r\n    if (angel === void 0) { angel = 0; }\r\n    if (length === void 0) { length = 10; }\r\n    var radians = (angel * Math.PI) / 180; // перевод градусов в радианы\r\n    var end = {\r\n        x: start.x + length * Math.sin(radians),\r\n        y: start.y - length * Math.cos(radians),\r\n    };\r\n    return [start, end];\r\n};\r\nvar paintLine = function (start, end) {\r\n    if (!_settings__WEBPACK_IMPORTED_MODULE_0__.ctx)\r\n        throw new Error(\"Failed to find a canvas element.\");\r\n    _settings__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath(); // Начинает новый путь\r\n    _settings__WEBPACK_IMPORTED_MODULE_0__.ctx.moveTo(start.x, start.y); // Передвигает перо в точку\r\n    _settings__WEBPACK_IMPORTED_MODULE_0__.ctx.lineTo(end.x, end.y); // Рисует линию до точки\r\n    _settings__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();\r\n};\r\nfor (var i = 0; i < _settings__WEBPACK_IMPORTED_MODULE_0__.iter; i++) {\r\n    //создания массива с деталями прорисовки дерева\r\n    var tempArray = [];\r\n    for (var y = 0; y < tree.length; y++) {\r\n        if (tree[y] === _settings__WEBPACK_IMPORTED_MODULE_0__.B) {\r\n            tempArray.push(_settings__WEBPACK_IMPORTED_MODULE_0__.C, _settings__WEBPACK_IMPORTED_MODULE_0__.C, _settings__WEBPACK_IMPORTED_MODULE_0__.C, _settings__WEBPACK_IMPORTED_MODULE_0__.B);\r\n        }\r\n        else if (tree[y] === _settings__WEBPACK_IMPORTED_MODULE_0__.A) {\r\n            tempArray.push(_settings__WEBPACK_IMPORTED_MODULE_0__.B, _settings__WEBPACK_IMPORTED_MODULE_0__.turnLeft, _settings__WEBPACK_IMPORTED_MODULE_0__.A, _settings__WEBPACK_IMPORTED_MODULE_0__.turnRight, _settings__WEBPACK_IMPORTED_MODULE_0__.A);\r\n        }\r\n        else {\r\n            tempArray.push(tree[y]);\r\n        }\r\n    }\r\n    tree = tempArray.slice();\r\n}\r\nvar frame = function () {\r\n    //прорисовка\r\n    var savePoint = [];\r\n    var saveAngel = [];\r\n    var nowPoint = _settings__WEBPACK_IMPORTED_MODULE_0__.startPoint; //сохранение текущего положения\r\n    var nowAngel = 0;\r\n    for (var i = 0; i < tree.length; i++) {\r\n        //проходимся по массиву и в зависимости от значения рисуем\r\n        var coordinate = void 0;\r\n        switch (tree[i]) {\r\n            case 0:\r\n            case 2:\r\n            case 1:\r\n                coordinate = calculation_Сoordinat_Line(nowPoint, nowAngel);\r\n                paintLine(coordinate[0], coordinate[1]);\r\n                nowPoint = coordinate[1];\r\n                break;\r\n            case \"[\":\r\n                savePoint.push(nowPoint);\r\n                saveAngel.push(nowAngel);\r\n                nowAngel -= angleRotation;\r\n                break;\r\n            case \"]\":\r\n                nowPoint = savePoint[savePoint.length - 1];\r\n                savePoint.pop();\r\n                nowAngel = saveAngel[saveAngel.length - 1] + angleRotation;\r\n                saveAngel.pop();\r\n                break;\r\n        }\r\n    }\r\n};\r\nframe();\r\n\n\n//# sourceURL=webpack://tree/./src/index.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ctx\": () => (/* binding */ ctx),\n/* harmony export */   \"A\": () => (/* binding */ A),\n/* harmony export */   \"B\": () => (/* binding */ B),\n/* harmony export */   \"C\": () => (/* binding */ C),\n/* harmony export */   \"iter\": () => (/* binding */ iter),\n/* harmony export */   \"startPoint\": () => (/* binding */ startPoint),\n/* harmony export */   \"turnLeft\": () => (/* binding */ turnLeft),\n/* harmony export */   \"turnRight\": () => (/* binding */ turnRight)\n/* harmony export */ });\nvar canvas = document.querySelector(\"canvas\");\r\nif (!canvas)\r\n    throw new Error(\"Failed to find a canvas element.\");\r\nvar ctx = canvas.getContext(\"2d\");\r\nif (!ctx)\r\n    throw new Error(\"Failed to find a canvas element.\");\r\nvar width = (canvas.width = window.innerWidth);\r\nvar height = (canvas.height = window.innerHeight);\r\nvar A = 0;\r\nvar B = 1;\r\nvar C = 2;\r\nvar turnLeft = \"[\";\r\nvar turnRight = \"]\";\r\nvar iter = 8;\r\nvar startPoint = {\r\n    x: width / 2,\r\n    y: height,\r\n};\r\n\r\n\n\n//# sourceURL=webpack://tree/./src/settings.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;