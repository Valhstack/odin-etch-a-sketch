let color, colorPicked = false;

document.getElementById("colorPicker").addEventListener('change', (event) => {
    if(colorPicked == false){
        colorPicked = !colorPicked;
    }

    color = event.target.value;
})