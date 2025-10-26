const sketchGrid = document.getElementById("sketchGrid");
let hoverEnabled = false, touchDrawing = false;
let opacity = 0.1, newOpacity, lastSquare = null;

function changeOpacity(square) {
    let currentOpacity = parseFloat(square.style.opacity) || 0;

    if(currentOpacity === 1){
        currentOpacity = 0
    }
    newOpacity = currentOpacity + 0.1;

    if (newOpacity > 1) {
        newOpacity = 1;
    }
}

function colorSquare(square) {
    console.log("Inside color square")
    
    if (!colorPicked) {
        color = "pink";

        console.log("Color set")
    }

    if (!eraserEnabled) {
        changeOpacity(square);

        square.style.backgroundColor = color;
        square.style.opacity = newOpacity;
    }
    else {
        square.style.backgroundColor = "#2c3e50";
        square.style.opacity = "1";
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

    console.log("Last square ", lastSquare, " current square ", square);
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
