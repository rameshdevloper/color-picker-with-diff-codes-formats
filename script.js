//let colorelement = document.getElementById("colorPickerContainer");
//let selectelement = document.getElementById("selectedColorHexCode");
let colorelement = document.querySelector(".color-picker-container");
let selectelement = document.querySelector(".selected-color-text");
let b2 = document.getElementById("button2");

function bgtogrey(){
    colorelement.style.background = "#e0e0e0";
    selectelement.textContent="#e0e0e0";
}

// function bgtogreen(){
//      colorelement.style.background="#6fcf97";
//     selectelement.textContent="#6fcf97";
// }

function bgtoblue(){
     colorelement.style.background="#56ccf2";
    selectelement.textContent="#56ccf2";
}

function bgtopink(){
     colorelement.style.background="#bb6bd9";
    selectelement.textContent="#bb6bd9";
}

b2.addEventListener ('click',function() {
    colorelement.style.backgroundColor = "#6fcf97";
    selectelement.textContent = "#6fcf97";
});




















