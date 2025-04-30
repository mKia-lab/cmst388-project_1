document.addEventListener('DOMContentLoaded', () => {

    /* PART 1: INTRO TEXT
     --------------------------------------------------
     */
 
     // TODO: Declare variables for name, age, and isStudent setting values with your own name, age, and student status.
 
let name = "Mahlet"; 
let age = 21;        
let isStudent = true; 

// Function to display introduction
function introduction(name, age, isStudent) {
    let message = `Hello, my name is ${name}. I am ${age} years old and I am currently ${isStudent ? 'a student' : 'not a student'}.`;
    
    const messageDisplayArea = document.getElementById('intro'); // DO NOT CHANGE
    messageDisplayArea.innerHTML = message;
}
    // TODO: Check if isStudent is true or false and set text output to a new variable called studentStatus
         // - If isStudent is true, set studentStatus to "I am currently a student."
         // - If isStudent is false, set studentStatus to "I am not a student."
 /* PART 2: SELECTORS
     --------------------------------------------------
     */

function addClasses() {
    const items = document.querySelectorAll('.selector-examples li');

    items.forEach((item, index) => {
        const position = index + 1;

        if (position % 2 === 0) {
            item.classList.add('even');
        } else {
            item.classList.add('odd');
        }

        if (position === 1) {
            item.classList.add('first');
        }

        if (position === 3 || position === 4) {
            item.classList.add('highlighter');
        }

        if (position === items.length) {
            item.classList.add('last');
        }
    });
}

document.querySelector("#add-classes").addEventListener('click', addClasses);

// PART 3: REPLACEMENT TEXT
document.querySelector("#change-language").addEventListener('click', () => {
    // 1. Get the value from the input
    const inputValue = document.getElementById('newLanguage').value;

    // 2. Select all elements with the .currentLanguage class
    const elements = document.querySelectorAll('.currentLanguage');

    // 3. Update each of them with the new value
    elements.forEach(element => {
        element.innerHTML = inputValue;
    });
});


/* PART 4: TOGGLES
-------------------------------------------------- */

// Modifying CSS attributes
let boxColor = "rgb(153, 51, 51)"; // Same as .cardinal background-color

document.querySelector("#button_toggle_colors").addEventListener('click', () => {
    document.querySelectorAll(".box").forEach(box => {
        const currentColor = window.getComputedStyle(box).backgroundColor;
        if (currentColor === boxColor) {
            // If it's currently the default color, turn it white
            box.style.backgroundColor = "white";
        } else {
            // Otherwise, return it to the default color
            box.style.backgroundColor = boxColor;
        }
    });
});

// Adding/Removing classes to manipulate shapes
document.querySelector("#button_toggle_roundedges").addEventListener('click', () => {
    document.querySelectorAll(".box").forEach(box => {
        box.classList.toggle("round-edge");
    });
});
