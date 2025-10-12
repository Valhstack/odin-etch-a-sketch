const sketchContainer = document.getElementById("sketchGrid");

document.getElementById("startSketch").addEventListener('click', () => {
    AddCSSClass("inactive", document.getElementById("startSketch"), document.getElementById("mainScreenText"));

    RemoveCSSClass("inactive", document.getElementById("gridMainScreen"));

    AddCSSClass("show", document.getElementById("textHint"), document.getElementById("gridMainScreen"));

    defaultGrid();
})