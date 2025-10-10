const gridSize = document.getElementById("gridSize");

gridSize.addEventListener('input', () => {
    let child = sketchContainer.lastElementChild;

    while(child){
        sketchContainer.removeChild(child);
        child = sketchContainer.lastElementChild;
    }

    let maxUnits = 100;

    let squareSize = Math.floor(maxUnits / gridSize.value) * 4;

    for (let i = 0; i < gridSize.value; i++) {
        for (let j = 0; j < gridSize.value; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            sketchContainer.appendChild(square);
        }
    }
})