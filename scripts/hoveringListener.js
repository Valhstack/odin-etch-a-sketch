const sketchGrid = document.getElementById("sketchGrid");
let hoverEnabled = false, touchDrawing = false;
let opacity = 0.1, newOpacity, lastSquare = null;

function changeOpacity(square) {
    let currentOpacity = parseFloat(square.style.opacity) || 0;

    if(currentOpacity === 1 && square.classList.contains("erased")){
        currentOpacity = 0;
        RemoveCSSClass("erased", square);
    }
    
    newOpacity = currentOpacity + 0.1;

    if (newOpacity > 1) {
        newOpacity = 1;
    }
}

function colorSquare(square) {    
    if (!colorPicked) {
        color = "pink";
    }

    if ((hoverEnabled || touchDrawing) && !eraserEnabled) {
        changeOpacity(square);

        square.style.backgroundColor = color;
        square.style.opacity = newOpacity;
    }
    else{
        square.style.backgroundColor = "#2c3e50";
        square.style.opacity = "1";
        AddCSSClass("erased", square);
    }
}

sketchGrid.addEventListener("pointerdown", (event) => {
    touchDrawing = true;
    sketchGrid.setPointerCapture(event.pointerId);

    const square = document.elementFromPoint(event.clientX, event.clientY);

    if(square && square.classList.contains("square")){
        lastSquare = square;
        colorSquare(square);
    }
});

sketchGrid.addEventListener("pointermove", (event) => {
    const square = document.elementFromPoint(event.clientX, event.clientY);

    if(!square || !square.classList.contains("square")) return;
    
    if(square === lastSquare) return;

    lastSquare = square;

    colorSquare(square);
});

sketchGrid.addEventListener("pointerup", (event) => {
    touchDrawing = false;
    lastSquare = null;
    sketchGrid.releasePointerCapture(event.pointerId);
});