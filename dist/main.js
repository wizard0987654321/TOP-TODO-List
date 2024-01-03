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

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _clearDiv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearDiv.js */ \"./src/clearDiv.js\");\n/* harmony import */ var _newItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newItem.js */ \"./src/newItem.js\");\n\n\n\nfunction addProject(project, notes, projects) {\n    \n    const projectList = document.getElementById(\"projects\");\n    const newProject = document.createElement(\"li\");\n    newProject.classList.add(\"project\");\n    newProject.textContent = project;\n    projectList.appendChild(newProject);\n    newProject.onclick = function() {\n        openProject(newProject, notes, projects);  \n    }\n\n    console.log(project);\n}\n\nfunction openProject(project, notes, allProjects) {\n    (0,_clearDiv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(notes);\n    let currentProject = project.textContent;\n    for (const note of allProjects[currentProject]) {\n        (0,_newItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(note);\n    }\n\n    console.log(allProjects[currentProject]);\n    console.log(project);\n}\n\n//# sourceURL=webpack:///./src/addProject.js?");

/***/ }),

/***/ "./src/clearDiv.js":
/*!*************************!*\
  !*** ./src/clearDiv.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeElements)\n/* harmony export */ });\nfunction removeElements(currentPage) {\n  while (currentPage.firstChild) {\n        currentPage.removeChild(currentPage.firstChild);\n    }\n}\n\n//# sourceURL=webpack:///./src/clearDiv.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItem.js */ \"./src/newItem.js\");\n/* harmony import */ var _clearDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearDiv.js */ \"./src/clearDiv.js\");\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\n\n\n\n\nlet allItems = [];\nlet allProjects = {};\n\ndocument.addEventListener('DOMContentLoaded', function() {\n\n// Storing div, which displays array items\nconst listItems = document.getElementById(\"items\");\n\nconst addNote = document.getElementById(\"newNote\");\n\nconst projectsButton = document.getElementById(\"addProject\");\n\nlet allNotes = document.querySelector(\"li.project\");\n\naddNote.onclick = main;\n\nprojectsButton.onclick = function() {\n    const name = prompt(\"Give project name\");\n    allProjects[name] = [];\n    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(name, listItems, allProjects);\n    console.log(allProjects);\n}\n\nallNotes.onclick = function() {\n    console.log(allNotes);\n    }\n\n});\n\nfunction main() {\n\n    const title = prompt(\"Name of the list item: \");\n    const description = prompt(\"describe\");\n    const dueDate = prompt(\"For when\");\n    const priority = prompt(\"How important\");\n\n\n    class Item {\n        constructor(title, description, dueDate, priority){\n            this.title = title\n            this.description = description\n            this.dueDate = dueDate\n            this.priority = priority\n        }\n    }\n\n    const example = new Item(title, description, dueDate, priority);\n\n    // Storing div, which displays array items\n    const listItems = document.getElementById(\"items\");\n\n    allItems.push(example);\n    \n    // Removing the existing list items and displaying the whole array again\n    (0,_clearDiv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listItems);\n\n    for (const item of allItems) {\n        (0,_newItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\n    }\n\n    console.log(allItems);\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/newItem.js":
/*!************************!*\
  !*** ./src/newItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayItem)\n/* harmony export */ });\nfunction displayItem(item) {\n\n    const webpage = document.getElementById(\"items\");\n\n    const newItem = document.createElement(\"div\");\n    const itemButton = document.createElement(\"button\");\n    const itemTitle = document.createElement(\"h4\");\n    const itemDescription = document.createElement(\"p\");\n\n    newItem.classList.add(\"item\");\n    itemButton.classList.add(\"delete\");\n    itemButton.textContent = \"✔\";\n    itemTitle.textContent = item.title;\n    itemDescription.textContent = item.description;\n\n    newItem.append(itemButton, itemTitle, itemDescription);\n\n    webpage.appendChild(newItem);\n}\n\n//# sourceURL=webpack:///./src/newItem.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;