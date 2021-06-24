var labelIndex = 1;
var fadeIndex = 1;


function showLabels(n) {
    var i;
    var labels = document.getElementsByClassName("flip");
    if(n > labels.length) {labelIndex = 1}
    if(n < 1) {labelIndex = labels.length}

    
    labels[0].style.backgroundColor = "#E7F1FF";
    labels[1].style.backgroundColor = "#C7DEFF";
    labels[2].style.backgroundColor = "#8EBBFC";
    labels[3].style.backgroundColor = "#4D87D9"; labels[3].style.color = "#FFFFFF";
    labels[4].style.backgroundColor = "#1B58AD"; labels[4].style.color = "#FFFFFF";
    labels[5].style.backgroundColor = "#003277"; labels[5].style.color = "#FFFFFF";
    
    
    labels[labelIndex - 1].style.backgroundColor = "#FFFFFF";
    labels[labelIndex - 1].style.color = "#003277";
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