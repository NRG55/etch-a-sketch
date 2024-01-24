const container = document.querySelector('.container');
  
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
}

changeGridSize(4);