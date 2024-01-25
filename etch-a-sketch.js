const container = document.querySelector('.container');
const btnReset = document.querySelector('.btnReset');
const gridSize = 20;
  
function changeGridSize(cellQty){
    for (let i = 0; i < cellQty; i++){
        const gridDiv = document.createElement('div');

        gridDiv.classList.add('gridRow');        
        
        for (let j = 0; j < cellQty; j++){
            const childGridDiv = document.createElement('div');
            const cellSize = 600 / cellQty;  

            childGridDiv.classList.add('childGridDiv');
            childGridDiv.style.width = `${cellSize}px`;
            childGridDiv.style.height = `${cellSize}px`;
            gridDiv.appendChild(childGridDiv);             
        }
        container.appendChild(gridDiv);         
    }
    const cells = document.querySelectorAll('.childGridDiv');

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {        
        cell.style.background = 'black';
        })
    })    
}

function emptyDivContainer (parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    } 
    return;
}

btnReset.addEventListener('click', () => {    
    let userNumber = Number(prompt('Please enter the number for a new size of the grid'));
    emptyDivContainer(container);
    return changeGridSize(userNumber);
})

changeGridSize(gridSize);




