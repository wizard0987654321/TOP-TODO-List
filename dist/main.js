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
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function() {\n\nconst button = document.querySelector(\"button\");\n\nbutton.onclick = main;\n\n});\n\nfunction main() {\n\n    const title = prompt(\"Name of the list item: \");\n    const description = prompt(\"describe\");\n    const dueDate = prompt(\"For when\");\n    const priority = prompt(\"How important\");\n\n\n    class Item {\n        constructor(title, description, dueDate, priority){\n            this.title = title\n            this.description = description\n            this.dueDate = dueDate\n            this.priority = priority\n        }\n    }\n\n    const example = new Item(title, description, dueDate, priority);\n\n    console.log(example);\n\n    let projectName = prompt(\"Give new array Name\");\n    projectName = [];\n    projectName.push(example);\n\n    console.log(projectName);\n\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;