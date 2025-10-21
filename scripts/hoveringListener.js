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

/*function handleMove(event) {
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
}*/

sketchGrid.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
        sketchGrid.setPointerCapture(event.pointerId);

        touchDrawing = true;
    }

    /*sketchGrid.onpointermove = function (event) {
        if (!event.target.classList.contains("square")) return;

        changeOpacity();

        if (!colorPicked) {
            color = "purple";
        }

        if (hoverEnabled && !eraserEnabled) {
            event.target.style.backgroundColor = color;
            event.target.style.opacity = newOpacity;
        }
        else if (hoverEnabled && eraserEnabled) {
            event.target.style.backgroundColor = "#2c3e50";
            event.target.style.opacity = "1";
        }
    };

    sketchGrid.onpointerup = function (event) {
        if (event.pointerType === "touch") {
            touchDrawing = false;
        }
    }*/
})

//sketchGrid.addEventListener("pointermove", handleMove);

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

sketchGrid.addEventListener("pointerover", (event) => {

    if(event.target.classList.contains("square")) colorSquare(event.target);
    
    /*changeOpacity();

    if (!colorPicked) {
        color = "green";
    }

    if (event.target.classList.contains("square")) {
        if (hoverEnabled && !eraserEnabled) {
            event.target.style.backgroundColor = color;
            event.target.style.opacity = newOpacity;
        }
        else if (hoverEnabled && eraserEnabled) {
            event.target.style.backgroundColor = "#2c3e50";
            event.target.style.opacity = "1";
        }
    }*/
})

sketchGrid.addEventListener('pointerup', (event) => {
    if (event.pointerType === "touch") {
        touchDrawing = false;

        sketchGrid.releasePointerCapture(event.pointerId);
    }
})