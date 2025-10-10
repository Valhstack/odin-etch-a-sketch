const sketchContainer = document.getElementById("sketchGrid");

document.getElementById("startSketch").addEventListener('click', () => {
    AddCSSClass("inactive", document.getElementById("startSketch"));

    RemoveCSSClass("inactive", document.getElementById("gridMainScreen"));
})