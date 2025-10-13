function AddCSSClass(className, ...values) {
    values.forEach(element => {
        element.classList.add(className);
    });
}

function RemoveCSSClass(className, ...values) {
    values.forEach(element => {
        element.classList.remove(className);
    });
}

function defaultGrid() {
    let squareSize = 0;

    if (width < 415) {
        squareSize = 320 / 4;
    } else {
        squareSize = 512 / 4;
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";

            gridSizeLabel.textContent = "4 x 4";

            sketchContainer.appendChild(square);
        }
    }
}