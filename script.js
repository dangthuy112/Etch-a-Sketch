const divsContainer = document.querySelector('.divs-container');
const clearButton = document.querySelector('.clear-button');
let answer;

clearButton.addEventListener('click', () => {
    divsContainer.innerHTML = "";
    generateGrid();
})

while (true) {
    answer = prompt(`How many square grids would you like?
    Enter a number from 16-64`);

    if (answer >= 16 && answer <= 64) {
        break;
    }
}

generateGrid();

function generateGrid() {
    for (let x = 0; x < answer; x++) {
        const rowDiv = document.createElement('div');

        for (let y = 0; y < answer; y++) {
            const columnDiv = document.createElement('div');
            columnDiv.style.height = `${450 / answer}px`;
            columnDiv.style.width = `${450 / answer}px`;
            columnDiv.addEventListener('mouseenter',
                (e) => e.target.classList.add('hover'));
            // columnDiv.addEventListener('mouseleave',
            //     (e) => e.target.classList.remove('hover'));

            rowDiv.appendChild(columnDiv);
        }

        divsContainer.appendChild(rowDiv);
    }
}



