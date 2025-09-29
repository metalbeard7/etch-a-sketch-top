//GLOBAL VARIABLES 
const gridDims = 600;
let rows = 16;
let cols = 16;

const container = document.querySelector('#container');
container.style.width = `${gridDims}px`;
container.style.height = `${gridDims}px`;
const gridItems = document.querySelectorAll('.grid');
const hover = document.querySelector('.hover');


// DIVS FOR GRID
function createDivs (num) {
    for (let i = 0; i < rows * cols; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);

        newDiv.style.width = `${(gridDims / cols) - 2}px`;
        newDiv.style.height = `${(gridDims / rows) - 2}px`;        

    };
};

createDivs();


// NEW GRID BUTTON - ASK HOW MANY SQUARES - RESET 
const newGrid = document.querySelector('.new-grid');

// PROMPT
newGrid.addEventListener('click', () => {
    let numSides = prompt("Enter the number of squares per side:");
    console.log(numSides);

    
    // RESET GRID
    gridItems.forEach(item => {
            item.classList.remove("hover");
            item.remove();
            console.log("This made it to the log.");
            
        });

    rows = numSides;
    cols = numSides;

    createDivs(); 
    });


// DIV EVENT LISTENER

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid')) {
        let target = event.target;
        target.classList.add("hover");
    
        if (shading.classList.contains('active')) {
            let currentOpacity = parseFloat(target.style.opacity) || 0.2;
            currentOpacity = Math.min(currentOpacity + 0.2, 1);
            target.style.opacity = currentOpacity.toString();
        }
    }
});
        
        


// RANDOMIZE BUTTON - MAKE GRID SQUARES RANDOM COLORS


// SHADING BUTTON - PRESET OPACITY, PROGRESSIVELY DARKENS WITH MOUSEOVER EVENT
const shading = document.querySelector('.shading');

shading.addEventListener('click', () => {
    shading.classList.toggle('active');
    if (shading.classList.contains('active')) {
        console.log("Toggle is on");
    } else {
        console.log("Toggle is off");
        
    }

    document.querySelectorAll('.grid').forEach(item => {
        if (shading.classList.contains('active')) {
            item.style.opacity = ".2"
        } else {
            item.style.opacity = "1";
        }
    });
    console.log("opacity button");
    
});

console.log(currentOpacity);


/* 
create toggle for shading button
add opacity to current event listener to increase opacity if button is active*/

/* 
const currentOpacity = gridItems.style.opacity 
*/