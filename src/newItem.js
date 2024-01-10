export default function displayItem(item, allNotes, currentNotes) {

    const webpage = document.getElementById("items");

    const newItem = document.createElement("div");
    const itemButton = document.createElement("button");
    const itemTitle = document.createElement("h4");
    const itemDescription = document.createElement("p");
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    const itemPriority = document.createElement("p");

    newItem.classList.add("item");
    itemButton.classList.add("delete");
    itemButton.textContent = "Delete";
    itemTitle.textContent = item.title;
    itemDescription.textContent = item.description;
    itemPriority.textContent = item.priority;
    if (item.priority == "HIGH") {
        itemPriority.style.color = "red";
    } else if (item.priority == "AVERAGE") {
        itemPriority.style.color = "rgb(148, 143, 3)";
    } else {
        itemPriority.style.color = "green";
    }
    

    newItem.append(itemTitle, itemDescription, dueDateInput, itemPriority, itemButton);

    webpage.appendChild(newItem);

    itemButton.onclick = function(e) {
        deleteNote(e, item, allNotes, currentNotes);
    }
}

function deleteNote(e, noteName, allNotes, currentNotes) {
    
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