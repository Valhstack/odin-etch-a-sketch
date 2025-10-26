document.getElementById("resetSketch").addEventListener('click', () => {
    for(const child of sketchContainer.children){
        child.style.backgroundColor = "#2c3e50";
    }

    gridSize.value = 4;
    gridSizeLabel.textContent = gridSize.value + " x " + gridSize.value;
    document.getElementById("colorPicker").value = "#0077b6";
    colorPicked = false;

    let child = sketchContainer.lastElementChild;

    while (child) {
        sketchContainer.removeChild(child);
        child = sketchContainer.lastElementChild;
    }
    
    defaultGrid();
})