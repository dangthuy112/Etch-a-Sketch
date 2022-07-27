const divsContainer = document.querySelector('.divs-container');

for (let x = 0; x < 16; x++) {
    const rowDiv = document.createElement('div');

    for (let y = 0; y < 16; y++) {
        const columnDiv = document.createElement('div');

        
        columnDiv.style.height = '10px';
        columnDiv.style.width = '10px';

        rowDiv.appendChild(columnDiv);
    }

    divsContainer.appendChild(rowDiv);
}

