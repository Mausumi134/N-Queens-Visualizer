

const algorithmVisualizerSection = document.getElementById("algorithm-visualizer-section");

const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section");

const logSection = document.getElementById("log-section");


export default function cloneTableOfSizeN(n, tableNumber) {
   
    const node = nQueensVisualizerSection.lastChild;

   
    const tbl = node.cloneNode(true);
   
    tbl.setAttribute("id", "chess-board-" + tableNumber);

    const tblOldCaption = tbl.firstChild;

   
    const tblNewCaption = document.createElement("caption");
  
    tblNewCaption.innerHTML = '<span style="color:black;font-weight: bolder">Chessboard - ' + tableNumber + ' of size ' + n + ' x ' + n + '</span>';

    tbl.replaceChild(tblNewCaption, tblOldCaption);

    const tblBody = tbl.childNodes[1];
  
    const rows = tblBody.childNodes;
   
    const cells = new Array();

   
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
       
        row.setAttribute("id", "table-" + tableNumber + "-row-" + (i + 1));
        cells.push(row.childNodes)
    }

 
    for (let i = 0; i < rows.length; i++) {
   
        const tdArr = cells[i];
       
        for (let j = 0; j < tdArr.length; j++) {
            tdArr[j].setAttribute("id", "table-" + tableNumber + "-row-" + (i + 1) + "-col-" + (j + 1));
        }
    }

   
    nQueensVisualizerSection.appendChild(tbl);

  
    const pTag = document.createElement("p");
  
    pTag.setAttribute("class", "blue-background");

    pTag.innerHTML = "Clone Chess Board Number - " + tableNumber + " from Board " + (tableNumber - 1);
  
    logSection.appendChild(pTag);


    scrollToBottom(algorithmVisualizerSection);

    
    scrollToBottom(logSection);
}


function scrollToBottom(node) {
    node.scrollTop = node.scrollHeight;
}
