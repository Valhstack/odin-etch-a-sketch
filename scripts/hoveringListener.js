const sketchGrid = document.getElementById("sketchGrid");
let hoverEnabled = false;

sketchGrid.addEventListener("pointerover", (event) => {
    if (!colorPicked) {
        color = "blue";
    }
    
    if (hoverEnabled && !eraserEnabled) {
        event.target.style.backgroundColor = color;
    }
    else if (hoverEnabled && eraserEnabled) {
        event.target.style.backgroundColor = "#2c3e50";
    }
})