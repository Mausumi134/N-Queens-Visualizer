

const algorithmVisualizerSection = document.getElementById("algorithm-visualizer-section");

const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section");

const logSection = document.getElementById("log-section");


export default function generateTableOfSizeN(n, tableNumber) {
    
    const tbl = document.createElement("table");
    
    tbl.setAttribute("id", "chess-board-" + tableNumber);

    const tblCaption = document.createElement("caption");
    
    tblCaption.innerHTML = '<span style="color:black;font-weight: bolder">Chessboard - ' + tableNumber + ' of size ' + n + ' x ' + n + '</span>';

   
    tbl.appendChild(tblCaption);

    
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < n; i++) {
      
        const row = document.createElement("tr");
      
        row.setAttribute("id", "table-" + tableNumber + "-row-" + (i + 1));

        for (let j = 0; j < n; j++) {
            const cell = document.createElement("td");
            cell.setAttribute("id", "table-" + tableNumber + "-row-" + (i + 1) + "-col-" + (j + 1));
            row.appendChild(cell);
        }

        
        tblBody.appendChild(row);
    }

  
    tbl.appendChild(tblBody);

    
    nQueensVisualizerSection.appendChild(tbl);

    const pTag = document.createElement("p");
   
    pTag.setAttribute("class", "blue-background");
  
    pTag.innerHTML = "Add Chess Board Number - " + tableNumber;
  
    logSection.appendChild(pTag);

    scrollToBottom(algorithmVisualizerSection);

    scrollToBottom(logSection);
}


function scrollToBottom(node) {
    node.scrollTop = node.scrollHeight;
}
