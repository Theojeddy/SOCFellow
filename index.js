// Ticket 1: Selecting DOM Elements

// 1a: getElementById()
const titleElement = document.getElementById("title");
console.log(titleElement);

// 1b: getElementsByClassName()
const contentElements = document.getElementsByClassName("content");
console.log(contentElements);

// 1c: getElementsByTagName()
const liElements = document.getElementsByTagName("li");
console.log(liElements);

// 1d: querySelector()
const firstHighlightElement = document.querySelector(".highlight");
console.log(firstHighlightElement);

// 1e: querySelectorAll()
const highlightElements = document.querySelectorAll(".highlight");
console.log(highlightElements);

// Ticket 2: Traversing the DOM

// 2a: Parent Node
const firstLiElement = document.querySelector("#itemList li");
const parentUlElement = firstLiElement.parentNode;
console.log(parentUlElement);

// 2b: Child Nodes
const ulElement = document.getElementById("itemList");
const ulChildNodes = ulElement.childNodes;
console.log(ulChildNodes);

// 2c: Element Children
const ulChildren = ulElement.children;
console.log(ulChildren);

// 2d: First and Last Child
const firstChildNode = ulElement.firstChild;
const lastChildNode = ulElement.lastChild;
console.log(firstChildNode);
console.log(lastChildNode);

// 2e: Sibling Nodes
const cherryElement = document.querySelector("#itemList li:nth-child(3)");
const previousSibling = cherryElement.previousSibling;
const nextSibling = cherryElement.nextSibling;
console.log(previousSibling);
console.log(nextSibling);

// Ticket 3: Manipulating the DOM

// 3a: Styling Elements
titleElement.style.color = "red";
titleElement.style.fontSize = "30px";

// 3b: Creating and Adding Elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically added paragraph.";
document.body.appendChild(newParagraph);

// 3c: Modifying Text
const firstContentParagraph = document.querySelector(".content");
firstContentParagraph.textContent = "This paragraph has been updated.";

// 3d: Modifying Attributes
const secondContentParagraph = document.querySelectorAll(".content")[1];
secondContentParagraph.setAttribute("title", "Hover over me!");

// 3e: Adding and Removing Classes
ulElement.classList.add("styled-list");
const bananaElement = ulElement.children[1];
bananaElement.classList.remove("list-item");

// 3f: Removing Elements
const dateElement = ulElement.children[3];
dateElement.remove();
