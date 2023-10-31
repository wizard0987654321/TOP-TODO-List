document.addEventListener('DOMContentLoaded', function() {

const button = document.querySelector("button");

button.onclick = main;

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

    console.log(example);

    let projectName = prompt("Give new array Name");
    projectName = [];
    projectName.push(example);

    console.log(projectName);

}