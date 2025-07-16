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



