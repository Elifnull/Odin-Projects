

const container = document.querySelector("#Etch-a-Sketch");


function squared(value) {
    return value*value;
};

//Values for sketch box

let rowLength = 32;
let boxHeightWidthPercentage = 100/(rowLength);
let totalBoxCount = squared(rowLength);

function randomColourHexGenerator(){
    const hexValue = [0,1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
    let colour = "#";
    const hexValueLength = hexValue.length - 1;
    for (i = 0; i < 6; i++){
        colour+= hexValue[Math.floor(Math.random() * hexValueLength)];
    }
    console.log(colour);
    return colour;
};



for (i = 1; i < totalBoxCount; i++) {
    const etchBox = document.createElement("div");
    etchBox.classList.add("etchSketchtile");
    etchBox.addEventListener("mouseover", () => {
        etchBox.style.backgroundColor = randomColourHexGenerator();
    });
    //etchBox.addEventListener();

    container.appendChild(etchBox);
};
