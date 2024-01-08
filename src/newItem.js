export default function displayItem(item, allNotes, currentNotes) {

    const webpage = document.getElementById("items");

    const newItem = document.createElement("div");
    const itemButton = document.createElement("button");
    const itemTitle = document.createElement("h4");
    const itemDescription = document.createElement("p");
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";

    newItem.classList.add("item");
    itemButton.classList.add("delete");
    itemButton.textContent = "Delete";
    itemTitle.textContent = item.title;
    itemDescription.textContent = item.description;

    newItem.append(itemTitle, itemDescription, dueDateInput, itemButton);

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