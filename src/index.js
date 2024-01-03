import displayItem from "./newItem.js"
import removeElements from "./clearDiv.js"
import addProject from "./addProject.js"

let allItems = [];
let allProjects = {};

document.addEventListener('DOMContentLoaded', function() {

// Storing div, which displays array items
const listItems = document.getElementById("items");

const addNote = document.getElementById("newNote");

const projectsButton = document.getElementById("addProject");

let allNotes = document.querySelector("li.project");

addNote.onclick = main;

projectsButton.onclick = function() {
    const name = prompt("Give project name");
    allProjects[name] = [];
    addProject(name, listItems, allProjects);
    console.log(allProjects);
}

allNotes.onclick = function() {
    console.log(allNotes);
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

    const example = new Item(title, description, dueDate, priority);

    // Storing div, which displays array items
    const listItems = document.getElementById("items");

    allItems.push(example);
    
    // Removing the existing list items and displaying the whole array again
    removeElements(listItems);

    for (const item of allItems) {
        displayItem(item);
    }

    console.log(allItems);
}

