// PART 1: INTRO TEXT

// Declare variables
let name = "Mahlet"; // User's name
let age = 21;        // User's age
let isStudent = true; // User is a student

// Function to display introduction
function introduction(name, age, isStudent) {
    let message = `Hello, my name is ${name}. I am ${age} years old and I am currently ${isStudent ? 'a student' : 'not a student'}.`;
    
    const messageDisplayArea = document.getElementById('intro'); // DO NOT CHANGE
    messageDisplayArea.innerHTML = message;
}

// PART 2: SELECTORS

function addClasses() {
    // Odd numbered rows (1, 3, 5)
    const listItems = document.querySelectorAll('ol li:nth-child(odd)');
    listItems.forEach(item => item.classList.add('odd'));

    // 4th and 5th item
    const fourthItem = document.querySelector('ol li:nth-child(4)');
    fourthItem.classList.add('highlighter');

    const fifthItem = document.querySelector('ol li:nth-child(5)');
    fifthItem.classList.add('highlighter');

    // Last item
    const lastItem = document.querySelector('ol li:last-child');
    lastItem.classList.add('last');
}

// PART 3: REPLACEMENT TEXT

document.getElementById('button_change_language').addEventListener('click', function() {
    let inputValue = document.getElementById('newLanguage').value;
    let element = document.querySelector('.currentLanguage');
    element.innerHTML = inputValue;
});

// PART 4: TOGGLES

document.getElementById('button_toggle_colors').addEventListener('click', function() {
    const boxColor = 'lightblue';
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        if (box.style.backgroundColor === boxColor) {
            box.style.backgroundColor = 'white';
        } else {
            box.style.backgroundColor = boxColor;
        }
    });
});

document.getElementById('button_toggle_roundedges').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.classList.toggle('round-edge');
    });
});
