import displayItem from "./newItem.js"
import removeElements from "./clearDiv.js"
import { projectNow, addProject } from "./addProject.js"

let allProjects = { "allNotes": [] };

document.addEventListener('DOMContentLoaded', function() {

// Storing div, which displays array items
const listItems = document.getElementById("items");

const addNote = document.getElementById("newNote");

const projectsButton = document.getElementById("addProject");

let allNotesButton = document.querySelector("li.project");

addNote.onclick = main;

projectsButton.onclick = function() {
    const name = prompt("Give project name");
    allProjects[name] = [];
    addProject(name, listItems, allProjects);
    console.log(allProjects);
}

allNotesButton.onclick = function() {
    removeElements(listItems);

    for (const item of allProjects["allNotes"]) {
        displayItem(item, allProjects["allNotes"], allProjects[projectNow]);
    }


    console.log(allNotesButton);
    }

});

function main() {

    const title = prompt("Name of the list item: ");
    const description = prompt("describe");
    const dueDate = prompt("For when");
    const priority = prompt("How important");


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

    allProjects[projectNow].push(newNote);
    allProjects["allNotes"].push(newNote);
    
    // Removing the existing list items and displaying the whole array again
    removeElements(listItems);

    for (const item of allProjects[projectNow]) {
        displayItem(item, allProjects["allNotes"], allProjects[projectNow]);
    }

    console.log(allProjects["allNotes"]);
}

