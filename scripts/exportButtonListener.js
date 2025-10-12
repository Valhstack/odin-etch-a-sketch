document.getElementById("exportButton").addEventListener('click', () => {
    html2canvas(sketchContainer).then(canvas => {
        const imgData = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = imgData;
        link.download = "etch-a-sketch.png";
        link.click();
    })
})