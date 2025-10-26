let fadeEnabled = false;

document.getElementById("fadeButton").addEventListener('click', () => {
    fadeEnabled = !fadeEnabled;
    
    if(fadeEnabled){
        document.getElementById("fadeButtonLabel").textContent = "Draw";
    }
    else{
        document.getElementById("fadeButtonLabel").textContent = "Fade";
    }
})