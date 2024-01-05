export default function displayItem(item, allNotes, currentNotes) {

    const webpage = document.getElementById("items");

    const newItem = document.createElement("div");
    const itemButton = document.createElement("button");
    const itemTitle = document.createElement("h4");
    const itemDescription = document.createElement("p");

    newItem.classList.add("item");
    itemButton.classList.add("delete");
    itemButton.textContent = "Delete";
    itemTitle.textContent = item.title;
    itemDescription.textContent = item.description;

    newItem.append(itemButton, itemTitle, itemDescription);

    webpage.appendChild(newItem);

    itemButton.onclick = function(e) {
        deleteNote(e, item, allNotes, currentNotes);
    }
}

function deleteNote(e, noteName, allNotes, currentNotes) {
    
    const allNotesIndex = allNotes.indexOf(noteName);
    if (allNotesIndex !== -1) {
        allNotes.splice(allNotesIndex, 1); // Remove matching noteName from allNotes
    }

    const currentNotesIndex = currentNotes.indexOf(noteName);
    if (currentNotesIndex !== -1) {
        currentNotes.splice(currentNotesIndex, 1); // Remove matching noteName from currentNotes
    }

    const deleteButton = e.target;
    const row = deleteButton.closest("div");
    row.remove();
}