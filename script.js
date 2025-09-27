//GLOBAL VARIABLES 
const container = document.querySelector('#container');
container.style.width = `${gridDims}px`;
container.style.height = `${gridDims}px`;

const gridDims = 600;
let rows = 16;
let cols = 16;



// DIVS FOR GRID
function createDivs (num) {
    for (let i = 0; i < num*num; i++) {
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
    const gridItems = document.querySelectorAll('.grid');
    gridItems.forEach(item => {
            item.classList.remove("hover");
            item.remove();
            console.log("This made it to the log.");
            
        });

    

    createDivs(numSides); 
    });


// DIV EVENT LISTENER

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid')) {
        console.log("You hovered over a grid div!");
        let target = event.target;
        target.classList.add("hover");
    };
});


// CSS MANIPULATION

// gridItems.style.width = `calc(100% / ${num)`;


