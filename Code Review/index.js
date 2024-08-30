// Ticket 1a: getElementById()
// Select the element with the id of "title" and log it to the console.
const title = document.getElementById("title");
console.log(title); // Expected outcome: <h1> element with content "Intro to the DOM"

// Ticket 1b: getElementsByClassName()
// Select all elements with the class "content" and log them to the console.
const content = document.getElementsByClassName("content");
console.log(content); // Expected outcome: Collection of <p> elements with class "content"

// Ticket 1c: getElementsByTagName()
// Select all <li> elements and log them to the console.
const list = document.getElementsByTagName("li");
console.log(list); // Expected outcome: Collection of <li> elements

// Ticket 1d: querySelector()
// Select the first element with the class "highlight" and log it to the console.
const highlight = document.querySelector(".highlight");
console.log(highlight); // Expected outcome: First <p> element with class "highlight"

// Ticket 1e: querySelectorAll()
// Select all elements with the class "highlight" and log them to the console.
const highlightAll = document.querySelectorAll(".highlight");
console.log(highlightAll); // Expected outcome: Collection of elements with class "highlight"

// Ticket 2a: Parent Node
// Select the first <li> inside the <ul> with id "itemList" and log its parent node.
const listItem = document.querySelector("#itemList li");
console.log(listItem.parentNode); // Expected outcome: <ul> element with id "itemList"

// Ticket 2b: Child Nodes
// Get all child nodes of the <ul> element with id "itemList" and log them to the console.
const itemList = document.getElementById("itemList");
const childNodes = itemList.childNodes;
console.log(childNodes); // Expected outcome: Collection of all child nodes including text nodes

// Ticket 2c: Element Children
// Get all element children of the <ul> element and log them to the console.
const children = itemList.children;
console.log(children); // Expected outcome: HTMLCollection of <li> elements

// Ticket 2d: First and Last Child
// Get the first and last child elements of the <ul> element and log them to the console.
const firstChild = itemList.firstElementChild;
const lastChild = itemList.lastElementChild;
console.log(firstChild); // Expected outcome: First <li> element
console.log(lastChild); // Expected outcome: Last <li> element

// Ticket 2e: Sibling Nodes
// Find the "🍒 Cherry" <li> element and log its previous and next siblings.
const cherry = itemList.querySelector(".highlight"); // First element with class "highlight"
console.log(cherry.previousElementSibling); // Expected outcome: <li> element "🍌 Banana"
console.log(cherry.nextElementSibling); // Expected outcome: <li> element "🍇 Date"

// Find Cherry and sibling elements dynamically
const liElements2 = document.querySelectorAll("li");
let nextSib;
let prevSib;
// Function to check if element is Cherry and get siblings
const findCherry = (element) => {
  if (element.innerHTML === "🍒 Cherry") {
    nextSib = element.nextElementSibling;
    prevSib = element.previousElementSibling;
  }
};
liElements2.forEach(findCherry);
console.log("Option 2 - dynamically", nextSib); // Expected outcome: <li> element "🍇 Date"
console.log("Option 2 - dynamically", prevSib); // Expected outcome: <li> element "🍌 Banana"

// Ticket 3a: Styling Elements
// Change the text color and font size of the <h1> element with id "title".
const h1Title = document.getElementById("title");
h1Title.style.color = "red";
h1Title.style.fontSize = "30px";

// Ticket 3b: Creating and Adding Elements
// Create a new <p> element, set its text content, and append it to the body.
const newPara = document.createElement("p");
const newText = document.createTextNode(
  "This is a dynamically added paragraph."
);
newPara.appendChild(newText);
document.body.appendChild(newPara); // New paragraph is added to the bottom of the body

// Ticket 3c: Modifying Text
// Update the text content of the first <p> element with the class "content".
const firstPara = document.querySelector(".content");
firstPara.textContent = "This paragraph has been updated using js.";

// Ticket 3d: Modifying Attributes
// Add a title attribute to the second <p> element with the class "content".
const hover = document.querySelectorAll(".content")[1];
hover.title = "hover over me"; // Tooltip appears when hovering over the paragraph

// Ticket 3e: Adding and Removing Classes
// Add the class "styled-list" to the <ul> element and remove "list-item" class from the "Banana" <li>.
itemList.classList.add("styled-list");
const banana = children[1];
banana.classList.remove("list-item"); // Removes "list-item" class from the Banana list item

// Ticket 3f: Removing Elements
// Remove the <li> element with the content "🍇 Date".
const liElements = document.querySelectorAll("li");
const removeElementIfDate = (element) => {
  if (element.innerHTML === "🍇 Date") {
    element.remove(); // Removes the <li> element with "🍇 Date"
  }
};
liElements.forEach(removeElementIfDate);
