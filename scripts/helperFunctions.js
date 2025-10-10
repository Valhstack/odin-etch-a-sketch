function AddCSSClass(className, ...values) {
    values.forEach(element => {
        element.classList.add(className);
    });
}

function RemoveCSSClass(className, ...values) {
    values.forEach(element => {
        element.classList.remove(className);
    });
}