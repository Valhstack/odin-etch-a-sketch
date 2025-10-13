const sketchGrid = document.getElementById("sketchGrid");
let hoverEnabled = false;

let isTouchDrawing = false;

function applyColor(item) {
    let color = colorPicked;
    if (!colorPicked) {
        color = "blue";
    }

    if (hoverEnabled && !eraserEnabled) {
        item.style.backgroundColor = color;
    } else if (hoverEnabled && eraserEnabled) {
        item.style.backgroundColor = "#2c3e50";
    }
}

sketchGrid.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    applyColor(e.target);
});

sketchGrid.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'touch') return;
    isTouchDrawing = true;
    applyColor(e.target);
});

sketchGrid.addEventListener('pointermove', e => {
    if (!isTouchDrawing) return;
    applyColor(e.target);
});

sketchGrid.addEventListener('pointerup', e => {
    if (e.pointerType === 'touch') isTouchDrawing = false;
});

sketchGrid.addEventListener('pointercancel', e => {
    if (e.pointerType === 'touch') isTouchDrawing = false;
});