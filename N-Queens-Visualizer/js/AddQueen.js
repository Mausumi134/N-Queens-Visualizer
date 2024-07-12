
const logSection = document.getElementById("log-section");

const queenEmoji = "&#9813;";


export default function addQueen(row, col, tableNumber) {

  const cell = document.getElementById("table-" + tableNumber + "-row-" + (row + 1) + "-col-" + (col + 1));
  cell.innerHTML = queenEmoji; 

  const pTag = document.createElement("p"); 
  pTag.innerHTML = "Add a Queen at position " + (row + 1) + "," + (col + 1) + " on Board Number " + tableNumber; 
  pTag.setAttribute("class", "green-background"); 
  logSection.appendChild(pTag); 

  
  scrollToBottom(logSection);
}

function scrollToBottom(node) {
  node.scrollTop = node.scrollHeight;
}
