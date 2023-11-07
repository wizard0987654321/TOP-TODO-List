export default function displayItem(item) {

    const webpage = document.getElementById("items");

    const newItem = document.createElement("div");
    const itemButton = document.createElement("button");
    const itemTitle = document.createElement("h4");
    const itemDescription = document.createElement("p");

    newItem.classList.add("item");
    itemButton.textContent = "✔";
    itemTitle.textContent = item.title;
    itemDescription.textContent = item.description;

    newItem.append(itemButton, itemTitle, itemDescription);

    webpage.appendChild(newItem);
}