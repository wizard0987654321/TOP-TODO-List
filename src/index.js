import displayItem from "./newItem.js"
import removeElements from "./clearDiv.js"
import { projectNow, addProject, setProjectNow } from "./addProject.js"
import showNoteDiv from "./showNote.js";
import { format } from 'date-fns';

// Create object, that stores project names as keys and arrays of notes in that project as values
let allProjects = { "All Notes": [] };

document.addEventListener('DOMContentLoaded', function() {


// Set current project to All Notes, so after reloading the page new note will be saved in all notes
setProjectNow();

// Getting DOM elements to use them later in the code
const listItems = document.getElementById("items");
const createNote = document.getElementById("newNote");
const addNote = document.getElementById("addNoteButton");
const projectsButton = document.getElementById("addProject");
let allNotesButton = document.querySelector("li.project");

// Displaying overlay window div after the click of "New Note" button
createNote.onclick = showNoteDiv;

// Project adding function, saving project as an array in allProjects object
projectsButton.onclick = function() {
    const name = prompt("Give project name");
    allProjects[name] = [];
    addProject(name, listItems, allProjects);
    console.log(allProjects);
}

// Opening the all Notes project
allNotesButton.onclick = function() {
    removeElements(listItems);
    setProjectNow();

    for (const item of allProjects["All Notes"]) {
        displayItem(item, allProjects["All Notes"], allProjects[projectNow]);
    }


    console.log(allNotesButton);
    }

    // Executing adding a new note, creating new note object and interacting with DOM elements
    addNote.onclick = function(event) {
        event.preventDefault();
        createNoteObj();
    };
});

function createNoteObj() {

    let dueDate = "";

    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    const unformatedDueDate = document.getElementById('dueDateInput').value;
    if(!unformatedDueDate) {
        alert("Please Choose a Date!");
        return;
    } else {
        dueDate = format(new Date(unformatedDueDate), 'dd-MM-yyyy');
    }
    const priority = document.getElementById('priority').value;

    // Constructing new project Item class
    class Item {
        constructor(title, description, dueDate, priority){
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
        }
    }

    // Creating new Note as a class Item object
    const newNote = new Item(title, description, dueDate, priority);

    // Storing div, which displays array items
    const listItems = document.getElementById("items");

    /* If current project is all notes, saving new note only in all projects,
    if something else in both, all notes and current project*/

    if (projectNow != "All Notes") {
        allProjects[projectNow].push(newNote);
        allProjects["All Notes"].push(newNote);
    } else {
        allProjects["All Notes"].push(newNote);
    }
    
    // Removing the existing list items and displaying the whole array again
    removeElements(listItems);

    // Displaying the items of the current project
    for (const item of allProjects[projectNow]) {
        displayItem(item, allProjects["All Notes"], allProjects[projectNow]);
    }

    // Clearing input fields
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

