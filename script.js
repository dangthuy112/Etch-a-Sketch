const divsContainer = document.querySelector('.divs-container');

for (let x = 0; x < 16; x++) {
    const rowDiv = document.createElement('div');

    for (let y = 0; y < 16; y++) {
        const columnDiv = document.createElement('div');
        columnDiv.style.height = '15px';
        columnDiv.style.width = '15px';
        columnDiv.addEventListener('mouseenter', hoverStart);

        rowDiv.appendChild(columnDiv);
    }

    divsContainer.appendChild(rowDiv);
}

function hoverStart (e) {
    e.target.classList.add('hover');
    console.log(e.target);
    console.log("mouse enter");
}
