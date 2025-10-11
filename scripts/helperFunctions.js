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
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = 128 + "px";
            square.style.height = 128 + "px";
            sketchContainer.appendChild(square);
        }
    }
}