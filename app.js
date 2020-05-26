let grid = document.getElementById("grid");
let gridSize = 16;

function buildGrid() {
    grid.style.setProperty('--gridSize', gridSize);

    for(let i = 0; i < gridSize * gridSize; i++)
    {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'black';
        });

        cell.addEventListener('mouseleave', () => {
            cell.style.backgroundColor = 'black';
        });
    
        grid.appendChild(cell);
    }
}

function clearGrid() {
    grid.innerHTML = "";
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
     clearGrid();
     buildGrid();
});

const newGrid = document.querySelector('#buildNew');
newGrid.addEventListener('click', () => {
    clearGrid();
    const sizeInput = document.getElementById('sizeInput');
    gridSize = sizeInput.value;
    console.log("gridSize: " + gridSize);
    buildGrid();
});

buildGrid();