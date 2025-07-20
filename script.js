//GLOBAL VARIABLES 
const container = document.querySelector('#container');


// DIVS FOR GRID
function createDivs (num) {
    for (let i = 0; i < num; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
    };
};

createDivs(16);


// DIV EVENT LISTENER
const gridItems = document.querySelectorAll('.grid');

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add("hover");
        console.log("Mouse entered div.");
    });
});


// NEW GRID BUTTON - ASK HOW MANY SQUARES - RESET 
const newGrid = document.querySelector('.new-grid');

newGrid.addEventListener('click', => {
    
});
