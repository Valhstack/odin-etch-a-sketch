const sketchGrid = document.getElementById("sketchGrid");
let hoverEnabled = false, touchDrawing = false;
let opacity = 0.1, newOpacity;

function changeOpacity() {
    let currentOpacity = parseFloat(event.target.style.opacity) || 0;
    newOpacity = currentOpacity + 0.1;

    if (newOpacity > 1) {
        newOpacity = 1;
    }
}

function colorSquare(square) {
    changeOpacity();

    if (!colorPicked) {
        color = "green";
    }

    if (hoverEnabled && !eraserEnabled) {
        square.style.backgroundColor = color;
        square.style.opacity = newOpacity;
    }
    else if (hoverEnabled && eraserEnabled) {
        square.style.backgroundColor = "#2c3e50";
        square.style.opacity = "1";
    }
}

sketchGrid.addEventListener("pointermove", (event) => {
    if (event.target.classList.contains("square")) {
        colorSquare(event.target);
        console.log("X: ", event.clientX, " Y: ", event.clientY);
    }
})

sketchGrid.addEventListener('pointerup', (event) => {
    if (event.pointerType === "touch") {
        touchDrawing = false;

        sketchGrid.releasePointerCapture(event.pointerId);
    }
})