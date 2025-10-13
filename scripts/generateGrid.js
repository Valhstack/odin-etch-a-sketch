const gridSize = document.getElementById("gridSize");
const gridSizeSections = document.getElementById("stepList");
const allowedValues = Array.from(gridSizeSections.querySelectorAll('option')).map(opt => parseFloat(opt.value)).filter(v => !isNaN(v)).sort((a, b) => a - b);

const gridSizeLabel = document.getElementById("gridSizeLabel");

let width = screen.width;

gridSize.addEventListener('input', () => {
    let child = sketchContainer.lastElementChild;

    while (child) {
        sketchContainer.removeChild(child);
        child = sketchContainer.lastElementChild;
    }

    console.log(allowedValues);

    const currentValue = parseFloat(gridSize.value);
    const nearestValue = allowedValues.reduce((a, b) => Math.abs(b - currentValue) < Math.abs(a - currentValue) ? b : a);

    gridSize.value = nearestValue;

    let squareSize = 0;

    if (width < 415) {
        squareSize = 320 / gridSize.value;
    } else {
        squareSize = 512 / gridSize.value;
    }

    for (let i = 0; i < gridSize.value; i++) {
        for (let j = 0; j < gridSize.value; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";

            gridSizeLabel.textContent = gridSize.value + " x " + gridSize.value;

            sketchContainer.appendChild(square);
        }
    }
})