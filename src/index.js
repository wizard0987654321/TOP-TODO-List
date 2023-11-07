import displayItem from "./newItem.js";
import removeElements from "./clearDiv.js"

let projectName = prompt("Give new array Name");
projectName = [];

document.addEventListener('DOMContentLoaded', function() {

const button = document.querySelector("button");

button.onclick = main;

});

function main() {

    // Storing div, which displays array items
    const listItems = document.getElementById("items");

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

    projectName.push(example);

    // Removing the existing list items and displaying the whole array again
    removeElements(listItems);

    for (const project of projectName) {
        displayItem(project);
    }

    console.log(projectName);

}

