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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addTask */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_UI_addBoxCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI/addBoxCreator */ \"./src/modules/UI/addBoxCreator.js\");\n/* harmony import */ var _modules_UI_eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI/eventListeners */ \"./src/modules/UI/eventListeners.js\");\n\n\n\n\nconst taskList = []\n\n// UI functions\n;(0,_modules_UI_addBoxCreator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n// Variables\n\nconst openAddTaskButton = document.getElementById(\"open-add-task\")\nconst overlay = document.querySelector(\".overlay\")\nconst addTaskButton = document.getElementById(\"add-task-button\")\nconst titleInput = document.getElementById(\"title-input\")\nconst dueDateInput = document.getElementById(\"due-date-input\")\n\n// Event Listeners\nopenAddTaskButton.addEventListener(\"click\", _modules_UI_eventListeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\noverlay.addEventListener(\"click\", _modules_UI_eventListeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\naddTaskButton.addEventListener(\"click\", () => {\n  taskList.push((0,_modules_addTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(titleInput, dueDateInput))\n  console.log(taskList)\n})\n\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/modules/UI/addBoxCreator.js":
/*!*****************************************!*\
  !*** ./src/modules/UI/addBoxCreator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addUIBox)\n/* harmony export */ });\nfunction addUIBox() {\n  const body = document.body\n  const overlay = document.createElement(\"div\")\n  overlay.classList.add(\"overlay\")\n  overlay.classList.add(\"hidden\")\n  body.appendChild(overlay)\n\n  const addTaskBox = document.createElement(\"div\")\n  addTaskBox.classList.add(\"add-task-form\")\n  addTaskBox.innerHTML = `\n      <form id=\"form\" class=\"hidden\" action=\"#\">\n        <div>\n          <label for=\"title-input\">Title</label>\n          <input type=\"text\" id=\"title-input\">\n        </div>\n        <div>\n          <label for=\"due-date-input\">Date</label>\n          <input type=\"date\" id=\"due-date-input\">\n        </div>\n        <button id=\"add-task-button\" type=\"reset\">Add todo</button>\n      </form>\n\n`\n  addTaskBox.classList.add(\"hidden\")\n  body.appendChild(addTaskBox)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI/addBoxCreator.js?");

/***/ }),

/***/ "./src/modules/UI/eventListeners.js":
/*!******************************************!*\
  !*** ./src/modules/UI/eventListeners.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleHidden)\n/* harmony export */ });\nfunction toggleHidden() {\n  const overlay = document.querySelector(\".overlay\")\n  const taskForm = document.querySelector(\".add-task-form\")\n  const form = document.getElementById(\"form\")\n  overlay.classList.toggle(\"hidden\")\n  taskForm.classList.toggle(\"hidden\")\n  form.classList.toggle(\"hidden\")\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI/eventListeners.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTaskReader)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\nfunction getDateFormat(dueDate) {\n  const year = dueDate.split(\"-\")[0]\n  const month = dueDate.split(\"-\")[1]\n  const day = dueDate.split(\"-\")[2]\n  return `${day}/${month}/${year}`\n}\n\nfunction addTaskReader(titleInput, dueDateInput) {\n  const title = titleInput.value\n  const dueDate = getDateFormat(dueDateInput.value)\n  return new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, dueDate)\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, dueDate = none) {\n    this.title = title\n    this.dueDate = dueDate\n  }\n\n  getTitle() {\n    return this.title\n  }\n  setTitle(title) {\n    this.title = title\n  }\n\n  getDate() {\n    return this.dueDate\n  }\n  setDate(dueDate) {\n    this.date = dueDate\n  }\n  getDateUSFormat() {\n    const day = this.dueDate.split(\"/\")[0]\n    const month = this.dueDate.split(\"/\")[1]\n    const year = this.dueDate.split(\"/\")[2]\n    return `${month}/${day}/${year}`\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;