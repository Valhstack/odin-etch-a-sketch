const sketchGrid = document.getElementById("sketchGrid");
let hoverEnabled = true;

sketchGrid.addEventListener("mouseover", (event) => {
    if (hoverEnabled) {
        event.target.style.backgroundColor = "blue";
    }
})