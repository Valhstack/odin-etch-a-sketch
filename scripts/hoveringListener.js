const sketchGrid = document.getElementById("sketchGrid");
let hoverEnabled = false, touchDrawing = false;
let opacity = 0.1;

function changeOpacity() {
    let currentOpacity = parseFloat(event.target.style.opacity) || 0;
    let newOpacity = currentOpacity + 0.1;

    if (newOpacity > 1) {
        newOpacity = 1;
    }
}

function handleMove(event) {

    changeOpacity();

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
}

sketchGrid.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
        touchDrawing = true;
    }
})

sketchGrid.addEventListener("pointermove", handleMove);

sketchGrid.addEventListener("pointerover", (event) => {
    if (touchDrawing) {
        changeOpacity();

        if (!colorPicked) {
            color = "red";
        }

        if (hoverEnabled && !eraserEnabled) {
            event.target.style.backgroundColor = color;
            event.target.style.opacity = newOpacity;
        }
        else if (hoverEnabled && eraserEnabled) {
            event.target.style.backgroundColor = "#2c3e50";
            event.target.style.opacity = "1";
        }
    }
})

sketchGrid.addEventListener('pointerup', (event) => {
    if (event.pointerType === "touch") {
        touchDrawing = false;
    }
})