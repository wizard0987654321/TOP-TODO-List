import { format } from 'date-fns';

// Creating new note DOM element and displaying it
export default function displayItem(item, allNotes, currentNotes) {

    const webpage = document.getElementById("items");

    const newItem = document.createElement("div");
    const itemButton = document.createElement("button");
    const itemTitle = document.createElement("h4");
    const itemDescription = document.createElement("p");
    const itemDueDate = document.createElement("p");
    const itemPriority = document.createElement("p");
    const editButton = document.createElement("button");

    newItem.classList.add("item");
    itemDescription.classList.add("description");
    itemDueDate.classList.add("date");
    itemPriority.classList.add("priority")
    itemButton.classList.add("delete");
    itemButton.textContent = "Delete";
    itemTitle.textContent = item.title;
    itemDescription.textContent = item.description;
    itemDueDate.textContent = item.dueDate;
    if (item.priority == "HIGH") {
        itemPriority.style.color = "red";
        itemPriority.textContent = "URGENT";
    } else if (item.priority == "AVERAGE") {
        itemPriority.style.color = "rgb(148, 143, 3)";
        itemPriority.textContent = "Important";
    } else {
        itemPriority.style.color = "green";
        itemPriority.textContent = "Can do later";
    }
    editButton.textContent = "Edit";
    

    newItem.append(itemTitle, itemDescription, itemDueDate, itemPriority, editButton, itemButton);

    webpage.appendChild(newItem);

    itemButton.onclick = function(e) {
        deleteNote(e, item, allNotes, currentNotes);
    }

    editButton.onclick = function(e) {
        editNote(e, item);
    }
}

// Creating the function, that takes care of "delete" button, that is property of each note
function deleteNote(e, noteName, allNotes, currentNotes) {
    
    // Loop through allNotes array
    const allNotesIndex = allNotes.indexOf(noteName);
    for (const index in allNotes) {
        if (allNotes[index] === noteName) {
            allNotes.splice(index, 1); 
            break; 
        }
    }

    // Loop through currentNotes array
    for (const index in currentNotes) {
        if (currentNotes[index] === noteName) {
            currentNotes.splice(index, 1); 
            break; 
        }
    }

    const deleteButton = e.target;
    const row = deleteButton.closest("div");
    row.remove();
}

// Creating function, that takes care of "edit" button
function editNote(e, item) {
    const currentNote = e.target.closest("div");
    const confirmEditButton = document.getElementById("editNoteButton");
    const editNoteDiv = document.querySelector(".editNoteDiv");
    editNoteDiv.style.display = "flex";

    document.getElementById("titleEditInput").value = item.title;
    document.getElementById("descriptionEditInput").value = item.description;
    document.getElementById("dueDateEditInput").value = item.dueDate;
    document.getElementById("priorityEdit").value = item.priority;

    confirmEditButton.onclick = function(e) {
        updateNote(e, currentNote, item);
    }
}

// Updating the note display, the DOM element
function updateNote(e, currentNote, item) {
    e.preventDefault();

    const thisTitle = currentNote.querySelector("h4");
    const thisDescription = currentNote.querySelector("p.description");
    const thisDueDate = currentNote.querySelector("p.date");
    const thisPriority = currentNote.querySelector("p.priority");

    thisTitle.textContent = document.getElementById("titleEditInput").value;
    item.title = document.getElementById("titleEditInput").value

    thisDescription.textContent = document.getElementById("descriptionEditInput").value;
    item.description = document.getElementById("descriptionEditInput").value;

    const unformatedDueDate = document.getElementById("dueDateEditInput").value;
    if(!unformatedDueDate) {
        alert("Please Choose a Date!");
        return;
    } else {
        thisDueDate.textContent = format(new Date(unformatedDueDate), 'dd-MM-yyyy');
        item.dueDate = format(new Date(unformatedDueDate), 'dd-MM-yyyy');
    }
    

    if (document.getElementById("priorityEdit").value == "HIGH") {
        thisPriority.style.color = "red";
        thisPriority.textContent = "URGENT";
        item.priority = "HIGH";
    } else if (document.getElementById("priorityEdit").value == "AVERAGE") {
        thisPriority.style.color = "rgb(148, 143, 3)";
        thisPriority.textContent = "Important";
        item.priority = "AVERAGE";
    } else {
        thisPriority.style.color = "green";
        thisPriority.textContent = "Can do later";
        item.priority = "LOW";
    }

    const editNoteDiv = document.querySelector(".editNoteDiv");
    editNoteDiv.style.display = "none";
}