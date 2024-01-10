import displayItem from "./newItem.js"
import removeElements from "./clearDiv.js"
import { projectNow, addProject, setProjectNow } from "./addProject.js"
import showNoteDiv from "./showNote.js";

let allProjects = { "All Notes": [] };


document.addEventListener('DOMContentLoaded', function() {

// Set current project to All Notes, so after reloading the page new note will be saved in all notes
setProjectNow();

// Storing div, which displays array items
const listItems = document.getElementById("items");
const createNote = document.getElementById("newNote");
const addNote = document.getElementById("addNoteButton");
const projectsButton = document.getElementById("addProject");

let allNotesButton = document.querySelector("li.project");

createNote.onclick = showNoteDiv;

projectsButton.onclick = function() {
    const name = prompt("Give project name");
    allProjects[name] = [];
    addProject(name, listItems, allProjects);
    console.log(allProjects);
}

allNotesButton.onclick = function() {
    removeElements(listItems);
    setProjectNow();

    for (const item of allProjects["All Notes"]) {
        displayItem(item, allProjects["All Notes"], allProjects[projectNow]);
    }


    console.log(allNotesButton);
    }

    addNote.onclick = function(event) {
        event.preventDefault();
        createNoteObj();
    };
});

function createNoteObj() {
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    const dueDate = document.getElementById('dueDateInput').value;
    const priority = document.getElementById('priority').value;



    class Item {
        constructor(title, description, dueDate, priority){
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
        }
    }

    const newNote = new Item(title, description, dueDate, priority);

    // Storing div, which displays array items
    const listItems = document.getElementById("items");

    if (projectNow != "All Notes") {
        allProjects[projectNow].push(newNote);
        allProjects["All Notes"].push(newNote);
    } else {
        allProjects["All Notes"].push(newNote);
    }
    
    // Removing the existing list items and displaying the whole array again
    removeElements(listItems);

    for (const item of allProjects[projectNow]) {
        displayItem(item, allProjects["All Notes"], allProjects[projectNow]);
    }

    clearInputFields();

    const noteDiv = document.querySelector(".noteDiv");
    noteDiv.style.display = "none";

    console.log(allProjects["All Notes"]);
}

function clearInputFields() {
    const fields = document.querySelectorAll("input");
    for(const field of fields) {
        field.value = "";
    }
}