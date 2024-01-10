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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   projectNow: () => (/* binding */ projectNow),\n/* harmony export */   setProjectNow: () => (/* binding */ setProjectNow)\n/* harmony export */ });\n/* harmony import */ var _clearDiv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearDiv.js */ \"./src/clearDiv.js\");\n/* harmony import */ var _newItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newItem.js */ \"./src/newItem.js\");\n\n\n\nlet projectNow;\n\n\n\nfunction addProject(project, notes, projects) {\n    \n    const projectList = document.getElementById(\"projects\");\n    const newProject = document.createElement(\"li\");\n    newProject.classList.add(\"project\");\n    newProject.textContent = project;\n    projectList.appendChild(newProject);\n    newProject.onclick = function() {\n        openProject(newProject, notes, projects);  \n        projectNow = project;\n    }\n    console.log(project);\n}\n\nfunction openProject(project, notes, allProjects) {\n    (0,_clearDiv_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(notes);\n    let currentProject = project.textContent;\n    for (const note of allProjects[currentProject]) {\n        (0,_newItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(note, allProjects[\"All Notes\"], allProjects[currentProject]);\n    }\n\n    console.log(allProjects[currentProject]);\n    console.log(project);\n}\n\nfunction setProjectNow() {\n    projectNow = \"All Notes\";\n}\n\n//# sourceURL=webpack:///./src/addProject.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItem.js */ \"./src/newItem.js\");\n/* harmony import */ var _clearDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearDiv.js */ \"./src/clearDiv.js\");\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\n/* harmony import */ var _showNote_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showNote.js */ \"./src/showNote.js\");\n\n\n\n\n\nlet allProjects = { \"All Notes\": [] };\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n\n// Set current project to All Notes, so after reloading the page new note will be saved in all notes\n(0,_addProject_js__WEBPACK_IMPORTED_MODULE_2__.setProjectNow)();\n\n// Storing div, which displays array items\nconst listItems = document.getElementById(\"items\");\nconst createNote = document.getElementById(\"newNote\");\nconst addNote = document.getElementById(\"addNoteButton\");\nconst projectsButton = document.getElementById(\"addProject\");\n\nlet allNotesButton = document.querySelector(\"li.project\");\n\ncreateNote.onclick = _showNote_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\nprojectsButton.onclick = function() {\n    const name = prompt(\"Give project name\");\n    allProjects[name] = [];\n    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_2__.addProject)(name, listItems, allProjects);\n    console.log(allProjects);\n}\n\nallNotesButton.onclick = function() {\n    ;(0,_clearDiv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listItems);\n    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_2__.setProjectNow)();\n\n    for (const item of allProjects[\"All Notes\"]) {\n        (0,_newItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, allProjects[\"All Notes\"], allProjects[_addProject_js__WEBPACK_IMPORTED_MODULE_2__.projectNow]);\n    }\n\n\n    console.log(allNotesButton);\n    }\n\n    addNote.onclick = function(event) {\n        event.preventDefault();\n        createNoteObj();\n    };\n});\n\nfunction createNoteObj() {\n    const title = document.getElementById('titleInput').value;\n    const description = document.getElementById('descriptionInput').value;\n    const dueDate = document.getElementById('dueDateInput').value;\n    const priority = document.getElementById('priority').value;\n\n\n\n    class Item {\n        constructor(title, description, dueDate, priority){\n            this.title = title\n            this.description = description\n            this.dueDate = dueDate\n            this.priority = priority\n        }\n    }\n\n    const newNote = new Item(title, description, dueDate, priority);\n\n    // Storing div, which displays array items\n    const listItems = document.getElementById(\"items\");\n\n    if (_addProject_js__WEBPACK_IMPORTED_MODULE_2__.projectNow != \"All Notes\") {\n        allProjects[_addProject_js__WEBPACK_IMPORTED_MODULE_2__.projectNow].push(newNote);\n        allProjects[\"All Notes\"].push(newNote);\n    } else {\n        allProjects[\"All Notes\"].push(newNote);\n    }\n    \n    // Removing the existing list items and displaying the whole array again\n    (0,_clearDiv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listItems);\n\n    for (const item of allProjects[_addProject_js__WEBPACK_IMPORTED_MODULE_2__.projectNow]) {\n        (0,_newItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, allProjects[\"All Notes\"], allProjects[_addProject_js__WEBPACK_IMPORTED_MODULE_2__.projectNow]);\n    }\n\n    clearInputFields();\n\n    const noteDiv = document.querySelector(\".noteDiv\");\n    noteDiv.style.display = \"none\";\n\n    console.log(allProjects[\"All Notes\"]);\n}\n\nfunction clearInputFields() {\n    const fields = document.querySelectorAll(\"input\");\n    for(const field of fields) {\n        field.value = \"\";\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/newItem.js":
/*!************************!*\
  !*** ./src/newItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayItem)\n/* harmony export */ });\nfunction displayItem(item, allNotes, currentNotes) {\n\n    const webpage = document.getElementById(\"items\");\n\n    const newItem = document.createElement(\"div\");\n    const itemButton = document.createElement(\"button\");\n    const itemTitle = document.createElement(\"h4\");\n    const itemDescription = document.createElement(\"p\");\n    const dueDateInput = document.createElement(\"input\");\n    dueDateInput.type = \"date\";\n    const itemPriority = document.createElement(\"p\");\n    const editButton = document.createElement(\"button\");\n\n    newItem.classList.add(\"item\");\n    itemDescription.classList.add(\"description\");\n    itemPriority.classList.add(\"priority\")\n    itemButton.classList.add(\"delete\");\n    itemButton.textContent = \"Delete\";\n    itemTitle.textContent = item.title;\n    itemDescription.textContent = item.description;\n    if (item.priority == \"HIGH\") {\n        itemPriority.style.color = \"red\";\n        itemPriority.textContent = \"URGENT\";\n    } else if (item.priority == \"AVERAGE\") {\n        itemPriority.style.color = \"rgb(148, 143, 3)\";\n        itemPriority.textContent = \"Important\";\n    } else {\n        itemPriority.style.color = \"green\";\n        itemPriority.textContent = \"Can do later\";\n    }\n    editButton.textContent = \"Edit\";\n    \n\n    newItem.append(itemTitle, itemDescription, dueDateInput, itemPriority, editButton, itemButton);\n\n    webpage.appendChild(newItem);\n\n    itemButton.onclick = function(e) {\n        deleteNote(e, item, allNotes, currentNotes);\n    }\n\n    editButton.onclick = function(e) {\n        editNote(e, item);\n    }\n}\n\nfunction deleteNote(e, noteName, allNotes, currentNotes) {\n    \n    const allNotesIndex = allNotes.indexOf(noteName);\n    for (const index in allNotes) {\n        if (allNotes[index] === noteName) {\n            allNotes.splice(index, 1); \n            break; \n        }\n    }\n\n    // Loop through currentNotes array\n    for (const index in currentNotes) {\n        if (currentNotes[index] === noteName) {\n            currentNotes.splice(index, 1); \n            break; \n        }\n    }\n\n    const deleteButton = e.target;\n    const row = deleteButton.closest(\"div\");\n    row.remove();\n}\n\nfunction editNote(e, item) {\n    const currentNote = e.target.closest(\"div\");\n    const confirmEditButton = document.getElementById(\"editNoteButton\");\n    const editNoteDiv = document.querySelector(\".editNoteDiv\");\n    editNoteDiv.style.display = \"flex\";\n\n    document.getElementById(\"titleEditInput\").value = item.title;\n    document.getElementById(\"descriptionEditInput\").value = item.description;\n    document.getElementById(\"dueDateEditInput\").value = item.dueDate;\n    document.getElementById(\"priorityEdit\").value = item.priority;\n\n    confirmEditButton.onclick = function(e) {\n        updateNote(e, currentNote, item);\n    }\n}\n\nfunction updateNote(e, currentNote, item) {\n    e.preventDefault();\n\n    const thisTitle = currentNote.querySelector(\"h4\");\n    const thisDescription = currentNote.querySelector(\"p.description\");\n    const thisDueDate = currentNote.querySelector(\"input\");\n    const thisPriority = currentNote.querySelector(\"p.priority\");\n\n    thisTitle.textContent = document.getElementById(\"titleEditInput\").value;\n    item.title = document.getElementById(\"titleEditInput\").value\n\n    thisDescription.textContent = document.getElementById(\"descriptionEditInput\").value;\n    item.description = document.getElementById(\"descriptionEditInput\").value;\n\n    thisDueDate.value = document.getElementById(\"dueDateEditInput\").value;\n    item.dueDate = document.getElementById(\"dueDateEditInput\").value;\n\n    if (document.getElementById(\"priorityEdit\").value == \"HIGH\") {\n        thisPriority.style.color = \"red\";\n        thisPriority.textContent = \"URGENT\";\n        item.priority = \"URGENT\";\n    } else if (document.getElementById(\"priorityEdit\").value == \"AVERAGE\") {\n        thisPriority.style.color = \"rgb(148, 143, 3)\";\n        thisPriority.textContent = \"Important\";\n        item.priority = \"Important\";\n    } else {\n        thisPriority.style.color = \"green\";\n        thisPriority.textContent = \"Can do later\";\n        item.priority = \"Can do later\";\n    }\n\n    const editNoteDiv = document.querySelector(\".editNoteDiv\");\n    editNoteDiv.style.display = \"none\";\n}\n\n//# sourceURL=webpack:///./src/newItem.js?");

/***/ }),

/***/ "./src/showNote.js":
/*!*************************!*\
  !*** ./src/showNote.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showNoteDiv)\n/* harmony export */ });\nfunction showNoteDiv() {\n\n    const noteDiv = document.querySelector(\".noteDiv\");\n    noteDiv.style.display = \"flex\";\n\n}\n\n//# sourceURL=webpack:///./src/showNote.js?");

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