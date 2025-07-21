//GLOBAL VARIABLES 
const container = document.querySelector('#container');
const gridItems = document.querySelectorAll('.grid');

// DIVS FOR GRID
function createDivs (num) {
    for (let i = 0; i < num; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
    };
};

createDivs(16);


// NEW GRID BUTTON - ASK HOW MANY SQUARES - RESET 
const newGrid = document.querySelector('.new-grid');

// PROMPT
newGrid.addEventListener('click', () => {
    let numSides = prompt("Enter the number of squares per side:");
    console.log(numSides);

    
    // RESET GRID
    gridItems.forEach(item => {
            /* item.classList.remove("hover"); */
            item.remove();
        });

    

    createDivs(numSides); 
    });


// DIV EVENT LISTENER


gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add("hover");
        console.log("Mouse entered div.");
    });
});
