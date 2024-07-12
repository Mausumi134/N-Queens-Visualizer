"use strict"

import generateTableOfSizeN from "./GenerateChessBoard.js"; 
import { setCountOfChessBoards, clearAnimationsArr, getAnimationsArr } from "./PrintNQueens.js";
import cloneTableOfSizeN from "./CloneChessBoard.js";


const valueOfNInputElement = document.getElementById("value-of-n");

const startButton = document.getElementById("start-visualization");

const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section");

const logSection = document.getElementById("log-section");

let n = 0;

let chess = 0;

let animationsArr = new Array();


startButton.addEventListener("click", () => {
    if (valueOfNInputElement.value) {
       
        startButton.setAttribute("disabled", "disabled");
        
        valueOfNInputElement.setAttribute("disabled", "disabled");

        n = valueOfNInputElement.value;

        makeChessArr(); 

        clearNQueensVisualizerSection(); 
        resetLogSection(); 

        generateTableOfSizeN(n, 1); 

        setCountOfChessBoards(1); 
        clearAnimationsArr();
        animationsArr = getAnimationsArr(chess, 0); 

        animateNQueens(); 
    }
});


function makeChessArr() {
    chess = new Array(n); 

    for (let i = 0; i < n; i++) {
        chess[i] = new Array(n);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            chess[i][j] = 0;
        }
    }
}


function clearNQueensVisualizerSection() {
    nQueensVisualizerSection.innerHTML = "";
}


function resetLogSection() {
    logSection.innerHTML = ""; 

    const pTag = document.createElement("p"); 
    pTag.innerHTML = "Logs"; 

    const hrTag = document.createElement("hr"); 

    pTag.appendChild(hrTag); 

    logSection.appendChild(pTag); 
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time)); 
}


async function animateNQueens() {
    
    for (let functionArr of animationsArr) {
       
        let animationFunction = functionArr[0];
     
        let args = functionArr[1];

        await delay(200); 
        animationFunction(...args); 
    }

    await delay(200); 

    valueOfNInputElement.removeAttribute("disabled"); 
    startButton.removeAttribute("disabled"); 
}