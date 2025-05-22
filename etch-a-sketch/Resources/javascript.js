const container = document.querySelector("#Etch-a-Sketch");
const sizeButton = document.querySelector("#changeSizeButton");
const resetButton = document.querySelector("#clearEtchBoard");


function squared(value) {
    return value*value;
};
executeRowStructure(16,25);
//Values for sketch box//

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

function clearRowStructure(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
};

function executeRowStructure(totalBoxCount,boxHeightWidthPercentage){
    clearRowStructure(); 
    
    for (i = 0; i < totalBoxCount; i++) {
        const etchBox = document.createElement("div");
        etchBox.classList.add("etchSketchtile");
        etchBox.style.flexBasis =`${boxHeightWidthPercentage}%`;
        etchBox.style.opacity = 100;
        etchBox.style.backgroundColor = "white";
        etchBox.addEventListener("mouseover", () => {
                etchBox.style.backgroundColor = randomColourHexGenerator();
                etchBox.style.opacity -=10;
                console.log(etchBox.style.opacity);
        });
        container.appendChild(etchBox);
    };
};

//button functions//

let rowLength ;


sizeButton.addEventListener("click", (e) => {
    rowLengthString = prompt("how long do you want the row to be?", 64);
    rowLength = parseInt(rowLengthString);
    console.log(rowLength);

    if (rowLength > 101 || rowLength < 0) {
        alert('enter a value greater than zero and less than 101')
    }
    else { console.log(`${typeof(rowLength)}`);
        
        const boxHeightWidthPercentage = 100/(rowLength);
        const totalBoxCount = squared(rowLength);
        
        console.log(totalBoxCount);
        executeRowStructure(totalBoxCount,boxHeightWidthPercentage);}
});

resetButton.addEventListener("click", () => {
    clearRowStructure();
    executeRowStructure(16,25)
});