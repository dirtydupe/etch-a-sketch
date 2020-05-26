let grid = document.getElementById("grid");
let gridSize = 16;
let borderSize = "0px";
let gridOff = true;

function buildGrid() {
    grid.style.setProperty('--gridSize', gridSize);

    for(let i = 0; i < gridSize * gridSize; i++)
    {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.setProperty('--border', borderSize);
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

const gridToggle = document.querySelector('#gridToggle')
gridToggle.addEventListener('click', () => {
    const cells = Array.from(document.getElementsByClassName('cell'));

    if(gridOff)
    {
        gridOff = false;
        gridToggle.textContent = "Grid Off";
        borderSize = "1px";
    }
    else
    {
        gridOff = true;
        gridToggle.textContent = "Grid On";
        borderSize = "0px";
    }

    for(let i = 0; i < gridSize * gridSize; i++)
        cells[i].style.setProperty('--border', borderSize);
});

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
    buildGrid();
});

buildGrid();