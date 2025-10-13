const sketchGrid = document.getElementById("sketchGrid");
let hoverEnabled = false;
let opacity = 0.1;

sketchGrid.addEventListener("pointerover", (event) => {
    let currentOpacity = parseFloat(event.target.style.opacity) || 0;
    let newOpacity = currentOpacity + 0.1;

    if (newOpacity > 1) {
        newOpacity = 1;
    }

    if (!colorPicked) {
        color = "blue";
    }

    if (hoverEnabled && !eraserEnabled) {
        event.target.style.backgroundColor = color;
        event.target.style.opacity = newOpacity;
    }
    else if (hoverEnabled && eraserEnabled) {
        event.target.style.backgroundColor = "#2c3e50";
        event.target.style.opacity = "1";
    }
})