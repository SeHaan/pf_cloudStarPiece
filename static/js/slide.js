var labelIndex = 1;
var fadeIndex = 1;

function showLabels(n) {
    var i;
    var labels = document.getElementsByClassName("flip");
    if(n > labels.length) {labelIndex = 1}
    if(n < 1) {labelIndex = labels.length}

    for (i = 0; i < labels.length; i++) {
        labels[i].style.backgroundColor = "rgb(40, 189, 189)";
    }

    labels[labelIndex - 1].style.backgroundColor = "rgb(0, 128, 128)";
}

function showFades(n) {
    var i;
    var fades = document.getElementsByClassName("fade");
    if(n > fades.length) {fadeIndex = 1}
    if(n < 1) {fadeIndex = fades.length}

    for (i = 0; i < fades.length; i++) {
        fades[i].style.display = "none";
    }

    fades[fadeIndex - 1].style.display = "block";
}

function current(n) {
    showLabels(labelIndex = n);
    showFades(fadeIndex = n);
}

window.onload = function() {
    labelIndex = 1;
    fadeIndex = 1;
    showLabels(labelIndex);
    showFades(fadeIndex);
}