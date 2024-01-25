const container = document.querySelector('.container');
const btnReset = document.querySelector('.btnReset');
const btnColor = document.querySelector('.btnColor');
const btnBlack = document.querySelector('.btnBlack');
const btnErase = document.querySelector('.btnErase');
const gridSize = 50;
  
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
            
            childGridDiv.addEventListener('mouseover', () => {        
            childGridDiv.style.background = 'black';            
            })

            gridDiv.appendChild(childGridDiv);             
        }
        container.appendChild(gridDiv);         
    }   
}

function emptyDivContainer (parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    } 
    return;
}

function createRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log({r, g, b});
        return `rgb(${r}, ${g}, ${b})`;
}

btnReset.addEventListener('click', () => {    
    let userNumber = Number(prompt('Please enter a number of squares per side up to 100'));
   
    if(!userNumber){                
        return;
    }

    while (userNumber > 100){
        userNumber = Number(prompt('Please enter a smaller number of squares per side up to 100'));
    }    
    
    emptyDivContainer(container);
    return changeGridSize(userNumber);
})

btnColor.addEventListener('click', () => {
    let cells = document.querySelectorAll('.childGridDiv');

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', () => {
            cells[i].style.background = createRandomColor();
        })
    }
})

btnBlack.addEventListener('click', () => {
    let cells = document.querySelectorAll('.childGridDiv');

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', () => {
            cells[i].style.background = 'black';
        })
    }
})

btnErase.addEventListener('click', () => {
    let cells = document.querySelectorAll('.childGridDiv');

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', () => {
            cells[i].style.background = 'white';
        })
    }
})

changeGridSize(gridSize);




