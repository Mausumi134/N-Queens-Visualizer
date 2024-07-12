

const logSection = document.getElementById("log-section");

function markCurrentSqaureBlue(row, col, tableNumber) {
   
    const cell = document.getElementById("table-" + tableNumber + "-row-" + (row + 1) + "-col-" + (col + 1));
    cell.setAttribute("class", "blue-background") 

    const pTag = document.createElement("p"); 
    pTag.innerHTML = "Current sqaure " + (row + 1) + "," + (col + 1) + " on Board Number " + tableNumber; 
    pTag.setAttribute("class", "blue-background normal-margin"); 
    logSection.appendChild(pTag); 

   
    scrollToBottom(logSection);
}


function removeSquareColor(row, col, tableNumber) {
   
    const cell = document.getElementById("table-" + tableNumber + "-row-" + (row + 1) + "-col-" + (col + 1));
    cell.removeAttribute("class") 
}

function scrollToBottom(node) {
    node.scrollTop = node.scrollHeight;
}

export { markCurrentSqaureBlue, removeSquareColor }