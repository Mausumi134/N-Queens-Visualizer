
const logSection = document.getElementById("log-section"); 
export default function removeQueen(row, col, tableNumber) {

  const cell = document.getElementById("table-" + tableNumber + "-row-" + (row + 1) + "-col-" + (col + 1));
  cell.innerHTML = ""; 

  const pTag = document.createElement("p");
  pTag.innerHTML = "Remove the Queen at position " + (row + 1) + "," + (col + 1) + " on Board Number " + tableNumber;
  pTag.setAttribute("class", "red-background");
  logSection.appendChild(pTag);

  
  scrollToBottom(logSection);
}
function scrollToBottom(node) {
  node.scrollTop = node.scrollHeight;
}
