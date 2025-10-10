document.getElementById("resetSketch").addEventListener('click', () => {
    for(const child of sketchContainer.children){
        child.style.backgroundColor = "#2c3e50";
    }
})