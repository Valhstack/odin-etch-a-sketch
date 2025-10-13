const sketchContainer = document.getElementById("sketchGrid");

document.getElementById("startSketch").addEventListener('click', (e) => {
    AddCSSClass("inactive", document.getElementById("startSketch"), document.getElementById("mainScreenText"));

    RemoveCSSClass("inactive", document.getElementById("gridMainScreen"));

    AddCSSClass("show", document.getElementById("textHint"), document.getElementById("gridMainScreen"));

    defaultGrid();

    if(e.pointerType == "touch"){
        hoverEnabled = true;
    }
})