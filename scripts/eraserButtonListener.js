let eraserEnabled = false;

document.getElementById("eraserButton").addEventListener('click', () => {
    eraserEnabled = !eraserEnabled;
    
    if(eraserEnabled){
        document.getElementById("eraserButtonLabel").textContent = "Draw";
    }
    else{
        document.getElementById("eraserButtonLabel").textContent = "Erase";
    }
})