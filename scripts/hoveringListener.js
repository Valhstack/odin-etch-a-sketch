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
    if (!colorPicked) {
        color = "pink";
    }

    if (!eraserEnabled) {
        changeOpacity();

        square.style.backgroundColor = color;
        square.style.opacity = newOpacity;
    }
    else {
        square.style.backgroundColor = "#2c3e50";
        square.style.opacity = "1";
    }
}

function getSquareUnderPointer(x, y) {
    const rect = sketchGrid.getBoundingClientRect();
    const relX = x - rect.left;
    const relY = y - rect.top;

    const squareWidth = sketchGrid.children[0].offsetWidth;
    const squareHeight = sketchGrid.children[0].offsetHeight;
    const numCols = sketchGrid.style.gridTemplateColumns.split(" ").length;

    const col = Math.floor(relX / squareWidth);
    const row = Math.floor(relY / squareHeight);
    const index = row * numCols + col;

    return sketchGrid.children[index];
}


// pointer down starts drawing
sketchGrid.addEventListener("pointerdown", (event) => {
    touchDrawing = true;
    sketchGrid.setPointerCapture(event.pointerId);
    colorSquareUnderPointer(event);
});

// pointer move colors while dragging
sketchGrid.addEventListener("pointermove", (event) => {
    if (!hoverEnabled) return;
    const square = getSquareUnderPointer(event.clientX, event.clientY);
    colorSquare(square);
});

// pointer up stops drawing
sketchGrid.addEventListener("pointerup", (event) => {
    touchDrawing = false;
    sketchGrid.releasePointerCapture(event.pointerId);
});
