// 1. Write basic JavaScript functions.

// Function to change the text content of an element
function changeParagraphText() {
    // 2. Manipulate the DOM dynamically.
    // Get the paragraph element by its ID
    const paragraph = document.getElementById('myParagraph');

    // Change its text content
    if (paragraph) {
        paragraph.textContent = 'The text has been changed by JavaScript!';
    }
}

// Function to modify CSS styles of an element
function changeDivStyle() {
    // 2. Manipulate the DOM dynamically.
    // Get the div element by its ID
    const styledDiv = document.getElementById('styledDiv');

    // Modify its CSS styles
    if (styledDiv) {
        styledDiv.style.backgroundColor = 'lightcoral';
        styledDiv.style.color = '#fff';
        styledDiv.style.fontWeight = 'bold';
        styledDiv.style.borderColor = 'darkred';
    }
}

// Function to add a new element
function addParagraph() {
    // Get the parent element
    const parentElement = document.getElementById('parentElement');

    // Create a new paragraph element
    const newParagraph = document.createElement('p');

    // Set the text content for the new paragraph
    newParagraph.textContent = 'This is a new paragraph added by JavaScript.';

    // Add a class for potential styling (optional)
    newParagraph.classList.add('added-paragraph');

    // Append the new paragraph to the parent element
    if (parentElement) {
        parentElement.appendChild(newParagraph);
    }
}

// Function to remove the last paragraph
function removeLastParagraph() {
    // Get the parent element
    const parentElement = document.getElementById('parentElement');

    // Get all paragraph elements within the parent
    const paragraphs = parentElement.querySelectorAll('p');

    // Check if there are paragraphs to remove
    if (paragraphs.length > 0) {
        // Get the last paragraph
        const lastParagraph = paragraphs[paragraphs.length - 1];

        // Remove the last paragraph
        parentElement.removeChild(lastParagraph);
    } else {
        alert("No paragraphs left to remove!");
    }
}

// 3. Respond to user interactions.

// Get button elements by their IDs
const changeTextBtn = document.getElementById('changeTextBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');
const removeElementBtn = document.getElementById('removeElementBtn');

// Add event listeners to the buttons
if (changeTextBtn) {
    changeTextBtn.addEventListener('click', changeParagraphText);
}

if (changeStyleBtn) {
    changeStyleBtn.addEventListener('click', changeDivStyle);
}

if (addElementBtn) {
    addElementBtn.addEventListener('click', addParagraph);
}

if (removeElementBtn) {
    removeElementBtn.addEventListener('click', removeLastParagraph);
}
